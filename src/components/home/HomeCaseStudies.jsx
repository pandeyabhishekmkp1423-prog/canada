import React from "react";
import Container from "../ui/Container.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Badge from "../ui/Badge.jsx";
import Button from "../ui/Button.jsx";
import styles from "./HomeCaseStudies.module.css";

const CASES = [
  {
    slug: "fintech-scaleup",
    sector: "Fintech Platform",
    metric: "+340%",
    metricLabel: "Organic Annual Recurring Revenue",
    title: "Dominating high-ACV commercial search terms across North America & the UK",
    desc: "A complete JavaScript hydration overhaul and semantic topic matrix captured top positions for 120+ high-value queries.",
    badge: "5-Month Engagement",
  },
  {
    slug: "ecommerce-luxury",
    sector: "Enterprise DTC Fashion",
    metric: "2.8x",
    metricLabel: "Non-Brand Organic Search Traffic",
    title: "Unlocking faceted navigation indexation on custom headless architecture",
    desc: "Restructuring filter crawling rules and regional hreflang routing unlocked an additional $4.2M in annual organic GMV.",
    badge: "E-Commerce Architecture",
  },
  {
    slug: "enterprise-b2b-saas",
    sector: "Cloud Infrastructure SaaS",
    metric: "#1",
    metricLabel: "Ranked for 85+ Commercial Intent Keywords",
    title: "Outranking legacy incumbents in enterprise cloud solutions",
    desc: "Data-driven original industry research and API documentation schema optimization elevated domain rating and captured category intent.",
    badge: "B2B SaaS Growth",
  },
];

export default function HomeCaseStudies() {
  return (
    <section className={styles.section} aria-label="Featured Client Outcomes">
      <Container>
        <SectionHeading
          tag="Verified Outcomes"
          title="Revenue-backed results from enterprise search campaigns"
          description="Explore how our technical search architecture and digital PR programs resolve complex indexing blockers and capture commercial search volume."
        />

        <div className={styles.grid}>
          {CASES.map((cs) => (
            <article key={cs.slug} className={styles.card}>
              <div className={styles.clientMeta}>
                <span className={styles.clientSector}>{cs.sector}</span>
                <Badge variant="blue">{cs.badge}</Badge>
              </div>

              <div className={styles.metricBig}>{cs.metric}</div>
              <div className={styles.metricLabel}>{cs.metricLabel}</div>

              <h3 className={styles.cardTitle}>{cs.title}</h3>
              <p className={styles.cardDesc}>{cs.desc}</p>

              <div className={styles.cardFooter}>
                <Button to={`/case-studies/${cs.slug}`} variant="secondary" size="sm" fullWidth>
                  Read full case study
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
