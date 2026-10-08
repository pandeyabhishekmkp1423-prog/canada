import React from "react";
import styles from "./Container.module.css";

export default function Container({
  children,
  className = "",
  variant = "default",
  as: Component = "div",
  ...props
}) {
  const classNames = [
    styles.container,
    variant === "narrow" ? styles.narrow : "",
    variant === "full" ? styles.full : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
}
