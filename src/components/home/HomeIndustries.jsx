import React from "react";
import Container from "../ui/Container.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import styles from "./HomeIndustries.module.css";

const VERTICALS = [
  {
    sector: "Fintech & Banking",
    title: "YMYL Financial Platforms",
    desc: "Rigorous compliance review, high-trust entity architecture, and verified financial publication citations to win high-ACV banking keywords.",
    result: "Avg. 310% Organic Pipeline Increase",
  },
  {
    sector: "B2B SaaS & Cloud",
    title: "Enterprise Software Leaders",
    desc: "Intent-matched feature hubs, product comparison matrices, and developer documentation indexing that outranks legacy incumbents.",
    result: "85+ #1 Category Terms Captured",
  },
  {
    sector: "Global Ecommerce",
    title: "Multi-Currency Catalogs",
    desc: "Faceted navigation canonical controls, out-of-stock index management, and bidirectional hreflang for multi-million SKU retailers.",
    result: "2.8x Non-Brand Catalog GMV",
  },
  {
    sector: "HealthTech & MedTech",
    title: "Clinical & Digital Health",
    desc: "Expert Medical Consensus (E-E-A-T) schema validation, author verification clusters, and institutional university link reclamation.",
    result: "Top 3 Rankings for 92% Core Terms",
  },
];

export default function HomeIndustries() {
  return (
    <section className={styles.section} aria-label="Industry SEO Specializations">
      <Container>
        <SectionHeading
          tag="Tailored Vertical Solutions"
          title="Engineered for high-stakes, competitive search verticals"
          description="Every market operates under distinct algorithmic weights. We tailor our architectural models and digital PR outreach to your commercial ecosystem."
        />

        <div className={styles.grid}>
          {VERTICALS.map((v, i) => (
            <article key={i} className={styles.card}>
              <span className={styles.sectorBadge}>{v.sector}</span>
              <h3 className={styles.title}>{v.title}</h3>
              <p className={styles.desc}>{v.desc}</p>
              <div className={styles.metricBox}>
                <span>★</span>
                <span>{v.result}</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
