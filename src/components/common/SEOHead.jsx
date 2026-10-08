import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SEOHead({
  title,
  description = "Canada Digital Tech is an SEO agency. Technical SEO, content strategy, and link building that turn search traffic into revenue for brands worldwide.",
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const brand = "Canada Digital Tech";
    const fullTitle = title ? `${title} | ${brand}` : `${brand} | Global SEO Agency`;
    document.title = fullTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = fullTitle;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = description;

    // Update canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://canadadigitaltech.ca${pathname}`;
  }, [title, description, pathname]);

  return null;
}
