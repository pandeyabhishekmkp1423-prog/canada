import React from "react";
import SEOHead from "../components/common/SEOHead.jsx";
import Container from "../components/ui/Container.jsx";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import styles from "./Pricing.module.css";

const TIERS = [
  {
    name: "Growth Tier",
    price: "$4,500",
    cadence: "CAD / month",
    desc: "For scaling brands looking to fix technical debt, capture high-intent non-brand keywords, and accelerate organic pipeline.",
    features: [
      "Full technical audit & bi-weekly sprints",
      "4 comprehensive content briefs per month",
      "High-authority digital PR link acquisition",
      "Dedicated senior search strategist"
    ],
    isFeatured: false,
    cta: "Request growth plan"
  },
  {
    name: "Enterprise Scale",
    price: "$8,500",
    cadence: "CAD / month",
    desc: "For market leaders and multi-regional platforms requiring deep architectural oversight, international hreflang, and aggressive outreach.",
    features: [
      "Continuous enterprise crawl & log file monitoring",
      "8 entity-optimized content briefs per month",
      "Tier-1 publication digital PR placements",
      "Custom Looker Studio revenue attribution models",
      "Engineering team Slack channel access"
    ],
    isFeatured: true,
    cta: "Get enterprise plan"
  },
  {
    name: "Custom Sprint",
    price: "Custom",
    cadence: "Fixed project scope",
    desc: "Tailored engagements for large-scale CMS migrations, forensic algorithmic penalty recovery, or pre-acquisition search diligence.",
    features: [
      "Custom scope & milestone roadmap",
      "Zero-downtime migration protocols",
      "Executive presentations & board reports",
      "Direct CTO & VP Marketing advisory"
    ],
    isFeatured: false,
    cta: "Discuss custom scope"
  }
];

export default function Pricing() {
  return (
    <section className={styles.page}>
      <SEOHead
        title="SEO Retainer Pricing & Investment Models"
        description="Predictable, value-driven SEO pricing models for high-growth businesses and enterprise platforms. Transparent retainers with zero long-term lock-in."
      />
      <Container>
        <header className={styles.header}>
          <Badge variant="blue">Investment Options</Badge>
          <h1 className={styles.title}>Predictable investment models tied to search revenue</h1>
          <p className={styles.lead}>
            Transparent monthly retainers and project sprints. We partner with teams ready to commit to measurable organic growth.
          </p>
        </header>

        <div className={styles.grid}>
          {TIERS.map((tier) => (
            <article
              key={tier.name}
              className={`${styles.card} ${tier.isFeatured ? styles.featuredCard : ""}`}
            >
              {tier.isFeatured && <span className={styles.featuredTag}>Most Popular</span>}
              <h2 className={styles.planName}>{tier.name}</h2>
              <div className={styles.planPrice}>
                {tier.price} <span className={styles.planCadence}>/ {tier.cadence}</span>
              </div>
              <p className={styles.planDesc}>{tier.desc}</p>

              <ul className={styles.featureList}>
                {tier.features.map((feat, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    ✓ {feat}
                  </li>
                ))}
              </ul>

              <Button
                to="/free-audit"
                variant={tier.isFeatured ? "primary" : "secondary"}
                size="md"
                fullWidth
              >
                {tier.cta}
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
