import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Badge from "../ui/Badge.jsx";
import { SERVICES } from "../../data/services.js";
import styles from "./HomeServices.module.css";

export default function HomeServices() {
  return (
    <section id="services-grid" className={styles.section} aria-label="Core SEO Specializations">
      <Container>
        <SectionHeading
          tag="Core Specializations"
          title="Search marketing engineered for compounding pipeline"
          description="We replace generic agency tactics with forensic server audits, entity-level content mapping, and unbought tier-one digital PR."
        />

        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <article key={service.slug} className={styles.card}>
              <div className={styles.topRow}>
                <span className={styles.category}>{service.shortTitle} SEO</span>
                <Badge variant="blue">{service.features.length} Focus Areas</Badge>
              </div>

              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.desc}>{service.description}</p>

              <ul className={styles.featureList}>
                {service.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.dot} aria-hidden="true" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.cardFooter}>
                <Link to={`/services/${service.slug}`} className={styles.link}>
                  <span>Explore {service.shortTitle} Architecture</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
