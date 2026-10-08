import React from "react";
import { Link } from "react-router-dom";
import styles from "./BrandLogo.module.css";

export default function BrandLogo({ onDark = false, className = "", onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={`${styles.logoLink} ${onDark ? styles.onDark : ""} ${className}`}
      aria-label="Canada Digital Tech Home"
    >
      <div className={styles.iconWrapper}>
        <img
          src="/logo-icon.png"
          alt=""
          width="36"
          height="36"
          className={styles.iconImg}
          loading="eager"
        />
      </div>
      <span className={styles.brandName}>
        Canada Digital <span className={styles.highlight}>Tech</span>
      </span>
    </Link>
  );
}
