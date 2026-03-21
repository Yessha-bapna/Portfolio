"use client";

import { useEffect, useRef, useState } from "react";

const roles = [
  "AI/ML Engineer",
  "Full-Stack AI Applications",
];

function useTypewriter(words: string[], speed = 80, pause = 2200) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    if (!current) return;
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

const achievements = [
  { icon: "🏆", text: "4× Hackathon Winner" },
  { icon: "🥈", text: "ODOO Hackathon – Top 10 Finalist'25" },
  { icon: "🥈", text: "2nd Prize – WitChar 2026" },
  { icon: "🥇", text: "1st Prize Dance – Solapur Youth Festival'24" },
];

const certifications = [
  { icon: "🎓", issuer: "Google", title: "Generative AI" },
  { icon: "🎓", issuer: "IBM", title: "Machine Learning with Python" },
  { icon: "🎓", issuer: "Pregrad", title: "AI/ML" },
  { icon: "🎓", issuer: "Acmegrade", title: "Machine Learning" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const role = useTypewriter(roles);
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; }[] = [];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        size: Math.random() * 1.4 + 0.4,
        opacity: Math.random() * 0.35 + 0.08,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(156, 213, 255, ${p.opacity})`;
        ctx.fill();
      });
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 110) {
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(156, 213, 255, ${0.055 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div className="grid-bg" />
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }} />

      {/* Central radial glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "700px", height: "700px",
        background: "radial-gradient(circle, rgba(156,213,255,0.06) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Two-column layout */}
      <div
        className="z-content hero-grid"
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 24px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* ── LEFT: Hero content ── */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

          {/* Status badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "7px 18px",
            background: "rgba(156,213,255,0.06)",
            border: "1px solid rgba(156,213,255,0.2)",
            borderRadius: "999px", marginBottom: "28px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
          }}>
            <div className="glow-dot" />
            <span style={{ fontSize: "13px", color: "var(--accent)", fontWeight: 500, letterSpacing: "0.04em" }}>
              Available for work
            </span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(28px, 5vw, 64px)",
            fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em",
            marginBottom: "14px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}>
            <span style={{ color: "var(--text-primary)" }}>Hey!, I am </span>
            <span style={{
              background: "linear-gradient(135deg, #9cd5ff 0%, #60a5fa 50%, #a78bfa 100%)",
              WebkitBackgroundClip: "text", backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 40px rgba(156,213,255,0.45))",
              display: "inline-block",
            }}>
              Yessha
            </span>
          </h1>

          {/* Typewriter */}
          <div style={{
            fontSize: "clamp(15px, 1.8vw, 20px)", fontWeight: 500,
            color: "var(--text-secondary)", marginBottom: "22px",
            height: "30px", display: "flex", alignItems: "center", gap: "8px",
            opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 0.35s",
          }}>
            <span style={{ color: "var(--accent)" }}>›</span>
            <span>{role}</span>
            <span className="typewriter-cursor" />
          </div>

          {/* Description */}
          <p style={{
            fontSize: "clamp(14px, 1.5vw, 17px)", lineHeight: 1.72,
            color: "var(--text-secondary)", maxWidth: "480px", marginBottom: "36px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s",
          }}>
            I build{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>intelligent systems</span>{" "}
            and{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>full-stack AI applications</span>{" "}
            that solve real-world problems. Passionate about AI, machine learning, and scalable solutions.
          </p>

          {/* CTAs */}
          <div style={{
            display: "flex", gap: "14px", flexWrap: "wrap",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.8s ease 0.65s, transform 0.8s ease 0.65s",
          }}>
            <a href="#projects" className="btn-primary" style={{ minWidth: "160px", justifyContent: "center" }}>
              <span>View My Work</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-outline" style={{ minWidth: "160px", justifyContent: "center" }}>
              <span>Get in Touch</span>
            </a>
          </div>
        </div>

        {/* ── RIGHT: Flip Card ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.9s ease 0.5s, transform 0.9s ease 0.5s",
          }}
        >
          {/* Flip container — hover triggers flip via CSS */}
          <div className="flip-container">
            <div className="flip-inner">

              {/* FRONT — Achievements */}
              <div className="flip-face flip-front">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
                  <div className="flip-icon-box">🏆</div>
                  <div>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", fontWeight: 700, color: "var(--text-primary)" }}>
                      Achievements
                    </h3>
                    <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>
                      Tap to see certifications →
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {achievements.map((a, i) => (
                    <div key={i} style={{
                      display: "flex", alignItems: "center", gap: "14px",
                      padding: "14px 18px",
                      background: "rgba(156,213,255,0.04)",
                      border: "1px solid rgba(156,213,255,0.1)",
                      borderRadius: "12px",
                    }}>
                      <span style={{ fontSize: "22px", flexShrink: 0 }}>{a.icon}</span>
                      <span style={{ fontSize: "14px", color: "var(--text-secondary)", fontWeight: 500, lineHeight: 1.4 }}>
                        {a.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BACK — Certifications */}
              <div className="flip-face flip-back">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
                  <div className="flip-icon-box">📜</div>
                  <div>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", fontWeight: 700, color: "var(--text-primary)" }}>
                      Certifications
                    </h3>
                    <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>
                      ← Tap to see achievements
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {certifications.map((c, i) => (
                    <div key={i} style={{
                      display: "flex", alignItems: "center", gap: "14px",
                      padding: "14px 18px",
                      background: "rgba(167,139,250,0.05)",
                      border: "1px solid rgba(167,139,250,0.15)",
                      borderRadius: "12px",
                    }}>
                      <span style={{ fontSize: "22px", flexShrink: 0 }}>{c.icon}</span>
                      <div>
                        <div style={{ fontSize: "13px", color: "var(--text-primary)", fontWeight: 600 }}>{c.title}</div>
                        <div style={{ fontSize: "11px", color: "#a78bfa", fontWeight: 500, marginTop: "2px" }}>{c.issuer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
        opacity: visible ? 0.5 : 0, transition: "opacity 1s ease 1.2s",
      }}>
        <span style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.14em", fontWeight: 600, textTransform: "uppercase" }}>Scroll</span>
        <div style={{
          width: "1px", height: "36px",
          background: "linear-gradient(180deg, rgba(156,213,255,0.6), transparent)",
          animation: "float 2.4s ease-in-out infinite",
        }} />
      </div>

      <style>{`
        .hero-grid {
          align-items: center;
        }

        /* ── Flip Card ── */
        .flip-container {
          perspective: 1200px;
          width: 100%;
        }

        .flip-inner {
          position: relative;
          width: 100%;
          transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
          transform-style: preserve-3d;
        }

        /* Height driven by the front face; back is absolute over it */
        .flip-front {
          position: relative !important;
        }

        .flip-container:hover .flip-inner,
        .flip-container:focus-within .flip-inner {
          transform: rotateY(180deg);
        }

        .flip-face {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(156,213,255,0.13);
          border-radius: 24px;
          padding: 32px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 8px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05);
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }

        .flip-back {
          position: absolute !important;
          inset: 0;
        }

        .flip-face::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(156,213,255,0.4), transparent);
          border-radius: 24px 24px 0 0;
        }

        .flip-back {
          transform: rotateY(180deg);
        }

        .flip-back::before {
          background: linear-gradient(90deg, transparent, rgba(167,139,250,0.4), transparent);
        }

        .flip-icon-box {
          width: 44px;
          height: 44px;
          background: rgba(156,213,255,0.08);
          border: 1px solid rgba(156,213,255,0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            padding: 100px 16px 60px !important;
            gap: 40px !important;
          }
          .hero-grid > div:first-child {
            align-items: center !important;
          }
        }

        @media (max-width: 480px) {
          .hero-grid {
            padding: 88px 14px 48px !important;
            gap: 32px !important;
          }
          .flip-face {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
