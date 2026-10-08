import React from "react";
import SEOHead from "../components/common/SEOHead.jsx";
import Container from "../components/ui/Container.jsx";
import Badge from "../components/ui/Badge.jsx";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.page}>
      <SEOHead
        title="About Us"
        description="Learn about Canada Digital Tech, our team of technical search engineers, and our philosophy on performance-first SEO."
      />
      <Container>
        <header className={styles.header}>
          <Badge variant="blue" className={styles.badge}>Our Story & Philosophy</Badge>
          <h1 className={styles.title}>Engineered in Canada for global search performance</h1>
          <p className={styles.lead}>
            Canada Digital Tech was founded to bring rigorous software engineering principles and transparent revenue attribution to search engine optimization.
          </p>
        </header>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Technical Rigour</h2>
            <p className={styles.cardText}>
              We treat search algorithms like complex distributed systems, prioritizing clean code, indexation efficiency, and measurable performance.
            </p>
          </article>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Global Reach</h2>
            <p className={styles.cardText}>
              From Toronto to London, New York to Tokyo, we help cross-border brands capture and retain market leadership across diverse territories.
            </p>
          </article>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Revenue Transparency</h2>
            <p className={styles.cardText}>
              No vanity keyword metrics. Every initiative is evaluated against lead generation, pipeline velocity, and client profitability.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
