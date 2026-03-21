"use client";

const experiences = [
  {
    role: "AI Developer Intern",
    company: "Cybergenix Security Pvt. Ltd.",
    period: "Jul 2025 – Sept 2025",
    type: "Internship",
    bullets: [
      "Engineered AI/ML threat detection pipelines that improved detection accuracy, cutting false-positive rates and accelerating incident response time for production cybersecurity systems.",
      "Delivered high-priority projects ahead of schedule by taking solo ownership of time-sensitive milestones, directly unblocking a team of 4 engineers from deployment delays.",
      "Architected end-to-end ML solutions spanning data ingestion, model training, and deployment — reducing manual security analyst workload on repetitive threat triage tasks.",
    ],
    skills: ["Python", "TensorFlow", "Scikit-learn", "Automation", "Threat Detection"],
  },
  {
    role: "Data Science Intern",
    company: "The Gen Academy",
    period: "Nov 2025 – Present",
    type: "Internship",
    bullets: [
      "Trained and upskilled 300+ participants across live AI/ML workshops, achieving measurably higher engagement through hands-on demos over lecture-only sessions.",
      "Designed and delivered curriculum covering cutting-edge AI trends — including GenAI, RAG, and LLMs — with live coding demos that participants replicated in real-time.",
      "Built practice implementation projects that bridged theory to production-ready use cases, shortening participants' time-to-first-deployment from weeks to days.",
    ],
    skills: ["GenAI", "RAG", "LLMs", "Data Science", "Python"],
  },
];

const skillGroups = [
  {
    label: "Languages",
    icon: "🖥️",
    skills: ["Python", "JavaScript", "HTML / CSS"],
  },
  {
    label: "Frontend / Backend",
    icon: "⚡",
    skills: ["ReactJS", "Node.JS", "Flask", "Django"],
  },
  {
    label: "AI / ML",
    icon: "🤖",
    skills: ["TensorFlow", "Keras", "Scikit-learn", "YOLOv8", "OpenCV", "CNN", "LSTM", "LangChain", "RAG", "GenAI"],
  },
  {
    label: "Data & Tooling",
    icon: "📊",
    skills: ["Pandas", "NumPy", "Matplotlib", "Plotly", "Google Colab"],
  },
  {
    label: "Specializations",
    icon: "🎯",
    skills: ["Computer Vision", "NLP", "Security AI", "Telemedicine AI"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-py" style={{ position: "relative" }}>
      <div className="grid-bg" style={{ opacity: 0.4 }} />
      <div className="container-wide z-content">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-label" style={{ display: "inline-flex", marginBottom: "20px" }}>
            <div className="glow-dot" />
            Career Journey
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
            Experience &amp;{" "}
            <span className="gradient-text">Skills</span>
          </h2>
        </div>

        {/* Two-column grid */}
        <div className="exp-skills-grid">

          {/* ── LEFT: Work Experience ── */}
          <div>
            <h3 className="col-heading">
              <span className="col-icon">💼</span>
              Work Experience
            </h3>

            <div style={{ position: "relative", paddingLeft: "44px" }}>
              <div className="timeline-line" />

              {experiences.map((exp, i) => (
                <div key={i} style={{ position: "relative", marginBottom: "32px" }}>
                  {/* Dot sits on the timeline line, outside the card */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-31px",
                      top: "28px",
                      width: "13px",
                      height: "13px",
                      background: "var(--accent)",
                      borderRadius: "50%",
                      border: "2px solid var(--bg-primary)",
                      boxShadow: "0 0 10px var(--accent-glow)",
                      zIndex: 1,
                    }}
                  />
                  <div className="glass-card" style={{ padding: "24px" }}>

                    {/* Role + badge */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
                      <div>
                        <h4
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "15px",
                            fontWeight: 700,
                            color: "var(--text-primary)",
                            marginBottom: "2px",
                          }}
                        >
                          {exp.role}
                        </h4>
                        <span style={{ fontSize: "13px", color: "var(--accent)", fontWeight: 500 }}>
                          {exp.company}
                        </span>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div className="exp-badge">{exp.type}</div>
                        <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "4px" }}>
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    {/* Bullet points */}
                    <ul style={{ margin: "0 0 14px 0", paddingLeft: "18px" }}>
                      {exp.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          style={{
                            fontSize: "12.5px",
                            color: "var(--text-secondary)",
                            lineHeight: 1.7,
                            marginBottom: "5px",
                          }}
                        >
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Skill tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {exp.skills.map((s) => (
                        <span key={s} className="tag" style={{ fontSize: "11px" }}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Skills & Technologies ── */}
          <div>
            <h3 className="col-heading">
              <span className="col-icon">⚙️</span>
              Skills &amp; Technologies
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {skillGroups.map((group) => (
                <div key={group.label} className="glass-card" style={{ padding: "22px 24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                    <span style={{ fontSize: "16px" }}>{group.icon}</span>
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {group.label}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-pill">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .exp-skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .col-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .col-icon {
          width: 32px;
          height: 32px;
          background: rgba(156,213,255,0.1);
          border: 1px solid rgba(156,213,255,0.2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          flex-shrink: 0;
        }

        .exp-badge {
          display: inline-block;
          padding: 3px 10px;
          background: rgba(156,213,255,0.07);
          border: 1px solid rgba(156,213,255,0.15);
          border-radius: 6px;
          font-size: 11px;
          color: var(--accent);
          font-weight: 600;
        }

        .skill-pill {
          padding: 6px 14px;
          background: rgba(156,213,255,0.06);
          border: 1px solid rgba(156,213,255,0.14);
          border-radius: 20px;
          font-size: 12px;
          color: var(--text-secondary);
          font-weight: 500;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }

        .skill-pill:hover {
          background: rgba(156,213,255,0.14);
          border-color: rgba(156,213,255,0.35);
          color: var(--accent);
        }

        @media (max-width: 860px) {
          .exp-skills-grid {
            grid-template-columns: 1fr !important;
            gap: 48px;
          }
        }

        @media (max-width: 768px) {
          .exp-skills-grid {
            gap: 36px;
          }
          .col-heading {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .exp-skills-grid {
            gap: 28px;
          }
          .skill-pill {
            font-size: 11px;
            padding: 5px 10px;
          }
        }
      `}</style>
    </section>
  );
}
