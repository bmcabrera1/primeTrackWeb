import React from "react";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export type MotionTransitionProps = {
  children: React.ReactNode;
  className?: string;
  variants: Variants;
  initialVisible?: boolean;
  inViewDetect?: boolean;
  once?: boolean;
  rootMargin?: string;
};

export function MotionTransition({
  children,
  className,
  variants,
  initialVisible = false,
  inViewDetect = true,
  once = true,
  rootMargin = "200px 0px",
}: MotionTransitionProps) {
  const shouldReduce = useReducedMotion();

  const { ref, inView } = useInView({
    triggerOnce: once,
    rootMargin,
    skip: !inViewDetect,
  });

  const initialState = initialVisible ? "visible" : "hidden";
  const animateState = shouldReduce
    ? "visible"
    : initialVisible
    ? "visible"
    : inView
    ? "visible"
    : "hidden";

  return (
    <motion.div
      ref={inViewDetect ? ref : undefined}
      variants={variants}
      initial={initialState}
      animate={animateState}
      exit="hidden"
      className={className}
    >
      {children}
    </motion.div>
  );
}
