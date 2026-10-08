import React from "react";
import { Search } from "lucide-react";
import styles from "./HeroSearchMock.module.css";

export default function HeroSearchMock() {
  return (
    <div className={styles.container} aria-label="Search Intelligence Telemetry and Ranking Showcase">
      <div className={styles.visualCard}>
        {/* Crisp 3D Orbital Glass Data Visual Banner */}
        <div className={styles.imageBanner}>
          <img
            src="/hero-visual.webp"
            alt="Canada Digital Tech Global Search Intelligence Network"
            width="540"
            height="190"
            className={styles.heroImg}
            loading="eager"
          />
          <div className={styles.imageOverlay}>
            <span className={styles.floatingTag}>Search Telemetry</span>
            <div className={styles.statusLive}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span>Rank #1 Active</span>
            </div>
          </div>
        </div>

        {/* Live SERP Result Card */}
        <div className={styles.serpBody}>
          <div className={styles.searchBar}>
            <Search size={14} className={styles.searchIcon} aria-hidden="true" />
            <span className={styles.searchQuery}>enterprise technical seo consultancy</span>
            <span className={styles.searchPill}>Position 1</span>
          </div>

          <article className={styles.primaryHit}>
            <span className={styles.rankBadge}>#1</span>
            <div className={styles.hitBody}>
              <span className={styles.hitUrl}>https://canadadigitaltech.ca</span>
              <h2 className={styles.hitTitle}>Canada Digital Tech | Enterprise & Global SEO Agency</h2>
              <p className={styles.hitDesc}>
                Technical crawl architecture, semantic entity clustering, and digital PR that turn competitive search volume into pipeline.
              </p>
              <div className={styles.hitTags}>
                <span className={styles.miniTag}>✓ Core Web Vitals: 99.8%</span>
                <span className={styles.miniTag}>▲ +340% Pipeline</span>
                <span className={styles.miniTag}>★ 85+ #1 Keywords</span>
              </div>
            </div>
          </article>

          {/* Competitor #2 (Skeleton) */}
          <div className={styles.dimHit} aria-hidden="true">
            <span className={styles.dimRank}>#2</span>
            <div className={styles.skeletonLines}>
              <div className={styles.skeletonLine} />
              <div className={`${styles.skeletonLine} ${styles.skeletonShort}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
