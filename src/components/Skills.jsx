import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Layout, Server, Database, Wrench, Cpu, Search, Sparkles, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Wrench: Wrench,
  Cpu: Cpu,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = ['All', ...skillsData.map((c) => c.category)];

  const filteredData = skillsData
    .map((cat) => {
      const matchesCategory = activeCategory === 'All' || cat.category === activeCategory;
      if (!matchesCategory) return null;

      const matchedSkills = cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.role.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (matchedSkills.length === 0) return null;

      return {
        ...cat,
        skills: matchedSkills,
      };
    })
    .filter(Boolean);

  return (
    <section id="skills" className="py-24 relative border-t border-white/[0.03] bg-[#0a0f1d]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              02. Technical Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Technical Stack &amp; Workflow
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
              How technologies connect into my engineering workflow — from state management to database synchronization.
            </p>
          </div>

          {/* Search Filter */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack or workflow..."
              className="w-full bg-slate-900/90 border border-white/10 rounded-[6px] pl-10 pr-4 py-2.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>
        </motion.div>

        {/* Category Filter Pills - Shared Layout Active Tab */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-white/5 pb-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-3.5 py-1.5 rounded-[6px] text-xs font-medium transition-colors z-10 ${
                  isActive ? 'text-cyan-300' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-[6px] bg-cyan-500/20 border border-cyan-500/40 shadow-sm -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Groups with Layout Transitions */}
        <motion.div layout className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredData.map((group) => {
              const Icon = iconMap[group.icon] || Layers;
              return (
                <motion.div
                  layout
                  key={group.category}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="space-y-4"
                >
                  
                  {/* Group Title & Summary */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
                    <div className="flex items-center gap-2.5 text-white font-semibold text-sm tracking-wide">
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{group.category}</span>
                    </div>
                    <span className="text-xs text-slate-400">
                      {group.description}
                    </span>
                  </div>

                  {/* Skills Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {group.skills.map((skill) => (
                      <motion.div
                        layout
                        key={skill.id}
                        onMouseEnter={() => setHoveredSkill(skill.id)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="p-5 rounded-xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-colors flex flex-col justify-between space-y-4 group shadow-md"
                      >
                        {/* Top info */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </h4>
                            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-800 text-slate-300 border border-white/5">
                              {skill.role}
                            </span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {skill.desc}
                          </p>
                        </div>

                        {/* Workflow Pipeline */}
                        <div className="pt-3 border-t border-white/5 space-y-2">
                          <div className="flex items-center gap-1.5 text-[11px] text-cyan-400 font-medium">
                            <Sparkles className="w-3 h-3 flex-shrink-0" />
                            <span>Engineering Workflow:</span>
                          </div>
                          <div className="px-3 py-1.5 rounded-md bg-slate-950/60 border border-white/5 text-xs text-slate-300 flex items-center gap-2">
                            <span className="text-slate-300 font-medium truncate">{skill.pipeline}</span>
                          </div>

                          {/* Projects using this */}
                          {skill.projects && (
                            <div className="flex items-center gap-2 pt-1">
                              <span className="text-[10px] text-slate-500 uppercase tracking-wider">Applied in:</span>
                              <div className="flex flex-wrap gap-1">
                                {skill.projects.map((proj, pIdx) => (
                                  <span
                                    key={pIdx}
                                    className="text-[10px] px-2 py-0.5 rounded-md bg-cyan-950/40 text-cyan-400 border border-cyan-500/20"
                                  >
                                    {proj}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                      </motion.div>
                    ))}
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredData.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-12 text-center rounded-xl bg-slate-900/40 border border-white/5 text-slate-400 text-sm"
            >
              No matching technologies or workflows found for "{searchQuery}"
            </motion.div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
