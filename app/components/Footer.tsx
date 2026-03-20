"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "48px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(156,213,255,0.3), transparent)",
        }}
      />
      <div
        className="container-wide"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #9cd5ff, #4fa8e8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "14px",
              color: "#050810",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Y
          </div>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              color: "var(--text-primary)",
            }}
          >
            Yessha<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </div>

        <div style={{ fontSize: "13px", color: "var(--text-muted)", textAlign: "center" }}>
          Built with{" "}
          <span style={{ color: "var(--accent)" }}>♥</span>
          {" "}using Next.js & passion for great design.
          <br />
          © {new Date().getFullYear()} Yessha. All rights reserved.
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          {[
            { label: "GitHub", href: "https://github.com" },
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "Twitter", href: "https://twitter.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "13px",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s ease",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--accent)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--text-muted)"; }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
