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
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((l) => l.href.substring(1));
      for (const id of [...sections].reverse()) {
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

  // Close menu when window resizes to desktop width
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="container-wide nav-inner">

          {/* Logo */}
          <a href="#hero" className="nav-logo">
            <Image
              src="/logo.png"
              alt="Yessha Logo"
              width={240}
              height={80}
              style={{ objectFit: "contain", height: "68px", width: "auto", display: "block" }}
              priority
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right side: CTA + Hamburger */}
          <div className="nav-right">
            <a href="#contact" className="btn-primary navbar-hire-btn">
              <span>Hire Me</span>
            </a>
            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className={`hamburger ${menuOpen ? "open" : ""}`}>
                <span /><span /><span />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer — rendered outside <nav> so it overlays correctly */}
      <div className={`mobile-drawer ${menuOpen ? "mobile-drawer-open" : ""}`}>
        <div className="mobile-drawer-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="mobile-link-dot" />
                {link.label}
              </a>
            );
          })}

          <div className="mobile-hire-wrap">
            <a
              href="#contact"
              className="btn-primary"
              style={{ display: "flex", justifyContent: "center", width: "100%", borderRadius: "12px", padding: "14px 20px", fontSize: "15px" }}
              onClick={() => setMenuOpen(false)}
            >
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden
        />
      )}

      <style>{`
        /* ── Navbar bar ── */
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          padding: 0 24px;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        /* ── Desktop links ── */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-link {
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          color: var(--text-secondary);
          background: transparent;
          border: 1px solid transparent;
          transition: all 0.2s ease;
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255,255,255,0.04);
        }

        .nav-link-active {
          color: var(--accent) !important;
          background: rgba(156,213,255,0.08) !important;
          border-color: rgba(156,213,255,0.15) !important;
        }

        /* ── Right controls ── */
        .nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .navbar-hire-btn {
          padding: 10px 20px;
          font-size: 14px;
          border-radius: 10px;
        }

        /* ── Hamburger button ── */
        .mobile-menu-btn {
          display: none;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(156,213,255,0.18);
          border-radius: 10px;
          padding: 9px 12px;
          cursor: pointer;
          color: var(--text-primary);
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s;
        }

        .mobile-menu-btn:hover {
          background: rgba(156,213,255,0.1);
          border-color: rgba(156,213,255,0.35);
        }

        /* ── Hamburger icon ── */
        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 20px;
        }
        .hamburger span {
          display: block;
          height: 2px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: transform 0.25s ease, opacity 0.25s ease, width 0.25s ease;
          transform-origin: center;
        }
        .hamburger span:nth-child(1) { width: 20px; }
        .hamburger span:nth-child(2) { width: 14px; }
        .hamburger span:nth-child(3) { width: 20px; }

        .hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
          width: 20px;
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
          width: 20px;
        }

        /* ── Mobile Drawer ── */
        .mobile-drawer {
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          z-index: 999;
          pointer-events: none;
          opacity: 0;
          transform: translateY(-12px);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .mobile-drawer-open {
          pointer-events: all;
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-drawer-inner {
          background: rgba(5, 8, 22, 0.97);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(156,213,255,0.12);
          border-top: 1px solid rgba(156,213,255,0.08);
          padding: 12px 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(156,213,255,0.04);
        }

        /* ── Mobile nav links ── */
        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 16px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          border-radius: 10px;
          border: 1px solid transparent;
          transition: all 0.2s ease;
        }

        .mobile-nav-link:hover {
          color: var(--text-primary);
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.06);
        }

        .mobile-nav-link-active {
          color: var(--accent) !important;
          background: rgba(156,213,255,0.07) !important;
          border-color: rgba(156,213,255,0.15) !important;
        }

        .mobile-link-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(156,213,255,0.3);
          flex-shrink: 0;
          transition: background 0.2s;
        }

        .mobile-nav-link-active .mobile-link-dot {
          background: var(--accent);
          box-shadow: 0 0 8px rgba(156,213,255,0.5);
        }

        .mobile-hire-wrap {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid rgba(156,213,255,0.08);
        }

        /* ── Backdrop ── */
        .mobile-backdrop {
          position: fixed;
          inset: 0;
          top: 72px;
          background: rgba(0,0,0,0.5);
          z-index: 998;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── Responsive breakpoints ── */
        @media (max-width: 768px) {
          .desktop-nav       { display: none !important; }
          .navbar-hire-btn   { display: none !important; }
          .mobile-menu-btn   { display: flex !important; }
        }

        @media (min-width: 769px) {
          .mobile-drawer     { display: none !important; }
          .mobile-backdrop   { display: none !important; }
        }

        @media (max-width: 480px) {
          .nav-inner {
            height: 64px;
            padding: 0 14px;
          }
          .mobile-drawer {
            top: 64px;
          }
          .mobile-backdrop {
            top: 64px;
          }
        }
      `}</style>
    </>
  );
}
