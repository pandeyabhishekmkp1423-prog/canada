import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/common/SEOHead.jsx";
import Container from "../components/ui/Container.jsx";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import styles from "./CaseStudies.module.css";

const CASE_STUDIES = [
  {
    slug: "fintech-scaleup",
    client: "Global Fintech Platform",
    metric: "+340% Organic ARR",
    title: "Scaling high-intent product keywords across North American & European markets",
    desc: "How a complete JavaScript hydration rewrite and entity content clustering captured competitive finance search terms."
  },
  {
    slug: "ecommerce-luxury",
    client: "Direct-to-Consumer Apparel",
    metric: "2.8x Non-Brand Traffic",
    title: "Unlocking faceted navigation indexation on Shopify Plus",
    desc: "Restructuring catalog filter indexing and international currency routing generated an extra $4.2M in annual organic GMV."
  },
  {
    slug: "enterprise-b2b-saas",
    client: "Enterprise Cloud Software",
    metric: "#1 for 85+ Core Terms",
    title: "Outranking legacy incumbents in cloud infrastructure",
    desc: "A surgical digital PR program and technical documentation schema overhaul placed our client at the top of category searches."
  }
];

export default function CaseStudies() {
  return (
    <section className={styles.page}>
      <SEOHead
        title="SEO Case Studies & Client Results"
        description="Real revenue outcomes from our technical search marketing engagements. See how we help enterprise and high-growth brands outrank competitors."
      />
      <Container>
        <header className={styles.header}>
          <Badge variant="blue">Client Case Studies</Badge>
          <h1 className={styles.title}>Documented results, verified in pipeline and revenue</h1>
          <p className={styles.lead}>
            Explore how our technical execution and authoritative link campaigns solve complex indexing bottlenecks and capture category demand.
          </p>
        </header>

        <div className={styles.grid}>
          {CASE_STUDIES.map((study) => (
            <article key={study.slug} className={styles.card}>
              <span className={styles.client}>{study.client}</span>
              <div className={styles.metricBadge}>{study.metric}</div>
              <h2 className={styles.cardTitle}>{study.title}</h2>
              <p className={styles.cardDesc}>{study.desc}</p>
              <Button to={`/case-studies/${study.slug}`} variant="secondary" size="sm">
                Read case study
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
