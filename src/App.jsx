import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";
import RouteLoading from "./components/common/RouteLoading.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail.jsx"));
const CaseStudies = lazy(() => import("./pages/CaseStudies.jsx"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail.jsx"));
const Industries = lazy(() => import("./pages/Industries.jsx"));
const Pricing = lazy(() => import("./pages/Pricing.jsx"));
const Process = lazy(() => import("./pages/Process.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.jsx"));
const Resources = lazy(() => import("./pages/Resources.jsx"));
const FreeAudit = lazy(() => import("./pages/FreeAudit.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Careers = lazy(() => import("./pages/Careers.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const Terms = lazy(() => import("./pages/Terms.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<RouteLoading />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:slug" element={<ServiceDetail />} />
            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="industries" element={<Industries />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="process" element={<Process />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="resources" element={<Resources />} />
            <Route path="free-audit" element={<FreeAudit />} />
            <Route path="contact" element={<Contact />} />
            <Route path="careers" element={<Careers />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
