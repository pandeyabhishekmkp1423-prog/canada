import React from "react";
import SEOHead from "../components/common/SEOHead.jsx";
import Container from "../components/ui/Container.jsx";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import styles from "./Industries.module.css";

const SECTORS = [
  {
    title: "Fintech & Banking",
    desc: "Strict compliance, high-trust content architectures, and authoritative entity building in competitive financial markets.",
    metric: "High YMYL compliance & authority acceleration"
  },
  {
    title: "B2B SaaS & Enterprise Tech",
    desc: "Targeting high-ACV software buyers through bottom-of-funnel comparison pages, API documentation, and feature hub routing.",
    metric: "Shortened sales cycles & high-intent organic demos"
  },
  {
    title: "Global Ecommerce & Retail",
    desc: "Scalable category faceted crawling, multi-currency international routing, and schema-rich merchant listings.",
    metric: "Non-brand catalog expansion & GMV growth"
  },
  {
    title: "Healthcare & Life Sciences",
    desc: "Medically validated content workflows, institutional backlink acquisition, and physician-reviewed knowledge graphs.",
    metric: "Rigorous E-E-A-T entity reinforcement"
  }
];

export default function Industries() {
  return (
    <section className={styles.page}>
      <SEOHead
        title="Industry Solutions & Sector Specializations"
        description="Tailored SEO solutions for Fintech, B2B SaaS, Global Ecommerce, and Healthcare enterprises."
      />
      <Container>
        <header className={styles.header}>
          <Badge variant="blue">Sector Expertise</Badge>
          <h1 className={styles.title}>Tailored SEO strategies for high-stakes industries</h1>
          <p className={styles.lead}>
            Every sector has unique algorithmic hurdles and buyer behaviors. We tailor our technical crawl frameworks and link programs to your specific commercial landscape.
          </p>
        </header>

        <div className={styles.grid}>
          {SECTORS.map((sector) => (
            <article key={sector.title} className={styles.card}>
              <h2 className={styles.cardTitle}>{sector.title}</h2>
              <p className={styles.cardDesc}>{sector.desc}</p>
              <div className={styles.cardMetrics}>{sector.metric}</div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
