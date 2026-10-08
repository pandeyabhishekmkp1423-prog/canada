import React from "react";
import SEOHead from "../components/common/SEOHead.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.page}>
      <SEOHead
        title="404 - Page Not Found"
        description="The page you requested could not be located on canadadigitaltech.ca. Return to the homepage or explore our SEO services."
      />
      <Container>
        <div className={styles.box}>
          <div className={styles.code}>404</div>
          <h1 className={styles.title}>This page could not be indexed</h1>
          <p className={styles.desc}>
            The URL you followed does not exist or may have migrated to a new canonical address. Let&apos;s get you back to high-ranking territory.
          </p>

          <div className={styles.buttonRow}>
            <Button to="/" variant="primary" size="md">
              Return to homepage
            </Button>
            <Button to="/services" variant="secondary" size="md">
              Browse SEO services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
