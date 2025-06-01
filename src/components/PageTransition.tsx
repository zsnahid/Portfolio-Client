import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

// Subtle and refined page entry animations
const pageVariants = {
  initial: {
    opacity: 0,
    y: 16,
    scale: 0.985,
    filter: "blur(8px)",
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
  out: {
    opacity: 0,
    y: -8,
    scale: 0.99,
    filter: "blur(4px)",
  },
};

const pageTransition = {
  type: "tween",
  ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth feel
  duration: 0.3,
};

// Enhanced container with more sophisticated stagger
const containerVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.02,
      delayChildren: 0.02,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.08,
      when: "afterChildren",
      staggerChildren: 0.015,
      staggerDirection: -1,
    },
  },
};

// More sophisticated item animations with natural motion
const itemVariants = {
  initial: {
    opacity: 0,
    y: 24,
    filter: "blur(6px)",
    scale: 0.96,
  },
  in: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      type: "spring",
      damping: 35,
      stiffness: 180,
      mass: 0.4,
    },
  },
  out: {
    opacity: 0,
    y: -12,
    filter: "blur(4px)",
    scale: 0.98,
    transition: {
      duration: 0.08,
      ease: "easeIn",
    },
  },
};

// Hover animations for enhanced interactivity
const hoverVariants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.08,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.08,
      ease: "easeOut",
    },
  },
};

// Fade in animation for subtle elements
const fadeVariants = {
  initial: { opacity: 0 },
  in: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: "easeIn",
    },
  },
};

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}

export function AnimatedContainer({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={containerVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({ children }: PageTransitionProps) {
  return (
    <motion.div variants={itemVariants} className="w-full">
      {children}
    </motion.div>
  );
}

// New component for fade animations
export function AnimatedFade({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={fadeVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

// New component for hover animations
export function AnimatedHover({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
