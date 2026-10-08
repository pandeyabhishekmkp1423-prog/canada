import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/common/SEOHead.jsx";
import Container from "../components/ui/Container.jsx";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import { SERVICES } from "../data/services.js";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={styles.page}>
      <SEOHead
        title="SEO Services & Solutions"
        description="Comprehensive search engine optimization services: technical audits, content clusters, enterprise migrations, and international search strategy."
      />
      <Container>
        <header className={styles.header}>
          <Badge variant="blue">Our Specializations</Badge>
          <h1 className={styles.title}>Data-driven SEO services designed for high-growth brands</h1>
          <p className={styles.lead}>
            Each solution is customized to eliminate crawl inefficiencies, scale high-converting content, and earn authoritative backlinks that drive measurable pipeline.
          </p>
        </header>

        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <article key={service.slug} className={styles.card}>
              <h2 className={styles.cardTitle}>{service.title}</h2>
              <p className={styles.cardTagline}>{service.tagline}</p>
              <p className={styles.cardDesc}>{service.description}</p>

              <ul className={styles.featureList}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.featureDot} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button to={`/services/${service.slug}`} variant="secondary" size="sm">
                View {service.shortTitle} details
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
