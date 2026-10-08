import React from "react";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import Badge from "../ui/Badge.jsx";
import styles from "./HomeCtaBanner.module.css";

export default function HomeCtaBanner() {
  return (
    <section className={styles.section} aria-label="Request Free SEO Audit Call to Action">
      <Container>
        <div className={styles.bannerCard}>
          <div className={styles.glowBlob} aria-hidden="true" />

          <div className={styles.contentWrapper}>
            <div className={styles.badgeRow}>
              <Badge variant="maple">Complimentary Technical Diagnostic</Badge>
            </div>

            <h2 className={styles.title}>
              Ready to outrank your competition and capture category search demand?
            </h2>

            <p className={styles.desc}>
              Request a free preliminary SEO audit. Our senior search engineers will manually review
              your domain architecture and uncover your top three high-impact growth opportunities
              within one business day.
            </p>

            <div className={styles.actionRow}>
              <Button to="/free-audit" variant="primary" size="lg">
                Get your free SEO audit
              </Button>
              <Button to="/contact" variant="secondaryHero" size="lg">
                Speak with a search engineer
              </Button>
            </div>

            <div className={styles.checkList}>
              <span className={styles.checkItem}>
                <span className={styles.checkMark}>✓</span> 24-Hour Turnaround
              </span>
              <span className={styles.checkItem}>
                <span className={styles.checkMark}>✓</span> No Sales Pressure
              </span>
              <span className={styles.checkItem}>
                <span className={styles.checkMark}>✓</span> Jira/Linear Ready Tickets
              </span>
              <span className={styles.checkItem}>
                <span className={styles.checkMark}>✓</span> 100% Confidential
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
