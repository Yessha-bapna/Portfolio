"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#hero",       label: "Home" },
  { href: "#about",      label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#projects",   label: "Projects" },
  { href: "#contact",    label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((l) => l.href.substring(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container-wide" style={{ padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Image
              src="/logo.png"
              alt="Yessha Logo"
              width={240}
              height={80}
              style={{ objectFit: "contain", height: "80px", width: "auto", display: "block" }}
              priority
            />
          </a>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: 500,
                    textDecoration: "none",
                    color: isActive ? "var(--accent)" : "var(--text-secondary)",
                    background: isActive
                      ? "rgba(156,213,255,0.08)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(156,213,255,0.15)"
                      : "1px solid transparent",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.target as HTMLElement).style.color =
                        "var(--text-primary)";
                      (e.target as HTMLElement).style.background =
                        "rgba(255,255,255,0.04)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.target as HTMLElement).style.color =
                        "var(--text-secondary)";
                      (e.target as HTMLElement).style.background = "transparent";
                    }
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a href="#contact" className="btn-primary navbar-hire-btn" style={{ padding: "10px 20px", fontSize: "14px", borderRadius: "10px" }}>
              <span>Hire Me</span>
            </a>
            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                display: "none",
                background: "none",
                border: "1px solid var(--border-subtle)",
                borderRadius: "8px",
                padding: "8px 10px",
                cursor: "pointer",
                color: "var(--text-primary)",
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="mobile-menu-dropdown"
            style={{
              borderTop: "1px solid var(--border-subtle)",
              paddingBottom: "16px",
              paddingTop: "8px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 16px",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 500,
                  borderRadius: "8px",
                  marginTop: "4px",
                  transition: "all 0.2s ease",
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ padding: "12px 16px 4px" }}>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary"
                style={{ display: "flex", justifyContent: "center", borderRadius: "10px", padding: "12px 20px", fontSize: "14px" }}
              >
                <span>Hire Me</span>
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .navbar-hire-btn { display: none !important; }
        }
        .mobile-menu-dropdown {
          animation: slideDown 0.18s ease;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
}
