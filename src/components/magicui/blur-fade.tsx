"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variants;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  blur?: string;
}

const BlurFade = ({
  children,
  className = "",
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  blur = "6px",
}: BlurFadeProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true });

  const shouldAnimate = inView ? isInView : true;

  const defaultVariants: Variants = {
    hidden: {
      y: yOffset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={variant || defaultVariants}
      transition={{
        delay,
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
