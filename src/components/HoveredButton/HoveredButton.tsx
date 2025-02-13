import type React from "react";
import { useState, useRef, useCallback } from "react";

export const HoveredButton = ({ text }: { text: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, type: "enter" | "leave") => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        buttonRef.current.style.setProperty("--mouse-x", `${x}px`);
        buttonRef.current.style.setProperty("--mouse-y", `${y}px`);
      }
      if (type === "leave") {
        setIsHovered(false);
      } else if (type === "enter") {
        setIsHovered(true);
      }
    },
    []
  );

  return (
    <button
      ref={buttonRef}
      className={`
        relative overflow-hidden px-6 py-3 text-white font-semibold rounded-lg
        transition-colors duration-300 ease-in-out
        ${isHovered ? "bg-white" : "bg-blue-500"}
      `}
      onMouseEnter={(e) => handleMouseHandler(e, "enter")}
      onMouseLeave={(e) => handleMouseHandler(e, "leave")}
    >
      <span
        className={`relative z-10 mix-blend-normal transition-colors ${
          isHovered ? "text-blue-500" : "text-white"
        }`}
      >
        {text}
      </span>
      <span
        className={`
          absolute inset-0 transform scale-0 rounded-[50%]
          transition-transform duration-300 ease-in-out
          ${isHovered ? "scale-100" : "scale-1"}
        `}
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x) var(--mouse-y), #ffffff 100%, transparent 100%)",
          transformOrigin: "var(--mouse-x) var(--mouse-y)",
        }}
      />
    </button>
  );
};
