import React, { useState, ReactNode, FC } from "react";

interface InteractiveBackgroundProps2 {
  children: ReactNode;
}
export const InteractiveBackground: FC<InteractiveBackgroundProps2> = ({
  children,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        top: undefined,
        right: undefined,
        bottom: undefined,
        left: undefined,
        zIndex: 30,
      }}>
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          transition: "background 0.3s",
        }}
      />
      {children}
    </div>
  );
};
