import React from "react";
import SEOHead from "../components/common/SEOHead.jsx";
import Container from "../components/ui/Container.jsx";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import styles from "./Careers.module.css";

const ROLES = [
  {
    dept: "Technical Search Engineering",
    title: "Senior Technical SEO Architect",
    desc: "Lead JavaScript rendering audits, server log analysis, and architectural roadmaps for Fortune 500 ecommerce and SaaS clients."
  },
  {
    dept: "Digital PR & Outreach",
    title: "Data Journalism & PR Lead",
    desc: "Develop original research campaigns and secure tier-one editorial mentions in international financial and tech publications."
  },
  {
    dept: "Client Strategy",
    title: "Enterprise SEO Account Director",
    desc: "Oversee multi-market client engagements, coordinate sprint deliverables, and present revenue attribution models to executive teams."
  }
];

export default function Careers() {
  return (
    <section className={styles.page}>
      <SEOHead
        title="Careers & Opportunities"
        description="Join Canada Digital Tech. We are looking for senior technical search architects, data journalists, and organic growth consultants."
      />
      <Container>
        <header className={styles.header}>
          <Badge variant="blue">Join the Team</Badge>
          <h1 className={styles.title}>Build the future of search engineering</h1>
          <p className={styles.lead}>
            Work with senior practitioners on global search campaigns with remote flexibility across Canada and internationally.
          </p>
        </header>

        <div className={styles.grid}>
          {ROLES.map((role) => (
            <article key={role.title} className={styles.card}>
              <span className={styles.roleDept}>{role.dept}</span>
              <h2 className={styles.roleTitle}>{role.title}</h2>
              <p className={styles.roleDesc}>{role.desc}</p>
              <Button to="/contact" variant="secondary" size="sm">
                Apply for position
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
