import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import { NAV_LINKS } from "../../data/navigation.js";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import BrandLogo from "../ui/BrandLogo.jsx";
import MobileMenu from "./MobileMenu.jsx";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const isHome = location.pathname === "/";
  const isTransparent = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${isTransparent ? styles.transparent : styles.scrolled}`}
      >
        <Container className={styles.container}>
          <div className={styles.inner}>
            <BrandLogo onDark={isTransparent} />

            <nav className={styles.desktopNav} aria-label="Main Navigation">
              {NAV_LINKS.map((item) => {
                if (item.dropdown) {
                  return (
                    <div
                      key={item.label}
                      className={styles.dropdownContainer}
                      ref={dropdownRef}
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        className={styles.dropdownTrigger}
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        aria-expanded={dropdownOpen}
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={15}
                          className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ""}`}
                        />
                      </button>

                      {dropdownOpen && (
                        <div className={styles.dropdownMenu} role="menu">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className={styles.dropdownItem}
                              role="menuitem"
                            >
                              <span className={styles.dropdownTitle}>{sub.label}</span>
                              <span className={styles.dropdownTagline}>{sub.tagline}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`${styles.navLink} ${
                      location.pathname === item.path ? styles.navLinkActive : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className={styles.actions}>
              <div className={styles.headerCta}>
                <Button to="/free-audit" variant="primary" size="sm">
                  Free audit
                </Button>
              </div>

              <button
                type="button"
                className={styles.menuButton}
                onClick={() => setMobileOpen(true)}
                aria-label="Open mobile navigation menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
