import React, { useState } from "react";
import Container from "../ui/Container.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import styles from "./HomeFaq.module.css";

const FAQS = [
  {
    q: "How does Canada Digital Tech differ from traditional SEO agencies?",
    a: "We approach search as a software engineering and technical architecture discipline. Rather than pitching generic monthly blog retainers, our consultants analyze server log files, optimize JavaScript hydration rendering, fix faceted crawl traps, and construct semantic topic clusters with clear revenue attribution.",
  },
  {
    q: "How fast do technical crawl and hydration fixes produce ranking gains?",
    a: "Critical technical remediations—such as removing canonical redirect loops, resolving indexation blocks, and optimizing Core Web Vitals—often trigger search engine recrawls and visibility improvements within 3 to 6 weeks, with compounding organic pipeline accelerating over 90 days.",
  },
  {
    q: "Do you support complex international websites and multi-currency platforms?",
    a: "Yes. International and multilingual SEO is one of our primary core disciplines. We architect flawless bidirectional hreflang configurations, design regional directory frameworks, and localize topic intent for enterprise clients expanding across North America, Europe, and Asia-Pacific.",
  },
  {
    q: "How do you earn authoritative backlinks without using private blog networks?",
    a: "We only execute 100% white-hat digital PR and original data journalism. By conducting proprietary industry research, surveying market trends, and pitching relevant findings to financial and tech journalists, we earn natural editorial citations from top-tier publications in your domain.",
  },
  {
    q: "What is included in the complimentary preliminary SEO audit?",
    a: "Our senior strategists manually analyze your domain to evaluate crawl efficiency, JavaScript indexing hurdles, and commercial keyword gaps against your top 3 competitors. You receive three actionable, engineering-ready recommendations within one business day.",
  },
];

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className={styles.section} aria-label="Frequently Asked Questions">
      <Container>
        <SectionHeading
          tag="Knowledge & Clarity"
          title="Frequently asked questions about enterprise SEO"
          description="Everything you need to know about our technical methodology, contract structures, and expected revenue velocity."
        />

        <div className={styles.faqContainer}>
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
                <button
                  type="button"
                  className={styles.trigger}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{faq.q}</span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`} aria-hidden="true">
                    +
                  </span>
                </button>
                {isOpen && (
                  <div id={`faq-answer-${i}`} className={styles.answer}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
