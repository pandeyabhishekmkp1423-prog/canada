import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { NAV_LINKS } from "../../data/navigation.js";
import Button from "../ui/Button.jsx";
import BrandLogo from "../ui/BrandLogo.jsx";
import styles from "./MobileMenu.module.css";

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className={styles.topRow}>
            <BrandLogo onDark onClick={onClose} />
            <button
              type="button"
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close navigation menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.path}
                  className={styles.navItem}
                  onClick={onClose}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className={styles.servicesSublist}>
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className={styles.serviceSublink}
                        onClick={onClose}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className={styles.bottomCta}>
            <Button
              to="/free-audit"
              variant="primary"
              size="lg"
              fullWidth
              onClick={onClose}
            >
              Get a free SEO audit
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
