import { SERVICES } from "./services.js";

export const NAV_LINKS = [
  {
    label: "Services",
    path: "/services",
    dropdown: SERVICES.map((s) => ({
      label: s.title,
      tagline: s.tagline,
      path: `/services/${s.slug}`,
    })),
  },
  { label: "Industries", path: "/industries" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Process", path: "/process" },
  { label: "Pricing", path: "/pricing" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const FOOTER_SECTIONS = [
  {
    title: "Services",
    links: SERVICES.map((s) => ({
      label: s.title,
      path: `/services/${s.slug}`,
    })),
  },
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Our Process", path: "/process" },
      { label: "Case Studies", path: "/case-studies" },
      { label: "Careers", path: "/careers" },
      { label: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "SEO Blog", path: "/blog" },
      { label: "Resources & Guides", path: "/resources" },
      { label: "Free SEO Audit", path: "/free-audit" },
      { label: "Pricing Plans", path: "/pricing" },
      { label: "Industry Solutions", path: "/industries" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Terms of Service", path: "/terms" },
    ],
  },
];
