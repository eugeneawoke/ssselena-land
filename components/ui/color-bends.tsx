"use client";

import * as React from "react";
import * as THREE from "three";

export interface ColorBendsProps {
  rotation?: number;
  speed?: number;
  colors?: string[];
  transparent?: boolean;
  autoRotate?: number;
  scale?: number;
  frequency?: number;
  warpStrength?: number;
  mouseInfluence?: number;
  parallax?: number;
  noise?: number;
  className?: string;
  style?: React.CSSProperties;
}

function hexToVec3(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) / 255, ((n >> 8) & 0xff) / 255, (n & 0xff) / 255];
}

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform float uSpeed;
  uniform float uFrequency;
  uniform float uWarpStrength;
  uniform float uNoise;
  uniform float uRotation;
  uniform float uScale;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform float uTransparent;
  uniform vec2 uMouse;
  uniform float uMouseInfluence;

  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  void main() {
    vec2 uv = (vUv - 0.5) / uScale + 0.5;
    uv += uMouse * uMouseInfluence;
    float rot = uRotation * 0.01745329;
    float c = cos(rot), s = sin(rot);
    uv = vec2(uv.x * c - uv.y * s, uv.x * s + uv.y * c);
    uv += 0.5;

    float t = uTime * uSpeed;
    float n = 0.0;
    if (uNoise > 0.0) {
      n = noise(uv * 80.0 + t * 0.5) * uNoise;
    }

    float warp = sin(uv.x * 3.14159 * uFrequency + t) * 0.5 + 0.5;
    warp += sin(uv.y * 3.14159 * uFrequency * 0.7 + t * 0.8) * 0.5 + 0.5;
    warp = warp * 0.5;
    warp += sin((uv.x + uv.y) * 3.14159 * uFrequency * uWarpStrength + t * 1.2) * 0.15;
    warp += n;

    float bend = smoothstep(0.2, 0.5, warp) - smoothstep(0.5, 0.8, warp);
    bend = bend * 0.5 + 0.5;
    bend += sin(uv.y * 6.28318 * uFrequency + t) * 0.12 * uWarpStrength;
    bend += sin(uv.x * 6.28318 * uFrequency * 0.6 - t * 0.7) * 0.12 * uWarpStrength;
    bend = clamp(bend + n, 0.0, 1.0);

    vec3 col = mix(uColor1, uColor2, bend);
    float alpha = uTransparent > 0.5 ? 0.92 : 1.0;
    gl_FragColor = vec4(col, alpha);
  }
`;

export function ColorBends({
  rotation = 130,
  speed = 0.1,
  colors = ["#52395a", "#231826"],
  transparent = true,
  autoRotate = 0,
  scale = 1,
  frequency = 1,
  warpStrength = 1,
  mouseInfluence = 1,
  parallax = 0.5,
  noise = 0.1,
  className = "",
  style = {},
}: ColorBendsProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mountRef = React.useRef<HTMLCanvasElement | null>(null);
  const sceneRef = React.useRef<THREE.Scene | null>(null);
  const cameraRef = React.useRef<THREE.OrthographicCamera | null>(null);
  const rendererRef = React.useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = React.useRef<THREE.ShaderMaterial | null>(null);
  const mouseRef = React.useRef({ x: 0.5, y: 0.5 });
  const rafRef = React.useRef<number>(0);
  const rotationRef = React.useRef(rotation);
  const autoRotateRef = React.useRef(autoRotate);
  rotationRef.current = rotation;
  autoRotateRef.current = autoRotate;

  const colorsKey = colors.join(",");

  React.useEffect(() => {
    // Mount Three.js scene once
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    camera.position.z = 1;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    mountRef.current = renderer.domElement;
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    const [c1, c2] = colors.map(hexToVec3);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uSpeed: { value: speed },
        uFrequency: { value: frequency },
        uWarpStrength: { value: warpStrength },
        uNoise: { value: noise },
        uRotation: { value: (rotation * Math.PI) / 180 },
        uScale: { value: scale },
        uColor1: { value: new THREE.Vector3(...c1) },
        uColor2: { value: new THREE.Vector3(...c2) },
        uTransparent: { value: transparent ? 1 : 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uMouseInfluence: { value: mouseInfluence },
      },
    });
    materialRef.current = material;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      rendererRef.current.setSize(w, h);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) / rect.width;
      mouseRef.current.y = 1.0 - (e.clientY - rect.top) / rect.height;
    };

    container.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    let time = 0;
    function animate() {
      rafRef.current = requestAnimationFrame(animate);
      time += 0.016;
      if (materialRef.current) {
        const autoRad = (autoRotateRef.current * Math.PI) / 180;
        materialRef.current.uniforms.uTime.value = time;
        materialRef.current.uniforms.uRotation.value =
          (rotationRef.current * Math.PI) / 180 + time * autoRad;
        materialRef.current.uniforms.uMouse.value.set(
          mouseRef.current.x * parallax + (1.0 - parallax) * 0.5,
          mouseRef.current.y * parallax + (1.0 - parallax) * 0.5
        );
      }
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    }
    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      if (mountRef.current && container.contains(mountRef.current)) {
        container.removeChild(mountRef.current);
      }
      materialRef.current?.dispose();
      geometry.dispose();
      rendererRef.current?.dispose();
      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      materialRef.current = null;
      mountRef.current = null;
    };
  }, []);

  React.useEffect(() => {
    const mat = materialRef.current;
    if (!mat) return;
    const [c1, c2] = colors.map(hexToVec3);
    mat.uniforms.uSpeed.value = speed;
    mat.uniforms.uFrequency.value = frequency;
    mat.uniforms.uWarpStrength.value = warpStrength;
    mat.uniforms.uNoise.value = noise;
    mat.uniforms.uRotation.value = (rotation * Math.PI) / 180;
    mat.uniforms.uScale.value = scale;
    mat.uniforms.uColor1.value.set(c1[0], c1[1], c1[2]);
    mat.uniforms.uColor2.value.set(c2[0], c2[1], c2[2]);
    mat.uniforms.uTransparent.value = transparent ? 1 : 0;
    mat.uniforms.uMouseInfluence.value = mouseInfluence;
  }, [rotation, speed, autoRotate, scale, colorsKey, transparent, frequency, warpStrength, mouseInfluence, parallax, noise]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        ...style,
      }}
      aria-hidden
    />
  );
}
