import React from "react";
import SEOHead from "../components/common/SEOHead.jsx";
import Container from "../components/ui/Container.jsx";
import Badge from "../components/ui/Badge.jsx";
import styles from "./Terms.module.css";

export default function Terms() {
  return (
    <section className={styles.page}>
      <SEOHead
        title="Terms of Service"
        description="Terms of service and engagement terms governing website use and agency services with Canada Digital Tech Inc."
      />
      <Container>
        <header className={styles.header}>
          <Badge variant="neutral">Legal & Compliance</Badge>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.lead}>
            These Terms of Service govern the use of the website at canadadigitaltech.ca and all consulting engagements performed by Canada Digital Tech Inc.
          </p>
        </header>

        <div className={styles.contentCard}>
          <h2 className={styles.sectionTitle}>1. Scope of Engagement</h2>
          <p className={styles.text}>
            All search engine optimization consulting, technical recommendations, and digital PR campaigns are provided in accordance with mutually agreed statements of work and retainer specifications.
          </p>

          <h2 className={styles.sectionTitle}>2. Intellectual Property</h2>
          <p className={styles.text}>
            All bespoke strategy documents, technical audit reports, and content assets prepared specifically for a client become client property upon settlement of corresponding invoices.
          </p>

          <h2 className={styles.sectionTitle}>3. Algorithmic Independence</h2>
          <p className={styles.text}>
            While Canada Digital Tech applies established engineering best practices and proprietary data modeling, search engine ranking algorithms operate independently. We do not engage in black-hat or misleading manipulation schemes.
          </p>
        </div>
      </Container>
    </section>
  );
}
