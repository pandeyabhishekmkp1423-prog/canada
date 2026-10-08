import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import PageTransition from "../components/common/PageTransition.jsx";
import styles from "./MainLayout.module.css";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className={styles.layout}>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className={styles.main}>
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname} locationKey={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
