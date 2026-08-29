import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Search, Code2, Layers, Briefcase, Mail, Github, Linkedin, ExternalLink, X, Command, Cpu } from 'lucide-react';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const actions = [
    {
      id: 'sec-hero',
      title: 'Jump to Home / Hero',
      category: 'Navigation',
      icon: Code2,
      action: () => {
        window.location.href = '#hero';
        setIsOpen(false);
      }
    },
    {
      id: 'sec-about',
      title: 'Jump to About & Mindset',
      category: 'Navigation',
      icon: Code2,
      action: () => {
        window.location.href = '#about';
        setIsOpen(false);
      }
    },
    {
      id: 'sec-skills',
      title: 'Jump to Technical Skills & Workflow',
      category: 'Navigation',
      icon: Layers,
      action: () => {
        window.location.href = '#skills';
        setIsOpen(false);
      }
    },
    {
      id: 'sec-projects',
      title: 'Jump to Projects & Case Studies',
      category: 'Navigation',
      icon: ExternalLink,
      action: () => {
        window.location.href = '#projects';
        setIsOpen(false);
      }
    },
    {
      id: 'sec-architecture',
      title: 'Jump to System Architecture',
      category: 'Navigation',
      icon: Cpu,
      action: () => {
        window.location.href = '#architecture';
        setIsOpen(false);
      }
    },
    {
      id: 'sec-experience',
      title: 'Jump to Experience & Journey',
      category: 'Navigation',
      icon: Briefcase,
      action: () => {
        window.location.href = '#experience';
        setIsOpen(false);
      }
    },
    {
      id: 'sec-contact',
      title: 'Jump to Contact',
      category: 'Navigation',
      icon: Mail,
      action: () => {
        window.location.href = '#contact';
        setIsOpen(false);
      }
    },
    {
      id: 'act-github',
      title: 'Open GitHub Profile',
      category: 'External',
      icon: Github,
      action: () => {
        window.open(personalInfo.links.github, '_blank');
        setIsOpen(false);
      }
    },
    {
      id: 'act-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'External',
      icon: Linkedin,
      action: () => {
        window.open(personalInfo.links.linkedin, '_blank');
        setIsOpen(false);
      }
    },
    {
      id: 'act-ecommerce',
      title: 'Launch MagicalDews Live E-Commerce',
      category: 'Project',
      icon: ExternalLink,
      action: () => {
        window.open('https://magicaldews.netlify.app/', '_blank');
        setIsOpen(false);
      }
    },
    {
      id: 'act-email',
      title: 'Copy Email Address',
      category: 'Action',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(personalInfo.email);
        alert('Email copied to clipboard: ' + personalInfo.email);
        setIsOpen(false);
      }
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filtered = actions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-white/10 shadow-xl backdrop-blur-md text-xs font-semibold transition-all group"
        aria-label="Open Command Palette"
      >
        <Command className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
        <span>Cmd+K</span>
      </button>

      {/* Modal Backdrop & Palette */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-xl rounded-xl bg-[#0d1322] border border-white/15 shadow-2xl shadow-cyan-950/40 overflow-hidden text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-[#090d16]/90">
              <Search className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or jump to section..."
                className="w-full bg-transparent border-none outline-none text-slate-100 placeholder:text-slate-500 text-xs"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-slate-500 hover:text-slate-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filtered.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left hover:bg-cyan-500/10 hover:text-cyan-300 text-slate-300 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-slate-500 group-hover:text-cyan-400" />
                      <span className="font-medium">{item.title}</span>
                    </div>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-400 group-hover:bg-cyan-950/80 group-hover:text-cyan-400">
                      {item.category}
                    </span>
                  </button>
                );
              })}

              {filtered.length === 0 && (
                <div className="py-8 text-center text-slate-500 text-xs">
                  No matching commands for "{query}"
                </div>
              )}
            </div>

            {/* Footer Tip */}
            <div className="px-4 py-2 bg-[#070b14] border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
              <span>Navigation &amp; Actions</span>
              <span>ESC to close</span>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
