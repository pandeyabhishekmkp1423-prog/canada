import React from "react";
import SEOHead from "../components/common/SEOHead.jsx";
import Container from "../components/ui/Container.jsx";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.page}>
      <SEOHead
        title="Contact Our Search Strategists"
        description="Get in touch with Canada Digital Tech. Direct access to senior SEO consultants and technical strategists."
      />
      <Container>
        <header className={styles.header}>
          <Badge variant="blue">Get in Touch</Badge>
          <h1 className={styles.title}>Speak directly with our search engineering team</h1>
          <p className={styles.lead}>
            Whether you are planning a replatforming migration, recovering from an algorithm shift, or targeting global search expansion, we are here to assist.
          </p>
        </header>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Direct Inquiries</h2>
            <p className={styles.cardText}>
              Reach our strategy leads directly for enterprise partnerships, RFPs, and agency engagements.
            </p>
            <div className={styles.contactDetail}>hello@canadadigitaltech.ca</div>
            <Button href="mailto:hello@canadadigitaltech.ca" variant="secondary" size="md">
              Send an email
            </Button>
          </article>

          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Complimentary Audit</h2>
            <p className={styles.cardText}>
              Want us to review your domain before getting on a call? We will identify the top three high-impact quick wins.
            </p>
            <div className={styles.contactDetail}>24-hour turnaround</div>
            <Button to="/free-audit" variant="primary" size="md">
              Request an audit
            </Button>
          </article>
        </div>
      </Container>
    </section>
  );
}
