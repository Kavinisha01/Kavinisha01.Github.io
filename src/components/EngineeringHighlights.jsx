import React from 'react';
import { engineeringCapabilities } from '../data/portfolioData';
import { Layers, Smartphone, Network, Zap, Figma, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Layers: Layers,
  Smartphone: Smartphone,
  Network: Network,
  Zap: Zap,
  Figma: Figma,
  ShieldCheck: ShieldCheck,
};

export default function EngineeringHighlights() {
  return (
    <section id="architecture" className="py-24 relative border-t border-white/[0.03] bg-[#0a0f1d]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              04. System Thinking
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Engineering Capabilities &amp; Architecture
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
              How I solve technical problems across the stack — from component decoupling and state flows to responsive design systems and cloud integrations.
            </p>
          </div>
        </motion.div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringCapabilities.map((item, idx) => {
            const Icon = iconMap[item.icon] || Layers;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-colors group flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Sub-points */}
                <div className="pt-4 border-t border-white/5 space-y-2 text-xs text-slate-400">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Architectural Quality Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 p-6 sm:p-7 rounded-xl bg-slate-950/80 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1.5">
            <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wide">
              Engineering Quality Standard
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Every project is constructed with mobile-first responsiveness, zero horizontal overflow, semantic HTML for accessibility, and clean component isolation for long-term maintainability.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            href="#projects"
            className="whitespace-nowrap px-4 py-2.5 rounded-[6px] bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-colors"
          >
            Explore Projects →
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
