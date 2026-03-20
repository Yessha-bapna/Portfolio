# Yessha Bapna — Personal Portfolio

> AI/ML Engineer · Full-Stack AI Applications · Data Science

A modern, dark-themed personal portfolio built with **Next.js 16**, showcasing projects, internships, skills, and contact information.

🔗 **Live:** [yessha-portfolio.vercel.app](https://yessha-portfolio.vercel.app)
📧 **Contact:** bapnayessha05@gmail.com
🐙 **GitHub:** [github.com/Yessha-bapna](https://github.com/Yessha-bapna)
💼 **LinkedIn:** [linkedin.com/in/yessha-bapna](https://www.linkedin.com/in/yessha-bapna)

---

## ✨ Features

- **Hero Section** — Animated particle canvas, typewriter role, two-column layout with a 3D flip card showing Achievements & Certifications
- **About Me** — Code snippet card, skill highlights, Resume & Cover Letter PDF links
- **Experience** — Two-column layout: internship timeline (left) + skills & technologies (right)
- **Projects** — Filterable project cards with real GitHub links
- **Contact / Footer** — Email CTA, location, socials (LinkedIn + GitHub), merged footer

---

## 🗂️ Project Structure

```
yessha-portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx       # Fixed navbar with logo + active section tracking
│   │   ├── Hero.tsx         # Landing section with flip card
│   │   ├── About.tsx        # About me + resume downloads
│   │   ├── Experience.tsx   # Internships + skills grid
│   │   ├── Projects.tsx     # Filterable project cards
│   │   └── Contact.tsx      # Contact + footer (merged)
│   ├── globals.css          # Design system, animations, utility classes
│   ├── layout.tsx           # Root layout + SEO metadata
│   └── page.tsx             # Page assembly
└── public/
    ├── logo.png
    ├── Yessha_Resume.pdf
    └── Yessha_CoverLetter_General.pdf
```

---

## 🧑‍💻 Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Vanilla CSS (design tokens, glassmorphism) |
| Fonts | Space Grotesk, Inter (Google Fonts) |
| Animations | CSS keyframes, Canvas particle system |
| Deployment | Vercel |

---

## 🚀 Running Locally

```bash
# Clone the repo
git clone https://github.com/Yessha-bapna/yessha-portfolio.git
cd yessha-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📄 PDF Assets

Place the following files in the `/public` folder for resume/cover letter links to work:

| File | Purpose |
|---|---|
| `Yessha_Resume.pdf` | Resume (opens in new tab from About & Hero) |
| `Yessha_CoverLetter_General.pdf` | Cover letter (opens in new tab from About) |

---

## 📦 Deployment

The easiest way to deploy is via **Vercel**:

1. Push your code to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js and deploys instantly

---

© 2026 Yessha Bapna. Built with ♥ using Next.js.
