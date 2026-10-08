import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container.jsx";
import BrandLogo from "../ui/BrandLogo.jsx";
import { FOOTER_SECTIONS } from "../../data/navigation.js";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.topGrid}>
          <div className={styles.brandCol}>
            <BrandLogo onDark />
            <p className={styles.brandDescription}>
              A global SEO consultancy headquartered in Canada. We engineer search visibility
              into predictable organic pipeline for category-leading brands worldwide.
            </p>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className={styles.colTitle}>{section.title}</h3>
              <ul className={styles.linkList}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Canada Digital Tech Inc. (canadadigitaltech.ca). All rights reserved.
          </p>
          <span className={styles.regionBadge}>
            Built in Canada · Serving enterprise clients worldwide
          </span>
        </div>
      </Container>
    </footer>
  );
}
