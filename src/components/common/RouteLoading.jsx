import React from "react";
import styles from "./RouteLoading.module.css";

export default function RouteLoading() {
  return (
    <div className={styles.loaderContainer} role="status" aria-label="Loading page">
      <div className={styles.spinner} />
    </div>
  );
}
