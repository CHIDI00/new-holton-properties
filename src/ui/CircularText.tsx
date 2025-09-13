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

  // const radius = 80;
  const step = (2 * Math.PI) / letters.length;
  const radius = 90; // adjust for how far from the center
  const center = 100;

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
        {/* {letters.map((letter, i) => {
          const angle = i * step - Math.PI / 2;
          const x = radius * Math.cos(angle) + 100;
          const y = radius * Math.sin(angle) + 100;
          const transform = `translate(${x}px, ${y}px) rotate(${
            (angle * 180) / Math.PI + 90
          }deg)`;
          return (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 text-[1rem] font-semibold transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
              style={{
                transform: `translate(-50%, -50%) ${transform}`,
                WebkitTransform: `translate(-50%, -50%) ${transform}`,
              }}
            >
              {letter}
            </span>
          );
        })} */}
        {letters.map((letter, i) => {
          const angle = i * step - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          const transform = `translate(${x}px, ${y}px) rotate(${
            (angle * 180) / Math.PI + 90
          }deg)`;
          return (
            <span
              key={i}
              className="absolute text-[1rem] font-semibold transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
              style={{ transform: `translate(-50%, -50%) ${transform}` }}
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

// import React, { useEffect } from "react";
// import {
//   motion,
//   useAnimation,
//   useMotionValue,
//   MotionValue,
//   Transition,
// } from "motion/react";
// interface CircularTextProps {
//   text: string;
//   spinDuration?: number;
//   onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
//   className?: string;
// }

// const getRotationTransition = (
//   duration: number,
//   from: number,
//   loop: boolean = true
// ) => ({
//   from,
//   to: from + 360,
//   ease: "linear" as const,
//   duration,
//   type: "tween" as const,
//   repeat: loop ? Infinity : 0,
// });

// const getTransition = (duration: number, from: number) => ({
//   rotate: getRotationTransition(duration, from),
//   scale: {
//     type: "spring" as const,
//     damping: 20,
//     stiffness: 300,
//   },
// });

// const CircularText: React.FC<CircularTextProps> = ({
//   text,
//   spinDuration = 20,
//   onHover = "speedUp",
//   className = "",
// }) => {
//   const letters = Array.from(text);
//   const controls = useAnimation();
//   const rotation: MotionValue<number> = useMotionValue(0);

//   useEffect(() => {
//     const start = rotation.get();
//     controls.start({
//       rotate: start + 360,
//       scale: 1,
//       transition: getTransition(spinDuration, start),
//     });
//   }, [spinDuration, text, onHover, controls]);

//   const handleHoverStart = () => {
//     const start = rotation.get();

//     if (!onHover) return;

//     let transitionConfig: ReturnType<typeof getTransition> | Transition;
//     let scaleVal = 1;

//     switch (onHover) {
//       case "slowDown":
//         transitionConfig = getTransition(spinDuration * 2, start);
//         break;
//       case "speedUp":
//         transitionConfig = getTransition(spinDuration / 4, start);
//         break;
//       case "pause":
//         transitionConfig = {
//           rotate: { type: "spring", damping: 20, stiffness: 300 },
//           scale: { type: "spring", damping: 20, stiffness: 300 },
//         };
//         break;
//       case "goBonkers":
//         transitionConfig = getTransition(spinDuration / 20, start);
//         scaleVal = 0.8;
//         break;
//       default:
//         transitionConfig = getTransition(spinDuration, start);
//     }

//     controls.start({
//       rotate: start + 360,
//       scale: scaleVal,
//       transition: transitionConfig,
//     });
//   };

//   const handleHoverEnd = () => {
//     const start = rotation.get();
//     controls.start({
//       rotate: start + 360,
//       scale: 1,
//       transition: getTransition(spinDuration, start),
//     });
//   };

//   return (
//     <div className={`relative w-[200px] h-[200px] ${className}`}>
//       <motion.div
//         // className={`m-0 mx-auto rounded-full w-[200px] h-[200px] relative font-black text-black text-center cursor-pointer origin-center ${className}`}
//         className="absolute inset-0 w-full h-full"

//         style={{ rotate: rotation }}
//         initial={{ rotate: 0 }}
//         animate={controls}
//         onMouseEnter={handleHoverStart}
//         onMouseLeave={handleHoverEnd}
//       >
//         {letters.map((letter, i) => {
//           const rotationDeg = (360 / letters.length) * i;
//           const factor = Math.PI / letters.length;
//           const x = factor * i;
//           const y = factor * i;
//           const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

//           return (
//             <span
//               key={i}
//               className="absolute inline-block inset-0 text-[1rem] font-semibold transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
//               style={{ transform, WebkitTransform: transform }}
//             >
//               {letter}
//             </span>
//           );
//         })}
//       </motion.div>
//     </div>
//   );
// };

// export default CircularText;
