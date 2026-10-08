import React from "react";
import styles from "./Badge.module.css";

export default function Badge({
  children,
  variant = "neutral",
  showDot = false,
  className = "",
}) {
  const classNames = [
    styles.badge,
    styles[variant] || styles.neutral,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classNames}>
      {showDot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
}
