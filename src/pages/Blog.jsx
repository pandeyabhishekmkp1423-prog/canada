import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/common/SEOHead.jsx";
import Container from "../components/ui/Container.jsx";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import styles from "./Blog.module.css";

const ARTICLES = [
  {
    slug: "javascript-rendering-seo-pitfalls",
    title: "Common JavaScript SEO Pitfalls in Next.js and Single-Page Applications",
    desc: "Why Googlebot still struggles with deferred hydration, and how to structure your SSR pipelines to guarantee instantaneous indexation.",
    date: "March 2026",
    category: "Technical SEO"
  },
  {
    slug: "hreflang-international-ecommerce",
    title: "The Enterprise Guide to Bidirectional hreflang at Scale",
    desc: "How leading multinational brands structure multi-currency subfolders and resolve canonical self-referential conflicts.",
    date: "February 2026",
    category: "International"
  },
  {
    slug: "earning-unbought-editorial-links",
    title: "Building Authoritative Editorial Backlinks via Original Industry Research",
    desc: "A proven playbook for turning primary customer surveys and data journalism into tier-one press mentions.",
    date: "January 2026",
    category: "Digital PR"
  }
];

export default function Blog() {
  return (
    <section className={styles.page}>
      <SEOHead
        title="Search Engineering Blog & Technical Insights"
        description="Deep dives into technical SEO, international indexing, content clustering, and algorithm updates from the Canada Digital Tech engineering team."
      />
      <Container>
        <header className={styles.header}>
          <Badge variant="blue">Insights & Strategy</Badge>
          <h1 className={styles.title}>Search engineering essays & practical playbooks</h1>
          <p className={styles.lead}>
            Technical breakdowns, algorithmic research, and execution guides authored by senior search practitioners.
          </p>
        </header>

        <div className={styles.grid}>
          {ARTICLES.map((art) => (
            <article key={art.slug} className={styles.card}>
              <div className={styles.meta}>
                <span>{art.category}</span>
                <span>•</span>
                <span>{art.date}</span>
              </div>
              <h2 className={styles.cardTitle}>{art.title}</h2>
              <p className={styles.cardDesc}>{art.desc}</p>
              <Button to={`/blog/${art.slug}`} variant="secondary" size="sm">
                Read article
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
