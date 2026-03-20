"use client";

const highlights = [
  { icon: "🧠", label: "Deep Learning & LLMs" },
  { icon: "⚡", label: "Generative AI" },
  { icon: "🌐", label: "Full-Stack AI Apps" },
  { icon: "📊", label: "Data Science & Analytics" },
  { icon: "🚀", label: "MLOps & Deployment" },
  { icon: "🔬", label: "AI Research & Experimentation" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        minHeight: "100vh",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container-wide z-content" style={{ width: "100%", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
            width: "100%",
          }}
          className="about-grid"
        >
          {/* LEFT: Visual card */}
          <div>
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(156,213,255,0.15)",
                borderRadius: "24px",
                padding: "28px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* BG glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-60px",
                  right: "-60px",
                  width: "240px",
                  height: "240px",
                  background:
                    "radial-gradient(circle, rgba(156,213,255,0.07) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* Code snippet */}
              <div
                style={{
                  background: "rgba(0,0,0,0.4)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "12px",
                  padding: "14px 18px",
                  fontFamily: "monospace",
                  fontSize: "12px",
                  lineHeight: 1.65,
                  marginBottom: "14px",
                }}
              >
                <div style={{ color: "var(--text-muted)", marginBottom: "6px" }}>
                  {"// about_yessha.py"}
                </div>
                <div>
                  <span style={{ color: "#c792ea" }}>class</span>
                  <span style={{ color: "#82aaff" }}> Yessha</span>
                  <span style={{ color: "var(--text-secondary)" }}>:</span>
                </div>
                <div style={{ paddingLeft: "18px" }}>
                  <span style={{ color: "#c792ea" }}>def</span>
                  <span style={{ color: "#82aaff" }}> __init__</span>
                  <span style={{ color: "var(--text-secondary)" }}>(self):</span>
                </div>
                <div style={{ paddingLeft: "36px" }}>
                  <span style={{ color: "#9cd5ff" }}>self</span>
                  <span style={{ color: "var(--text-secondary)" }}>.role</span>
                  <span style={{ color: "#c3e88d" }}> = </span>
                  <span style={{ color: "#c3e88d" }}>"AI/ML Engineer"</span>
                </div>
                <div style={{ paddingLeft: "36px" }}>
                  <span style={{ color: "#9cd5ff" }}>self</span>
                  <span style={{ color: "var(--text-secondary)" }}>.passion</span>
                  <span style={{ color: "#c3e88d" }}> = </span>
                  <span style={{ color: "#c3e88d" }}>"Building the future"</span>
                </div>
                <div style={{ paddingLeft: "36px" }}>
                  <span style={{ color: "#9cd5ff" }}>self</span>
                  <span style={{ color: "var(--text-secondary)" }}>.status</span>
                  <span style={{ color: "#c3e88d" }}> = </span>
                  <span style={{ color: "#c3e88d" }}>"open_to_work"</span>
                </div>
              </div>

              {/* Highlights grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "8px",
                }}
              >
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px 10px",
                      background: "rgba(156,213,255,0.04)",
                      border: "1px solid rgba(156,213,255,0.1)",
                      borderRadius: "8px",
                      transition: "all 0.2s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(156,213,255,0.08)";
                      e.currentTarget.style.borderColor = "rgba(156,213,255,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(156,213,255,0.04)";
                      e.currentTarget.style.borderColor = "rgba(156,213,255,0.1)";
                    }}
                  >
                    <span style={{ fontSize: "16px" }}>{h.icon}</span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "var(--text-secondary)",
                        fontWeight: 500,
                        lineHeight: 1.3,
                      }}
                    >
                      {h.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Text */}
          <div>
            <div
              className="section-label"
              style={{ marginBottom: "12px" }}
            >
              <div className="glow-dot" />
              About Me
            </div>

            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: "14px",
                lineHeight: 1.18,
              }}
            >
              Turning data into{" "}
              <span className="gradient-text">intelligence</span>,{" "}
              ideas into{" "}
              <span style={{ color: "var(--text-primary)" }}>products</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.75,
                  color: "var(--text-secondary)",
                }}
              >
                I'm{" "}
                <strong style={{ color: "var(--text-primary)" }}>Yessha</strong>, an
                AI/ML Engineer passionate about building intelligent systems that create
                real-world impact-at the intersection of machine learning, software
                engineering, and full-stack development.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.75,
                  color: "var(--text-secondary)",
                }}
              >
                My journey began with neural networks and NLP, leading me to build
                production-grade AI applications. When not shipping features, I'm reading
                AI research or experimenting with new architectures.
              </p>
            </div>

            {/* Resume & CV buttons */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "18px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="/Yessha_Resume.pdf"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Resume</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
              <a
                href="/Yessha_CoverLetter_General.pdf"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Cover Letter</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
