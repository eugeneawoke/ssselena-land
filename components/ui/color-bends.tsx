"use client";

import * as React from "react";

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

/**
 * ColorBends – animated gradient background.
 * Compatible with @react-bits/ColorBends-JS-CSS API.
 * To use the official component, run: npx shadcn@latest add "https://shadcnregistry.com/r/react-bits/colorbends-js-css"
 */
export function ColorBends({
  rotation = 130,
  speed = 0.1,
  colors = ["#52395a", "#231826"],
  transparent = true,
  scale = 1,
  frequency = 1,
  className = "",
  style = {},
}: ColorBendsProps) {
  const [angle, setAngle] = React.useState(rotation);

  React.useEffect(() => {
    let raf = 0;
    const step = () => {
      setAngle((a) => a + speed * 2);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  const [c1, c2] = colors;
  const opacity = transparent ? 0.92 : 1;

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        ...style,
      }}
      aria-hidden
    >
      <div
        style={{
          position: "absolute",
          inset: "-50%",
          width: "200%",
          height: "200%",
          left: "-50%",
          top: "-50%",
          transform: `scale(${scale}) rotate(${angle}deg)`,
          background: `linear-gradient(${angle}deg, ${c1} 0%, ${c2} 35%, ${c1} 65%, ${c2} 100%)`,
          opacity,
          transition: "none",
        }}
      />
    </div>
  );
}
