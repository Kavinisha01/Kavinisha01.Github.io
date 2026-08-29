import React from 'react';
import { personalInfo } from '../data/portfolioData';
import SystemArchitectureVisual from './SystemArchitectureVisual';
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../motion/motionTokens';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-4.5rem)] flex items-center pt-28 lg:pt-32 pb-14 overflow-hidden">
      
      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[320px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[320px] h-[320px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Personal Introduction & Primary Actions */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            
            {/* Status Pill */}
            {/* <motion.div variants={fadeInUp} className="inline-block">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-slate-900/90 border border-cyan-500/30 text-xs shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-slate-300 font-medium tracking-wide">
                  {personalInfo.availability}
                </span>
              </div>
            </motion.div> */}

            {/* Headline Hierarchy */}
            <motion.div variants={fadeInUp} className="space-y-2.5">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.08]">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-300">
                Software Developer &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">UI/UX Engineer</span>
              </h2>
            </motion.div>

            {/* Positioning Statement */}
            <motion.p
              variants={fadeInUp}
              className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal"
            >
              Engineering modern, component-driven web applications with <span className="text-white font-medium">React</span>, <span className="text-white font-medium">JavaScript</span>, and <span className="text-white font-medium">cloud backends</span>. Focused on clean architecture, responsive precision, and intuitive digital experiences.
            </motion.p>

            {/* Actions */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 pt-1">
              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-shadow shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[6px] bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-white/10 hover:border-cyan-500/40 text-xs font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>Get in Touch</span>
              </motion.a>

              <div className="flex items-center gap-2 pl-1">
                <motion.a
                  whileHover={{ scale: 1.06, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-white/10 rounded-[6px] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.06, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-slate-400 hover:text-cyan-400 bg-slate-900/80 hover:bg-slate-800 border border-white/10 rounded-[6px] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Interactive Architecture Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 w-full"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500/15 to-indigo-500/15 blur-xl opacity-60"></div>
              <div className="relative">
                <SystemArchitectureVisual />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
