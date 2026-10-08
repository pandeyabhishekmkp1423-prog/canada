import React from "react";
import styles from "./SectionHeading.module.css";

export default function SectionHeading({
  title,
  tag,
  description,
  align = "left",
  as: HeadingTag = "h2",
  onDark = false,
  className = "",
}) {
  const wrapperClass = [
    styles.wrapper,
    styles[align] || styles.left,
    onDark ? styles.onDark : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClass}>
      {tag && <span className={styles.tag}>{tag}</span>}
      <HeadingTag className={styles.title}>{title}</HeadingTag>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
