import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { MapPin, Mail, Sparkles, CheckCircle2, Code2, Cpu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const pillars = [
    {
      icon: Code2,
      title: "Component Architecture",
      description: "Writing modular, reusable React components with clear state boundaries, clean props flow, and minimal re-render overhead."
    },
    {
      icon: Sparkles,
      title: "UI/UX & Precision",
      description: "Translating wireframes into responsive, accessible interfaces with Tailwind CSS, disciplined typography, and micro-interactions."
    },
    {
      icon: Cpu,
      title: "Cloud Integration",
      description: "Connecting interactive user interfaces to cloud databases (Firebase Firestore), authentication flows, and REST endpoints."
    }
  ];

  return (
    <section id="about" className="py-24 relative border-t border-white/[0.03] bg-[#0a0f1d]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-2 mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            01. Profile
          </span>
          <div className="flex items-center gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              About &amp; Engineering Mindset
            </h2>
            <div className="h-px bg-white/10 flex-1 max-w-xs hidden sm:block"></div>
          </div>
        </motion.div>

        {/* Parallelly Aligned Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Profile Photo Card & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col justify-between space-y-4"
          >
            
            {/* Visual Photo Card - Natural Portrait Framing (h-[420px] + object-top) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative group flex-1 flex flex-col"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 blur-md group-hover:opacity-100 transition duration-500 opacity-60"></div>
              
              <div className="relative flex-1 flex flex-col rounded-xl overflow-hidden border border-white/10 bg-slate-900 p-2.5">
                <div className="relative h-[420px] w-full rounded-lg overflow-hidden bg-slate-800">
                  <img
                    src={personalInfo.aboutImage || personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "/assets/kavinisha_image.jpeg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Overlay Tag */}
                  <div className="absolute bottom-3 left-3 right-3 text-xs p-3 rounded-lg bg-slate-900/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold text-xs leading-tight">{personalInfo.name}</p>
                      <p className="text-[10px] text-cyan-400 font-medium leading-tight mt-0.5">Software Developer</p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Details Box */}
            <div className="p-4.5 rounded-xl bg-slate-900/60 border border-white/10 text-xs space-y-3 p-4">
              <div className="flex items-center justify-between text-slate-300 pb-2.5 border-b border-white/5">
                <span className="text-slate-400 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> Location</span>
                <span className="font-semibold text-slate-200">Chennai, India</span>
              </div>
              <div className="flex items-center justify-between text-slate-300 pb-2.5 border-b border-white/5">
                <span className="text-slate-400 flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-cyan-400" /> Focus</span>
                <span className="font-semibold text-slate-200">Full Stack &amp; UI/UX</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400 flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-cyan-400" /> Email</span>
                <a href={`mailto:${personalInfo.email}`} className="text-cyan-400 hover:underline font-medium truncate max-w-[160px]">
                  {personalInfo.email}
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Mindset, Pillars & Commitments (Parallel Balanced Height) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 flex flex-col justify-between space-y-6"
          >
            
            {/* Bio Paragraphs */}
            <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a <strong className="text-white font-semibold">Software Developer &amp; UI/UX Engineer</strong> based in Chennai, India. Over the past 2+ years, I have progressed from building foundational static pages to engineering scalable, component-driven web applications and interactive systems.
              </p>
              <p>
                My approach to software engineering is grounded in <strong className="text-cyan-300 font-medium">clarity, performance, and user empathy</strong>. I believe that good engineering is not just about writing syntax that executes—it is about creating resilient code structures, intuitive navigation flows, and reliable data synchronizations that solve actual user problems.
              </p>
              <p>
                Whether developing a full-featured e-commerce platform with <strong className="text-slate-100 font-medium">React and Firebase</strong>, building interactive visual reservation tools, or creating responsive design systems with <strong className="text-slate-100 font-medium">Tailwind CSS</strong>, I focus on craftsmanship at every layer.
              </p>
            </div>

            {/* Engineering Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="p-5 rounded-xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-white font-semibold text-xs mb-1.5 group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Commitments */}
            <div className="p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-3">
              <p className="text-xs text-cyan-300 font-semibold uppercase tracking-wider">
                What I Bring to an Engineering Team:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Production-ready React &amp; Tailwind code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Strong UI/UX wireframing &amp; prototyping</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Disciplined Git version control workflows</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Rapid learning agility &amp; collaborative spirit</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
