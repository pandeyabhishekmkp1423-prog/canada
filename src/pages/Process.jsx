import React from "react";
import SEOHead from "../components/common/SEOHead.jsx";
import Container from "../components/ui/Container.jsx";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import styles from "./Process.module.css";

const PHASES = [
  {
    step: "01",
    title: "Discovery & Forensic Site Crawl",
    desc: "We analyze your server architecture, JS rendering, historical algorithmic hits, and backlink topology to locate what is inhibiting search crawl efficiency."
  },
  {
    step: "02",
    title: "Revenue-Weighted Strategy & Prioritisation",
    desc: "We develop a high-impact roadmap, categorizing tasks by estimated revenue lift and engineering effort into clean sprint tickets."
  },
  {
    step: "03",
    title: "Collaborative Implementation & Content Sprints",
    desc: "Working alongside your internal product and engineering teams, we implement site-wide technical fixes and produce intent-matched content clusters."
  },
  {
    step: "04",
    title: "Digital PR & Authoritative Link Acquisition",
    desc: "We launch original data research campaigns to earn editorial brand placements and authoritative links from top-tier publications in your domain."
  },
  {
    step: "05",
    title: "Executive Reporting & Ongoing Iteration",
    desc: "Monthly executive summaries tie ranking advancements directly to qualified organic pipeline, with iterative refinements based on SERP movements."
  }
];

export default function Process() {
  return (
    <section className={styles.page}>
      <SEOHead
        title="Our Strategic Process & Methodology"
        description="Learn about our 5-phase SEO methodology: Discovery, Prioritisation, Collaborative Implementation, Digital PR, and Revenue Attribution."
      />
      <Container>
        <header className={styles.header}>
          <Badge variant="blue">Engagement Roadmap</Badge>
          <h1 className={styles.title}>How our partnerships move search needles</h1>
          <p className={styles.lead}>
            A transparent, agile workflow that integrates with your engineering and marketing sprints to produce compounding organic gains.
          </p>
        </header>

        <div className={styles.timeline}>
          {PHASES.map((phase) => (
            <article key={phase.step} className={styles.stepCard}>
              <span className={styles.stepNum}>{phase.step}</span>
              <div className={styles.stepBody}>
                <h2 className={styles.stepTitle}>{phase.title}</h2>
                <p className={styles.stepDesc}>{phase.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
