import React from 'react';
import { experienceTimeline } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-white/[0.03] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              05. Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Experience &amp; Growth Journey
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
              A chronological progression of technical engineering focus, retail operations leadership, and educational milestones.
            </p>
          </div>
        </motion.div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-800 ml-3 sm:ml-6 space-y-10">
          {experienceTimeline.map((item, idx) => {
            const isEducation = item.type === 'Education';
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-6 sm:pl-8 group"
              >
                
                {/* Timeline Dot with Subtle Pulse on First */}
                <div className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 transition-colors ${
                  idx === 0
                    ? 'bg-cyan-500 border-cyan-300 shadow-md shadow-cyan-500/50'
                    : 'bg-slate-900 border-slate-600 group-hover:border-cyan-400'
                }`} />

                {/* Timeline Card */}
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="p-6 sm:p-7 rounded-xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 transition-colors space-y-4"
                >
                  
                  {/* Top Bar: Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        {isEducation ? (
                          <GraduationCap className="w-5 h-5 text-cyan-400" />
                        ) : (
                          <Briefcase className="w-5 h-5 text-cyan-400" />
                        )}
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.role}
                        </h3>
                      </div>
                      <p className="text-xs text-cyan-400 font-semibold mt-1">
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet achievements */}
                  <div className="space-y-2 pt-1">
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech / Skills Used */}
                  <div className="pt-3.5 border-t border-white/5 flex flex-wrap gap-1.5">
                    {item.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-800 text-slate-400 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </motion.div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
