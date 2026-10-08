import React from "react";
import SEOHead from "../components/common/SEOHead.jsx";
import Container from "../components/ui/Container.jsx";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import styles from "./Resources.module.css";

const RESOURCES = [
  {
    type: "Interactive Checklist",
    title: "Enterprise Core Web Vitals & Hydration Audit Matrix",
    desc: "A 45-point inspection framework covering INP, LCP, CLS, and client-side hydration bottlenecks."
  },
  {
    type: "Technical Framework",
    title: "International Hreflang Implementation & QA Guide",
    desc: "Architecture templates for multi-region routing across subdomains, ccTLDs, and language directories."
  },
  {
    type: "Template",
    title: "Content Entity & Semantic Topic Mapping Sheet",
    desc: "A ready-to-use spreadsheet model for calculating topical authority depth and keyword coverage gaps."
  }
];

export default function Resources() {
  return (
    <section className={styles.page}>
      <SEOHead
        title="SEO Resources, Checklists & Technical Guides"
        description="Free downloadable SEO templates, Core Web Vitals checklists, and international search frameworks created by Canada Digital Tech."
      />
      <Container>
        <header className={styles.header}>
          <Badge variant="blue">Knowledge Base</Badge>
          <h1 className={styles.title}>Free engineering resources, tools & frameworks</h1>
          <p className={styles.lead}>
            Actionable checklists and technical templates engineered to help internal product teams evaluate and optimize organic search posture.
          </p>
        </header>

        <div className={styles.grid}>
          {RESOURCES.map((res) => (
            <article key={res.title} className={styles.card}>
              <span className={styles.cardType}>{res.type}</span>
              <h2 className={styles.cardTitle}>{res.title}</h2>
              <p className={styles.cardDesc}>{res.desc}</p>
              <Button to="/free-audit" variant="secondary" size="sm">
                Request access
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
