import React from "react";
import Container from "../ui/Container.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import styles from "./HomeProcess.module.css";

const STEPS = [
  {
    num: "01",
    phase: "Discovery & Audit",
    title: "Forensic Technical Audit",
    desc: "Complete server crawl, JavaScript hydration profiling, and edge cache analysis to identify architectural bottlenecks suppressing search rank potential.",
  },
  {
    num: "02",
    phase: "Strategy & Roadmap",
    title: "Revenue-Weighted Plan",
    desc: "A prioritised 90-day execution roadmap ranked by estimated pipeline value and engineering effort, delivered with Jira/Linear-ready technical tickets.",
  },
  {
    num: "03",
    phase: "Execution & Clusters",
    title: "Technical Fixes & Content",
    desc: "Collaborative bi-weekly sprints fixing crawl inefficiencies alongside deployment of intent-matched semantic topic clusters that capture commercial intent.",
  },
  {
    num: "04",
    phase: "Authority & PR",
    title: "Digital PR & Attribution",
    desc: "Original data journalism campaigns earning authoritative editorial placements, tracked in Looker Studio with real-time revenue and pipeline attribution.",
  },
];

export default function HomeProcess() {
  return (
    <section id="methodology" className={styles.section} aria-label="Our Systematic Engagement Methodology">
      <Container>
        <SectionHeading
          onDark
          tag="Proven Methodology"
          title="From forensic diagnosis to category search monopoly"
          description="A battle-tested 4-phase framework designed to integrate with your internal sprint cycles and deliver compounding organic returns."
        />

        <ol className={styles.grid}>
          {STEPS.map((step) => (
            <li key={step.num} className={styles.stepCard}>
              <div className={styles.stepTop}>
                <span className={styles.stepNumber}>{step.num}</span>
                <span className={styles.stepBadge}>{step.phase}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
