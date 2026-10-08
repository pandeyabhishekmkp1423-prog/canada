import React from "react";
import Container from "../ui/Container.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import styles from "./HomeTestimonials.module.css";

const TESTIMONIALS = [
  {
    quote: "Canada Digital Tech transformed how our leadership views organic search. Within 90 days, their server crawl fixes unlocked millions of indexed product pages that previously stalled in our legacy CMS.",
    author: "Marc Tremblay",
    role: "VP of Digital Growth, FinSecure Global",
    initials: "MT",
  },
  {
    quote: "Their team talks engineering, not hand-wavy marketing fluff. Every audit ticket arrived formatted for our Linear backlog with explicit acceptance criteria. Organic ARR increased by 280% in our first fiscal year.",
    author: "Sarah Jenkins",
    role: "Head of Engineering, CloudCore Technologies",
    initials: "SJ",
  },
  {
    quote: "We previously wasted six figures on agencies that reported impressions and vanity rankings. Canada Digital Tech tied our search visibility directly to qualified demo volume and pipeline revenue.",
    author: "Elena Rostova",
    role: "Chief Revenue Officer, OmniRetail D2C",
    initials: "ER",
  },
];

export default function HomeTestimonials() {
  return (
    <section className={styles.section} aria-label="Client Testimonials and Endorsements">
      <Container>
        <SectionHeading
          tag="Executive Endorsements"
          title="Trusted by engineering and growth leaders globally"
          description="Read how senior operators partner with our search strategists to eliminate technical roadblocks and achieve category-leading search market share."
        />

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, idx) => (
            <article key={idx} className={styles.card}>
              <div className={styles.stars} aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.authorRow}>
                <div className={styles.avatar} aria-hidden="true">
                  {t.initials}
                </div>
                <div className={styles.meta}>
                  <span className={styles.name}>{t.author}</span>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
