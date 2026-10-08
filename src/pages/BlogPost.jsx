import React from "react";
import { useParams, Link } from "react-router-dom";
import SEOHead from "../components/common/SEOHead.jsx";
import Container from "../components/ui/Container.jsx";
import Badge from "../components/ui/Badge.jsx";
import styles from "./BlogPost.module.css";

export default function BlogPost() {
  const { slug } = useParams();
  const readableTitle = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "SEO Engineering Article";

  return (
    <article className={styles.page}>
      <SEOHead
        title={readableTitle}
        description={`Technical analysis and recommendations on ${readableTitle} from the Canada Digital Tech engineering team.`}
      />
      <Container>
        <Link to="/blog" className={styles.backLink}>
          ← Back to all essays
        </Link>

        <header className={styles.header}>
          <Badge variant="blue">Technical Essay</Badge>
          <h1 className={styles.title}>{readableTitle}</h1>
          <p className={styles.lead}>
            A deep-dive technical breakdown examining the algorithmic considerations, crawl budget ramifications, and deployment steps.
          </p>
        </header>

        <div className={styles.articleCard}>
          <p className={styles.bodyText}>
            When architecting search discovery for enterprise digital properties, modern development workflows frequently introduce unintentional indexing traps. By understanding how the rendering pipeline processes dynamic scripts and server payloads, engineering teams can preemptively protect organic visibility.
          </p>
          <p className={styles.bodyText}>
            Full editorial content, interactive code snippets, and benchmark diagrams will be published in the upcoming phase.
          </p>
        </div>
      </Container>
    </article>
  );
}
