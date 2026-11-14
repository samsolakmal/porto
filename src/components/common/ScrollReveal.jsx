import { motion } from "framer-motion";

// Scroll reveal variants
export const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

export default function ScrollReveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp(delay)}
      className={`transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}
