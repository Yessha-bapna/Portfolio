import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      {/* Global aurora background */}
      <div className="aurora-bg" aria-hidden="true" />

      <Navbar />

      <main>
        {/* 1. Hero */}
        <Hero />

        <div className="section-divider" />

        {/* 2. About Me */}
        <About />

        <div className="section-divider" />

        {/* 3. Experience */}
        <Experience />

        <div className="section-divider" />

        {/* 4. Projects */}
        <Projects />

        <div className="section-divider" />

      <Contact />
    </main>
  </>
  );
}
