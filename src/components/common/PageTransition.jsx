import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./PageTransition.module.css";

export default function PageTransition({ children, locationKey }) {
  const shouldReduceMotion = useReducedMotion();

  const variants = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { opacity: 0, filter: "blur(6px)", y: 4 },
        animate: { opacity: 1, filter: "blur(0px)", y: 0 },
        exit: { opacity: 0, filter: "blur(6px)", y: -4 },
      };

  return (
    <motion.div
      key={locationKey}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: shouldReduceMotion ? 0.12 : 0.22, ease: [0.215, 0.61, 0.355, 1] }}
      className={styles.transitionWrapper}
    >
      {children}
    </motion.div>
  );
}
