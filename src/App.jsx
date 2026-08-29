import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EngineeringHighlights from './components/EngineeringHighlights';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import GlobalScrollProgress from './components/GlobalScrollProgress';
import AmbientBackground from './components/AmbientBackground';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Global Scroll Progress Indicator */}
      <GlobalScrollProgress />

      {/* Pointer-Reactive Ambient Light */}
      <AmbientBackground />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EngineeringHighlights />
        <Experience />
        <Contact />
      </main>

      {/* Developer Footer */}
      <Footer />

      {/* Interactive Command Palette (Cmd + K) */}
      <CommandPalette />

    </div>
  );
}
