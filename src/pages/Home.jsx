import React from "react";
import SEOHead from "../components/common/SEOHead.jsx";
import SmokyHero from "../components/hero/SmokyHero.jsx";
import HomeServices from "../components/home/HomeServices.jsx";
import HomeComparison from "../components/home/HomeComparison.jsx";
import HomeIndustries from "../components/home/HomeIndustries.jsx";
import HomeProcess from "../components/home/HomeProcess.jsx";
import HomeCaseStudies from "../components/home/HomeCaseStudies.jsx";
import HomeTestimonials from "../components/home/HomeTestimonials.jsx";
import HomeFaq from "../components/home/HomeFaq.jsx";
import HomeCtaBanner from "../components/home/HomeCtaBanner.jsx";

export default function Home() {
  return (
    <>
      <SEOHead
        title="Global SEO Agency for Growing Brands"
        description="Canada Digital Tech is an enterprise technical SEO agency headquartered in Canada. We optimize site architecture, build semantic topic authority, and earn tier-one editorial links to turn search traffic into revenue."
      />

      {/* 1. Full-Width Smoky Hero with Command Center */}
      <SmokyHero />

      {/* 2. Core SEO Disciplines with Card Hover & Reveal */}
      <HomeServices />

      {/* 3. The Engineering Advantage (Traditional vs Canada Digital Tech) */}
      <HomeComparison />

      {/* 4. Tailored Sector & Industry Solutions */}
      <HomeIndustries />

      {/* 5. Proven 4-Phase Engagement Framework */}
      <HomeProcess />

      {/* 6. Verified Client Case Studies & Metrics */}
      <HomeCaseStudies />

      {/* 7. Executive Endorsements & Social Proof */}
      <HomeTestimonials />

      {/* 8. Interactive Enterprise SEO FAQ */}
      <HomeFaq />

      {/* 9. High-Impact Free Audit Banner */}
      <HomeCtaBanner />
    </>
  );
}
