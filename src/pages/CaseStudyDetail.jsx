import React from "react";
import { useParams, Link } from "react-router-dom";
import SEOHead from "../components/common/SEOHead.jsx";
import Container from "../components/ui/Container.jsx";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import styles from "./CaseStudyDetail.module.css";

export default function CaseStudyDetail() {
  const { slug } = useParams();

  return (
    <section className={styles.page}>
      <SEOHead
        title={`Case Study: ${slug?.replace(/-/g, " ") || "Client Success"}`}
        description="Comprehensive case study breakdown including initial audit findings, technical implementation, and revenue impact."
      />
      <Container>
        <Link to="/case-studies" className={styles.backLink}>
          ← Back to all case studies
        </Link>

        <header className={styles.header}>
          <Badge variant="blue">Client Case Study</Badge>
          <h1 className={styles.title}>
            How we generated sustainable organic pipeline for {slug?.replace(/-/g, " ") || "our enterprise client"}
          </h1>
          <p className={styles.lead}>
            A deep dive into the technical hurdles, algorithmic headwinds, and strategic initiatives that drove top-tier rankings and verified pipeline growth.
          </p>
        </header>

        <div className={styles.statCard}>
          <div className={styles.statHighlight}>+240% Organic Pipeline Growth</div>
          <p className={styles.bodyText}>
            Through comprehensive server log analysis, removal of internal redirect chains, and structured entity content clustering, the client captured ranking dominance for competitive category terms within five months.
          </p>
          <div className={styles.actionRow}>
            <Button to="/free-audit" variant="primary" size="lg">
              Request a comparable audit
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Speak with our search engineers
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
