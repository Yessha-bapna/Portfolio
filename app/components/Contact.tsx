"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <footer id="contact" style={{ position: "relative", overflow: "hidden" }}>

      {/* Top gradient divider */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(156,213,255,0.3), transparent)",
      }} />

      {/* Background glow */}
      <div style={{
        position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
        width: "800px", height: "400px",
        background: "radial-gradient(ellipse, rgba(156,213,255,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div className="grid-bg" style={{ opacity: 0.4 }} />

      {/* ── CONTACT SECTION ── */}
      <div className="container-wide z-content" style={{ paddingTop: "100px", paddingBottom: "80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-label" style={{ display: "inline-flex", marginBottom: "20px" }}>
            <div className="glow-dot" />
            Let's Connect
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(34px, 5vw, 52px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: "14px",
          }}>
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-secondary)", maxWidth: "460px", margin: "0 auto", lineHeight: 1.7 }}>
            Open to opportunities, collaborations, and conversations about AI and engineering. I'd love to hear from you!
          </p>
        </div>

        {/* Two-column: Left = socials, Right = email CTA */}
        <div className="contact-layout">

          {/* ── LEFT: Info + Socials ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* Location card */}
            <div className="glass-card" style={{ padding: "22px 24px", display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{
                width: "44px", height: "44px",
                background: "rgba(156,213,255,0.08)", border: "1px solid rgba(156,213,255,0.15)",
                borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "20px", flexShrink: 0,
              }}>📍</div>
              <div>
                <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "3px" }}>Location</div>
                <div style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: 600 }}>Solapur, India</div>
              </div>
            </div>

            {/* Availability card */}
            <div className="glass-card" style={{ padding: "22px 24px", display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{
                width: "44px", height: "44px",
                background: "rgba(156,213,255,0.08)", border: "1px solid rgba(156,213,255,0.15)",
                borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <div className="glow-dot" />
              </div>
              <div>
                <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "3px" }}>Status</div>
                <div style={{ fontSize: "14px", color: "var(--accent)", fontWeight: 600 }}>Open to Opportunities</div>
              </div>
            </div>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/yessha-bapna" target="_blank" rel="noopener noreferrer"
              className="glass-card social-card"
              style={{ padding: "22px 24px", display: "flex", alignItems: "center", gap: "14px", textDecoration: "none" }}>
              <div style={{
                width: "44px", height: "44px",
                background: "rgba(10,102,194,0.15)", border: "1px solid rgba(10,102,194,0.3)",
                borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0a66c2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "3px" }}>LinkedIn</div>
                <div style={{ fontSize: "13px", color: "#0a66c2", fontWeight: 600 }}>Yessha Bapna</div>
              </div>
              <span style={{ color: "var(--text-muted)", fontSize: "16px" }}>↗</span>
            </a>

            {/* GitHub */}
            <a href="https://github.com/Yessha-bapna" target="_blank" rel="noopener noreferrer"
              className="glass-card social-card"
              style={{ padding: "22px 24px", display: "flex", alignItems: "center", gap: "14px", textDecoration: "none" }}>
              <div style={{
                width: "44px", height: "44px",
                background: "rgba(240,246,252,0.08)", border: "1px solid rgba(240,246,252,0.15)",
                borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#f0f6fc">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "3px" }}>GitHub</div>
                <div style={{ fontSize: "13px", color: "var(--text-primary)", fontWeight: 600 }}>Yessha-bapna</div>
              </div>
              <span style={{ color: "var(--text-muted)", fontSize: "16px" }}>↗</span>
            </a>
          </div>

          {/* ── RIGHT: Email CTA ── */}
          <div className="glass-card email-cta-card" style={{
            padding: "52px 44px",
            textAlign: "center",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            background: "rgba(156,213,255,0.03)",
            border: "1px solid rgba(156,213,255,0.14)",
          }}>
            <div style={{
              width: "72px", height: "72px",
              background: "rgba(156,213,255,0.1)", border: "1px solid rgba(156,213,255,0.2)",
              borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "32px", marginBottom: "24px",
            }}>✉️</div>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "22px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px",
            }}>
              Drop Me an Email
            </h3>
            <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "32px", lineHeight: 1.7, maxWidth: "340px" }}>
              Have an opportunity, project idea, or just want to say hi?
              Hit the button and I'll get back to you within 24 hours.
            </p>
            <a href="mailto:bapnayessha05@gmail.com" className="btn-primary"
              style={{ padding: "14px 20px", borderRadius: "12px", fontSize: "14px", textDecoration: "none", gap: "8px", wordBreak: "break-all", textAlign: "center", justifyContent: "center" }}>
              <span>bapnayessha05@gmail.com</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* ── FOOTER BAR ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-wide z-content footer-bar-inner" style={{ padding: "28px 24px" }}>
          {/* Logo */}
          <Image
              src="/logo.png"
              alt="Yessha Logo"
              width={240}
              height={80}
              style={{ objectFit: "contain", height: "80px", width: "auto" }}
            />

          {/* Copyright */}
          <p style={{ fontSize: "12px", color: "var(--text-muted)", textAlign: "center" }}>
            © {new Date().getFullYear()} Yessha Bapna. Built with <span style={{ color: "var(--accent)" }}>♥</span> using Next.js.
          </p>

          {/* Social links */}
          <div style={{ display: "flex", gap: "20px" }}>
            {[
              { label: "GitHub", href: "https://github.com/Yessha-bapna" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/yessha-bapna" },
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: "13px", color: "var(--text-muted)", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--accent)"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--text-muted)"; }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 32px;
          align-items: start;
          max-width: 1000px;
          margin: 0 auto;
        }
        .social-card { transition: transform 0.2s ease, border-color 0.2s ease; }
        .social-card:hover { transform: translateY(-3px); }
        @media (max-width: 800px) {
          .contact-layout { grid-template-columns: 1fr !important; }
          .email-cta-card { padding: 36px 24px !important; }
        }
        @media (max-width: 480px) {
          .email-cta-card { padding: 28px 16px !important; }
          .contact-layout { gap: 20px; }
        }
        .footer-bar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        @media (max-width: 600px) {
          .footer-bar-inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 16px;
          }
        }
      `}</style>
    </footer>
  );
}
