import React from "react";
import Container from "../ui/Container.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import styles from "./HomeComparison.module.css";

const TRADITIONAL_POINTS = [
  "Focus on vanity impressions and low-difficulty, zero-intent keyword rankings",
  "Generic, AI-generated content hubs that trigger Google helpful content penalties",
  "Superficial plugin audits that ignore JavaScript hydration and server crawl budget",
  "Outdated monthly PDF reports that never correlate rankings to actual customer revenue",
  "Opaque outsourced backlink packages from private blog networks (PBNs)",
];

const CDT_POINTS = [
  "Direct attribution to qualified sales pipeline, deal size, and annual organic revenue",
  "Deep semantic entity mapping and original data journalism that earns editorial links",
  "Forensic server log analysis, hydration debugging, and edge-caching technical SEO",
  "Real-time Looker Studio executive dashboards linked directly to HubSpot and Salesforce",
  "100% white-hat editorial placements in tier-one industry publications and mainstream press",
];

export default function HomeComparison() {
  return (
    <section className={styles.section} aria-label="Why Canada Digital Tech Comparison">
      <Container>
        <SectionHeading
          onDark
          tag="The Engineering Advantage"
          title="Why category leaders partner with Canada Digital Tech"
          description="Most agencies report ranking movements. We architect crawl ecosystems that dominate commercial search queries and drive verified revenue."
        />

        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.traditional}`}>
            <span className={`${styles.badgeTop} ${styles.badBadge}`}>Traditional SEO Agencies</span>
            <h3 className={styles.cardTitle}>Surface-Level & Vanity Metrics</h3>
            <ul className={styles.pointsList}>
              {TRADITIONAL_POINTS.map((pt, i) => (
                <li key={i} className={styles.pointItem}>
                  <span className={styles.iconCross} aria-hidden="true">✕</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className={`${styles.card} ${styles.cdt}`}>
            <span className={`${styles.badgeTop} ${styles.goodBadge}`}>Canada Digital Tech</span>
            <h3 className={styles.cardTitle}>Search Engineering & Revenue Attribution</h3>
            <ul className={styles.pointsList}>
              {CDT_POINTS.map((pt, i) => (
                <li key={i} className={styles.pointItem}>
                  <span className={styles.iconCheck} aria-hidden="true">✓</span>
                  <span><strong>{pt}</strong></span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
}
