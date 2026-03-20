"use client";

import { useState } from "react";

const projects = [
  {
    title: "CureConnect – Rural Telemedicine Platform",
    description:
      "Built a low-bandwidth telemedicine app targeting rural healthcare gaps, integrating CNN/LSTM models for ECG and X-ray analysis with >90% diagnostic classification accuracy. Shipped multilingual support, end-to-end encrypted chat, IVR emergency routing, and real-time remote diagnostics in a single full-stack platform.",
    tags: ["Python", "CNN/LSTM", "MERN", "Encrypted Chat", "IVR"],
    category: "AI/ML",
    gradient: "linear-gradient(135deg, #9cd5ff22, #059669 22)",
    borderGlow: "rgba(156,213,255,0.2)",
    emoji: "🏥",
    metrics: [">90% Diagnostic Accuracy", "Multilingual Support", "IVR Emergency Routing"],
    links: { github: "https://github.com/Yessha-bapna/CureConnect-Display", live: null },
  },
  {
    title: "Player Re-identification System",
    description:
      "Achieved persistent player identity tracking across video frames at real-time speed by combining YOLOv8 object detection with DeepSORT re-identification, eliminating ID-switch errors that plague single-model approaches. Delivers production-quality sports analytics capable of monitoring multiple players across full-match footage.",
    tags: ["YOLOv8", "DeepSORT", "OpenCV", "Computer Vision", "Python"],
    category: "Computer Vision",
    gradient: "linear-gradient(135deg, #60a5fa22, #9cd5ff22)",
    borderGlow: "rgba(96,165,250,0.2)",
    emoji: "⚽",
    metrics: ["Real-time Speed", "Multi-player Tracking", "Full-match Coverage"],
    links: { github: "https://github.com/Yessha-bapna/PlayerReID", live: null },
  },
  {
    title: "AI Criminal Detection System",
    description:
      "Built a real-time criminal surveillance system that automatically extracts, cross-references, and matches faces from CCTV feeds against criminal databases — enabling proactive threat identification. Integrated automated activity logging and behavioural anomaly flagging, reducing manual CCTV review effort and providing timestamped audit trails for law enforcement use.",
    tags: ["Python", "Flask", "OpenCV", "face_recognition", "MediaPipe", "Streamlit"],
    category: "Security",
    gradient: "linear-gradient(135deg, #ef444422, #7c3aed22)",
    borderGlow: "rgba(239,68,68,0.2)",
    emoji: "🔍",
    metrics: ["Real-time Face Matching", "Anomaly Flagging", "Audit Trail Logging"],
    links: { github: "https://github.com/Yessha-bapna/AI-Vision", live: null },
  },
];

const categories = ["All", "AI/ML", "Computer Vision", "Security"];


export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-py" style={{ position: "relative" }}>
      <div className="container-wide z-content">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-label" style={{ display: "inline-flex", marginBottom: "20px" }}>
            <div className="glow-dot" />
            Selected Work
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(36px, 5vw, 54px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "16px",
            }}
          >
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "var(--text-secondary)",
              maxWidth: "520px",
              margin: "0 auto 36px",
            }}
          >
            A selection of production-ready projects spanning AI systems, computer vision, and full-stack applications.
          </p>

          {/* Filter tabs */}
          <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "10px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: active === cat
                    ? "1px solid rgba(156,213,255,0.3)"
                    : "1px solid var(--border-subtle)",
                  background: active === cat
                    ? "rgba(156,213,255,0.12)"
                    : "transparent",
                  color: active === cat ? "var(--accent)" : "var(--text-secondary)",
                  transition: "all 0.2s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {filtered.map((project) => (
            <div key={project.title} className="glass-card project-card" style={{ padding: "28px" }}>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: project.gradient,
                      border: `1px solid ${project.borderGlow}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      flexShrink: 0,
                    }}
                  >
                    {project.emoji}
                  </div>
                  <div>
                    <span className="tag" style={{ fontSize: "10px", marginBottom: "6px", display: "inline-block" }}>
                      {project.category}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "20px" }}>
                {project.description}
              </p>

              {/* Metrics */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                {project.metrics.map((m) => (
                  <div
                    key={m}
                    style={{
                      padding: "4px 10px",
                      background: "rgba(156,213,255,0.05)",
                      border: "1px solid rgba(156,213,255,0.1)",
                      borderRadius: "6px",
                      fontSize: "11px",
                      color: "var(--accent)",
                      fontWeight: 500,
                    }}
                  >
                    ✓ {m}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "3px 8px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "5px",
                      fontSize: "11px",
                      color: "var(--text-secondary)",
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
                <a
                  href={project.links.github}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "10px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "10px",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(156,213,255,0.25)";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  ⬡ GitHub
                </a>
                {project.links.live && (
                  <a
                    href={project.links.live}
                    className="btn-primary"
                    style={{ flex: 1, padding: "10px", borderRadius: "10px", fontSize: "13px", justifyContent: "center" }}
                  >
                    <span>Live Demo ↗</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div style={{ textAlign: "center", marginTop: "52px" }}>
          <a
            href="https://github.com/Yessha-bapna"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <span>View All on GitHub ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
