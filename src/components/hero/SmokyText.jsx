import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import styles from "./SmokyText.module.css";

const HEADLINES = [
  "Be the result your customers find first.",
  "Rank where your buyers search.",
  "Turn search traffic into revenue.",
];

export default function SmokyText() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HEADLINES.length);
    }, 4400);
    return () => clearInterval(timer);
  }, []);

  const currentText = HEADLINES[index];

  const lineVariants = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.25 } },
        exit: { opacity: 0, transition: { duration: 0.2 } },
      }
    : {
        initial: { opacity: 0, y: 10 },
        animate: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] },
        },
        exit: {
          opacity: 0,
          y: -10,
          transition: { duration: 0.3, ease: "easeIn" },
        },
      };

  return (
    <h1 className={styles.wrapper} aria-label={currentText}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className={styles.headlineLine}
          variants={lineVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
      <span className={styles.screenReaderOnly}>{currentText}</span>
    </h1>
  );
}
