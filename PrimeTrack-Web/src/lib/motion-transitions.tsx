import type { Variants } from "framer-motion";

export const transitionVariantsPage: Variants = {
  initial: { x: "100%", width: "100%" },
  animate: { x: "0%", width: "0%" },
  exit: { x: ["0%", "100%"], width: ["0%", "100%"] },
};

type FadeInOpts = {
  delay?: number;
  duration?: number;
  distance?: number;
};

export const fadeIn = (
  position: "right" | "bottom" | "left" | "top",
  opts: FadeInOpts = {}
): Variants => {
  const { delay = 0.4, duration = 0.8, distance = 60 } = opts;

  const dx =
    position === "right" ? distance : position === "left" ? -distance : 0;
  const dy =
    position === "bottom" ? distance : position === "top" ? -distance : 0;

  return {
    hidden: { x: dx, y: dy, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
