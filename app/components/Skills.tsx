"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    icon: "🧠",
    title: "AI & Machine Learning",
    skills: [
      { name: "PyTorch / TensorFlow", level: 90 },
      { name: "Scikit-learn", level: 88 },
      { name: "LLMs & Prompt Engineering", level: 85 },
      { name: "Computer Vision (OpenCV)", level: 80 },
      { name: "NLP & Transformers", level: 83 },
    ],
  },
  {
    icon: "⚙️",
    title: "Full-Stack Development",
    skills: [
      { name: "Python / FastAPI", level: 92 },
      { name: "React / Next.js", level: 85 },
      { name: "TypeScript / JavaScript", level: 82 },
      { name: "REST APIs & GraphQL", level: 86 },
      { name: "PostgreSQL / MongoDB", level: 80 },
    ],
  },
  {
    icon: "📊",
    title: "Data Science",
    skills: [
      { name: "Pandas / NumPy", level: 90 },
      { name: "Matplotlib / Plotly", level: 85 },
      { name: "Data Cleaning & EDA", level: 88 },
      { name: "Feature Engineering", level: 82 },
      { name: "Google Colab / Jupyter", level: 92 },
    ],
  },
  {
    icon: "☁️",
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker / Kubernetes", level: 78 },
      { name: "AWS / GCP", level: 74 },
      { name: "CI/CD Pipelines", level: 76 },
      { name: "Linux / Shell Scripting", level: 85 },
      { name: "Git & GitHub Actions", level: 90 },
    ],
  },
];

const techStack = [
  "Python", "PyTorch", "TensorFlow", "Scikit-learn", "HuggingFace",
  "LangChain", "OpenAI API", "FastAPI", "Flask", "React",
  "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB",
  "Redis", "Docker", "Kubernetes", "AWS", "GCP",
  "Linux", "Git", "Jupyter", "Pandas", "NumPy",
  "Matplotlib", "OpenCV", "NLTK", "Transformers", "Ollama",
];

function SkillBar({ name, level, animate }: { name: string; level: number; animate: boolean }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontSize: "13px", color: "var(--text-secondary)", fontWeight: 500 }}>
          {name}
        </span>
        <span style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 600 }}>
          {level}%
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-py" style={{ position: "relative" }}>
      <div className="grid-bg" style={{ opacity: 0.5 }} />
      <div className="container-wide z-content" ref={ref}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="section-label" style={{ marginBottom: "20px", display: "inline-flex" }}>
            <div className="glow-dot" />
            Technical Expertise
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
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p style={{ fontSize: "17px", color: "var(--text-secondary)", maxWidth: "520px", margin: "0 auto" }}>
            A curated toolkit built through years of hands-on projects, research, and continuous learning.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "64px",
          }}
        >
          {skillCategories.map((cat) => (
            <div key={cat.title} className="glass-card" style={{ padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(156,213,255,0.08)",
                    border: "1px solid rgba(156,213,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  {cat.title}
                </h3>
              </div>
              {cat.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} animate={animate} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech Stack marquee */}
        <div>
          <p
            style={{
              textAlign: "center",
              fontSize: "13px",
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
              fontWeight: 600,
              marginBottom: "28px",
              textTransform: "uppercase",
            }}
          >
            Full Tech Stack
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {techStack.map((tech) => (
              <span key={tech} className="skill-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
