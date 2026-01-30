declare module "three" {
  export class Scene {
    add(object: unknown): void;
  }
  export class OrthographicCamera {
    position: { z: number };
    constructor(...args: unknown[]);
  }
  export class WebGLRenderer {
    domElement: HTMLCanvasElement;
    constructor(params?: unknown);
    setSize(width: number, height: number, updateStyle?: boolean): void;
    setPixelRatio(value: number): void;
    setClearColor(color: number, alpha?: number): void;
    render(scene: Scene, camera: OrthographicCamera): void;
    dispose(): void;
    outputColorSpace: unknown;
  }
  export class ShaderMaterial {
    uniforms: Record<string, { value: unknown }>;
    constructor(...args: unknown[]);
    dispose(): void;
  }
  export class PlaneGeometry {
    dispose(): void;
    constructor(width?: number, height?: number);
  }
  export class Mesh {
    constructor(geometry: PlaneGeometry, material: ShaderMaterial);
  }
  export class Vector2 {
    set(x: number, y: number): this;
    copy(v: Vector2): this;
    lerp(v: Vector2, alpha: number): this;
    constructor(x?: number, y?: number);
  }
  export class Vector3 {
    set(x: number, y: number, z: number): this;
    copy(v: Vector3): this;
    constructor(x?: number, y?: number, z?: number);
  }
  export class Clock {
    getDelta(): number;
    getElapsedTime(): number;
    elapsedTime: number;
  }
  export const SRGBColorSpace: unknown;
}
