import type { Variants } from "framer-motion";

export const transitionVariantsPage: Variants = {
  initial: { x: "100%", width: "100%" },
  animate: { x: "0%", width: "0%" },
  exit: { x: ["0%", "100%"], width: ["0%", "100%"] },
};

export const fadeIn = (
  position: "right" | "bottom" | "left" | "top",
  delay: number = 0.4
): Variants => ({
  hidden: {
    x: position === "right" ? 80 : position === "left" ? -80 : 0,
    y: position === "bottom" ? 80 : position === "top" ? -80 : 0,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});
