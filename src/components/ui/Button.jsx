import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  fullWidth = false,
  onClick,
  type = "button",
  ...props
}) {
  const classNames = [
    styles.button,
    styles[variant] || styles.primary,
    styles[size] || styles.md,
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link to={to} className={classNames} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classNames} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classNames} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
