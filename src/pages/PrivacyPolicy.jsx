import React from "react";
import SEOHead from "../components/common/SEOHead.jsx";
import Container from "../components/ui/Container.jsx";
import Badge from "../components/ui/Badge.jsx";
import styles from "./PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
  return (
    <section className={styles.page}>
      <SEOHead
        title="Privacy Policy"
        description="Privacy policy and data governance practices of Canada Digital Tech Inc. (canadadigitaltech.ca)."
      />
      <Container>
        <header className={styles.header}>
          <Badge variant="neutral">Legal & Compliance</Badge>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lead}>
            Canada Digital Tech Inc. (&quot;Canada Digital Tech&quot;, &quot;we&quot;, &quot;our&quot;) is committed to protecting your personal information and respecting privacy rights across Canadian and international jurisdictions.
          </p>
        </header>

        <div className={styles.contentCard}>
          <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
          <p className={styles.text}>
            We collect information provided directly by you when you request a free audit, subscribe to insights, or contact our team, including your name, corporate email address, and company website URL.
          </p>

          <h2 className={styles.sectionTitle}>2. Use of Information</h2>
          <p className={styles.text}>
            We utilize collected details solely to perform requested technical search diagnostics, respond to inquiries, and furnish agreed-upon consulting deliverables. We do not sell or rent customer data to third parties.
          </p>

          <h2 className={styles.sectionTitle}>3. Data Storage & Security</h2>
          <p className={styles.text}>
            All client analytical assets, access credentials, and audit materials are maintained with industry-standard encryption, strict access governance, and adherence to PIPEDA guidelines.
          </p>
        </div>
      </Container>
    </section>
  );
}
