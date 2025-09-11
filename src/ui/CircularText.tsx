import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// Linear easing function for framer-motion transitions
const easeLinear = (t: number) => t;

interface CircularTextProps {
  text: string | string[];
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
  children?: React.ReactNode;
}

const getTransition = (duration: number) => ({
  ease: easeLinear,
  duration: duration,
  type: "keyframes" as const,
  repeat: Infinity,
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
  children,
}) => {
  const letters = Array.isArray(text)
    ? text.join(" ").split("")
    : Array.from(text);

  const controls = useAnimation();
  const [currentRotation, setCurrentRotation] = useState(0);

  useEffect(() => {
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: getTransition(spinDuration),
    });
    // eslint-disable-next-line
  }, [spinDuration, controls, onHover, text]);

  const handleHoverStart = () => {
    if (!onHover) return;
    switch (onHover) {
      case "slowDown":
        controls.start({
          rotate: currentRotation + 360,
          scale: 1,
          transition: getTransition(spinDuration * 2),
        });
        break;
      case "speedUp":
        controls.start({
          rotate: currentRotation + 360,
          scale: 1,
          transition: getTransition(spinDuration / 4),
        });
        break;
      case "pause":
        controls.start({
          rotate: currentRotation,
          scale: 1,
          transition: { type: "spring", damping: 20, stiffness: 300 },
        });
        break;
      case "goBonkers":
        controls.start({
          rotate: currentRotation + 360,
          scale: 0.8,
          transition: getTransition(spinDuration / 20),
        });
        break;
      default:
        break;
    }
  };

  const handleHoverEnd = () => {
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: getTransition(spinDuration),
    });
  };

  const radius = 80;
  const step = (2 * Math.PI) / letters.length;

  return (
    <div className={`relative w-[200px] h-[200px] ${className}`}>
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={controls}
        onUpdate={(latest) => setCurrentRotation(Number(latest.rotate))}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        style={{ originX: "50%", originY: "50%" }}
      >
        {letters.map((letter, i) => {
          const angle = i * step - Math.PI / 2;
          const x = radius * Math.cos(angle) + 100;
          const y = radius * Math.sin(angle) + 100;
          const transform = `translate(${x}px, ${y}px) rotate(${
            (angle * 180) / Math.PI + 90
          }deg)`;
          return (
            <span
              key={i}
              className="absolute inline-block inset-0 text-[1rem] font-semibold transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
              style={{ transform, WebkitTransform: transform }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>

      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default CircularText;
