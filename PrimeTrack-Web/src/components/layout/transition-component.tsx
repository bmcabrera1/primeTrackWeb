import { motion, type Variants } from "framer-motion";

export type MotionTransitionProps = {
  children: React.ReactNode;
  className?: string;
  variants: Variants;
};

export function MotionTransition({
  children,
  className,
  variants,
}: MotionTransitionProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      exit="hidden"
      className={className}
    >
      {children}
    </motion.div>
  );
}
