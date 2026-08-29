import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, AlertCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      
      {/* Modal Container with Spatial Spring Zoom */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 12 }}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#0d1322] border border-white/15 shadow-2xl shadow-cyan-950/40 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#090d16]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {project.category}
            </span>
            <h3 className="text-sm font-bold text-white truncate max-w-sm sm:max-w-md">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-[6px] text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Main Image */}
          <div className="relative rounded-lg overflow-hidden border border-white/10 aspect-video bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "/assets/home-bg-img.png";
              }}
            />
          </div>

          {/* Tagline */}
          <p className="text-base text-slate-100 font-medium leading-relaxed">
            {project.tagline}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md text-xs font-medium bg-slate-800 text-cyan-300 border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-lg bg-slate-900/60 border border-white/5 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400 uppercase tracking-wide">
                <AlertCircle className="w-4 h-4" />
                <span>The Challenge / Problem</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-lg bg-slate-900/60 border border-white/5 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wide">
                <Sparkles className="w-4 h-4" />
                <span>Engineering Solution</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Notes */}
          <div className="p-5 rounded-lg bg-cyan-950/20 border border-cyan-500/20 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300 uppercase tracking-wide">
              <Layers className="w-4 h-4" />
              <span>System &amp; Architecture Notes</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">
              Key Technical Deliverables:
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            {project.liveUrl && (
              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.96 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold shadow-md shadow-cyan-500/20 transition-all"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}

            {project.githubUrl && (
              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.96 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-[6px] bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 text-xs font-medium transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </motion.a>
            )}
          </div>

        </div>

      </motion.div>
    </motion.div>
  );
}
