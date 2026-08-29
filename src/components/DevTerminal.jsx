import React, { useState, useRef, useEffect } from 'react';
import { terminalCommands, personalInfo } from '../data/portfolioData';
import { Terminal as TerminalIcon, FileCode, GitCommit, CornerDownLeft, Sparkles } from 'lucide-react';

export default function DevTerminal() {
  const [activeTab, setActiveTab] = useState('cli');
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Initializing developer environment v2.4.0...' },
    { type: 'system', text: 'Loaded profile: Kavinisha Kannan [Full Stack & UI/UX Engineer]' },
    { type: 'system', text: 'Type "help" or click a command below to explore.' },
  ]);
  const terminalEndRef = useRef(null);

  const quickCommands = ['help', 'skills', 'projects', 'contact', 'stack', 'clear'];

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const output = terminalCommands[trimmed] || `Command not found: "${trimmed}". Type "help" to see available commands.`;
    
    setHistory((prev) => [
      ...prev,
      { type: 'user', text: `$ ${cmd}` },
      { type: 'output', text: output }
    ]);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  useEffect(() => {
    if (activeTab === 'cli') {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, activeTab]);

  return (
    <div className="w-full rounded-xl bg-[#0b1120] border border-white/10 shadow-2xl shadow-cyan-950/20 overflow-hidden font-mono text-xs">
      
      {/* Terminal Titlebar & Tabs */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#070b14] border-b border-white/10 select-none">
        
        {/* Window Action Dots */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/40"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/40"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40"></div>
          <span className="hidden sm:inline-block ml-2 text-[11px] text-slate-400 font-mono">
            kavinisha@dev-env: ~
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-white/5">
          <button
            onClick={() => setActiveTab('cli')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] transition-colors ${
              activeTab === 'cli'
                ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <TerminalIcon className="w-3 h-3" />
            <span>cli.sh</span>
          </button>

          <button
            onClick={() => setActiveTab('json')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] transition-colors ${
              activeTab === 'json'
                ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileCode className="w-3 h-3" />
            <span>profile.json</span>
          </button>

          <button
            onClick={() => setActiveTab('git')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] transition-colors ${
              activeTab === 'git'
                ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <GitCommit className="w-3 h-3" />
            <span>git-log</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Interactive CLI */}
      {activeTab === 'cli' && (
        <div className="p-4 sm:p-5 flex flex-col h-[320px] sm:h-[350px]">
          
          {/* Output area */}
          <div className="flex-1 overflow-y-auto space-y-2 pr-1 select-text">
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'system' && (
                  <p className="text-slate-500 flex items-center gap-1.5">
                    <span className="text-cyan-500">ℹ</span> {item.text}
                  </p>
                )}
                {item.type === 'user' && (
                  <p className="text-emerald-400 font-semibold flex items-center gap-1">
                    {item.text}
                  </p>
                )}
                {item.type === 'output' && (
                  <pre className="text-slate-300 whitespace-pre-wrap font-mono pl-3 border-l border-cyan-500/30 py-1 text-[11px] sm:text-xs">
                    {item.text}
                  </pre>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Quick Command Suggestions */}
          <div className="pt-2 pb-2 flex flex-wrap items-center gap-1.5 border-t border-white/5 mt-2">
            <span className="text-[10px] text-slate-500 flex items-center gap-1 mr-1">
              <Sparkles className="w-2.5 h-2.5 text-cyan-400" /> quick:
            </span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/30 text-[10px] transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Input line */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
            <span className="text-cyan-400 font-bold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type a command (e.g. skills, projects)..."
              className="flex-1 bg-transparent border-none outline-none text-slate-200 placeholder:text-slate-600 text-xs font-mono"
            />
            <button
              type="submit"
              className="p-1 rounded bg-slate-800 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400"
              aria-label="Submit command"
            >
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </form>
        </div>
      )}

      {/* Tab 2: profile.json */}
      {activeTab === 'json' && (
        <div className="p-4 sm:p-5 h-[320px] sm:h-[350px] overflow-y-auto font-mono text-[11px] sm:text-xs leading-relaxed text-slate-300">
          <pre className="text-slate-300">
            {`{
  "developer": {
    "name": "${personalInfo.name}",
    "role": "${personalInfo.role}",
    "location": "${personalInfo.location}",
    "status": "${personalInfo.status}",
    "stack": [
      "React",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Firebase",
      "Node.js",
      "SQL",
      "Git"
    ],
    "philosophy": "Bridge technical architecture with user empathy.",
    "links": {
      "github": "https://github.com/Kavinisha01",
      "portfolio": "https://kavinisha01.github.io/"
    }
  }
}`}
          </pre>
        </div>
      )}

      {/* Tab 3: git-log */}
      {activeTab === 'git' && (
        <div className="p-4 sm:p-5 h-[320px] sm:h-[350px] overflow-y-auto space-y-3 font-mono text-[11px] sm:text-xs">
          <div className="border-l-2 border-cyan-500/40 pl-3">
            <p className="text-cyan-400 font-semibold">commit 8a1f49e (HEAD -&gt; main)</p>
            <p className="text-slate-400 text-[10px]">Author: Kavinisha Kannan &lt;kavinisha283@gmail.com&gt;</p>
            <p className="text-slate-200 mt-1">feat: Complete portfolio v2.0 modernization with React + Vite + Tailwind</p>
          </div>
          <div className="border-l-2 border-emerald-500/40 pl-3">
            <p className="text-emerald-400 font-semibold">commit c43d102</p>
            <p className="text-slate-400 text-[10px]">Author: Kavinisha Kannan</p>
            <p className="text-slate-200 mt-1">feat(ecommerce): Launch MagicalDews fragrance platform with Firebase integration</p>
          </div>
          <div className="border-l-2 border-indigo-500/40 pl-3">
            <p className="text-indigo-400 font-semibold">commit 90b2e81</p>
            <p className="text-slate-400 text-[10px]">Author: Kavinisha Kannan</p>
            <p className="text-slate-200 mt-1">feat(ui): CinemaSeat visual ticket booking reservation engine</p>
          </div>
          <div className="border-l-2 border-slate-700 pl-3">
            <p className="text-slate-500 font-semibold">commit 11e403d</p>
            <p className="text-slate-400 text-[10px]">Author: Kavinisha Kannan</p>
            <p className="text-slate-400 mt-1">init: Portfolio v1 milestone &amp; foundational web projects</p>
          </div>
        </div>
      )}

    </div>
  );
}
