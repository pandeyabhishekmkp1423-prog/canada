import React from "react";
import SEOHead from "../components/common/SEOHead.jsx";
import Container from "../components/ui/Container.jsx";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import styles from "./FreeAudit.module.css";

export default function FreeAudit() {
  return (
    <section className={styles.page}>
      <SEOHead
        title="Request a Free Preliminary SEO Audit"
        description="Receive a comprehensive assessment of your organic performance, crawlability, and top three high-impact growth opportunities within one business day."
      />
      <Container>
        <header className={styles.header}>
          <Badge variant="maple">Zero-Commitment Assessment</Badge>
          <h1 className={styles.title}>Request a complimentary technical SEO audit</h1>
          <p className={styles.lead}>
            Our senior search engineers will manually review your domain and deliver a prioritised 3-point diagnostic report outlining your most urgent growth opportunities.
          </p>
        </header>

        <div className={styles.card}>
          <h2 className={styles.subtitle}>What your assessment includes</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <span className={styles.bullet}>✓</span>
              <div>
                <strong>Crawl & Indexation Health:</strong> Identification of critical render-blocking issues, canonical confusion, or orphan pages.
              </div>
            </li>
            <li className={styles.item}>
              <span className={styles.bullet}>✓</span>
              <div>
                <strong>High-Intent Search Gap Analysis:</strong> Highlighting lucrative buyer queries your competitors are winning.
              </div>
            </li>
            <li className={styles.item}>
              <span className={styles.bullet}>✓</span>
              <div>
                <strong>90-Day Quick Win Roadmap:</strong> Three concrete, engineering-ready recommendations ranked by immediate revenue potential.
              </div>
            </li>
          </ul>

          <Button to="/contact" variant="primary" size="lg">
            Connect with our team to start
          </Button>

          <p className={styles.note}>
            Turnaround time is typically one business day. No sales pitch, just actionable data.
          </p>
        </div>
      </Container>
    </section>
  );
}
