import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useCallback } from "react";

export default function MouseFollower() {
  // Track mouse position with motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smoother spring configuration for more fluid movement
  const springConfig = {
    stiffness: 150,
    damping: 30,
    mass: 0.5,
    restSpeed: 0.001,
    restDelta: 0.001
  };

  // Apply spring animation to coordinates
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Memoized mouse move handler for better performance
  const handleMouseMove = useCallback((e) => {
    // Offset by half the cursor size to center it on the mouse
    mouseX.set(e.clientX - 8);
    mouseY.set(e.clientY - 8);
  }, [mouseX, mouseY]);

  useEffect(() => {
    // Use passive listener for better performance
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <motion.div
      style={{
        x,
        y,
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference",
      }}
      className="w-4 h-4 rounded-full bg-white border-2 border-white shadow-lg"
    />
  );
}