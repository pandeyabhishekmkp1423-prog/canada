import React from "react";
import { useParams, Link } from "react-router-dom";
import SEOHead from "../components/common/SEOHead.jsx";
import Container from "../components/ui/Container.jsx";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import { SERVICES } from "../data/services.js";
import styles from "./ServiceDetail.module.css";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug) || {
    title: "Specialized SEO Service",
    tagline: "Custom search strategy engineered for enterprise growth.",
    description: "Detailed service specifications, technical frameworks, and execution roadmaps tailored to your platform architecture.",
    features: [
      "Custom site architecture analysis",
      "Competitive keyword and authority gap audit",
      "Executive strategy & developer-ready tickets",
      "Monthly performance and pipeline attribution"
    ],
  };

  return (
    <section className={styles.page}>
      <SEOHead
        title={`${service.title} Services`}
        description={service.description}
      />
      <Container>
        <Link to="/services" className={styles.backLink}>
          ← Back to all services
        </Link>

        <header className={styles.header}>
          <Badge variant="blue">{service.title}</Badge>
          <h1 className={styles.title}>{service.tagline}</h1>
          <p className={styles.lead}>{service.description}</p>
        </header>

        <div className={styles.contentCard}>
          <h2 className={styles.title}>What this service covers</h2>
          <ul className={styles.featureList}>
            {service.features.map((item, idx) => (
              <li key={idx} className={styles.featureItem}>
                ✓ {item}
              </li>
            ))}
          </ul>

          <div className={styles.actionRow}>
            <Button to="/free-audit" variant="primary" size="lg">
              Get an audit for this service
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Speak with a strategist
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
