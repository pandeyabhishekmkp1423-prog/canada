import React from "react";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import SmokyText from "./SmokyText.jsx";
import HeroSearchMock from "./HeroSearchMock.jsx";
import styles from "./SmokyHero.module.css";

const TICKER_STATS = [
  { value: "$148M+", label: "Qualified Pipeline Attributed to Organic Search" },
  { value: "94.6%", label: "Top-3 Keyword Ranking Retention Over 12 Months" },
  { value: "180+", label: "Global Regional Markets Crawled & Indexed" },
  { value: "3.8x", label: "Average Organic ARR Growth for Retainer Clients" },
];

export default function SmokyHero() {
  return (
    <section className={styles.heroSection} aria-label="Hero Introduction and Search Authority">
      <Container>
        <div className={styles.contentGrid}>
          <div className={styles.textContent}>
            <SmokyText />

            <p className={styles.leadText}>
              Canada Digital Tech is an enterprise technical SEO and search marketing consultancy
              headquartered in Canada. We eliminate crawl-budget friction, construct semantic topic
              clusters, and earn high-authority digital PR backlinks to turn category search demand
              into compounding revenue.
            </p>

            <div className={styles.ctaGroup}>
              <Button to="/free-audit" variant="primary" size="lg">
                Get a free SEO audit
              </Button>
              <Button to="/case-studies" variant="secondaryHero" size="lg">
                See verified results
              </Button>
            </div>

            <div className={styles.trustPoints}>
              <span className={styles.trustItem}>
                <span className={styles.trustCheck}>✓</span> 24-hour audit turnaround
              </span>
              <span className={styles.trustItem}>
                <span className={styles.trustCheck}>✓</span> Developer-ready sprint tickets
              </span>
              <span className={styles.trustItem}>
                <span className={styles.trustCheck}>✓</span> Zero vanity metrics
              </span>
            </div>
          </div>

          <div className={styles.mockColumn}>
            <HeroSearchMock />
          </div>
        </div>

        {/* Full-width authority metrics ticker */}
        <div className={styles.heroTicker}>
          <div className={styles.tickerGrid}>
            {TICKER_STATS.map((stat, i) => (
              <div key={i} className={styles.tickerCard}>
                <div className={styles.tickerValue}>{stat.value}</div>
                <div className={styles.tickerLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
