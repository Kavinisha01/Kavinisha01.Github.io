import React, { useState } from 'react';
import { Layers, Server, ShieldCheck, Database, Globe, ArrowRight, ArrowDown, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SystemArchitectureVisual() {
  const [selectedNode, setSelectedNode] = useState('react-app');
  const [hoveredNode, setHoveredNode] = useState(null);

  const activeId = hoveredNode || selectedNode;

  const architectureNodes = {
    'react-app': {
      id: 'react-app',
      title: 'React Application',
      category: 'Frontend Client',
      role: 'UI Components & State',
      icon: '⚛',
      color: '#06b6d4',
      accentBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
      connectedTo: ['api-server'],
      description: 'Single-page web client responsible for component-driven UI rendering, shopping cart state management, responsive layouts, and user interactions.',
      technologies: ['React.js', 'Custom Hooks & State', 'Tailwind CSS', 'Browser DOM'],
      inbound: 'Client User Interactions',
      outbound: 'REST API & Node.js'
    },
    'api-server': {
      id: 'api-server',
      title: 'REST API & Node.js',
      category: 'Backend Layer',
      role: 'Controllers & Routing',
      icon: '⚡',
      color: '#6366f1',
      accentBg: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
      connectedTo: ['react-app', 'firebase-auth', 'database', 'external-services'],
      description: 'Backend service layer handling route dispatch, payload validation, business logic, and orchestrating database and authentication operations.',
      technologies: ['Node.js', 'REST Endpoints', 'JSON Payloads', 'HTTP/2'],
      inbound: 'React Application (HTTPS / JSON)',
      outbound: 'Firebase Auth, Database, External APIs'
    },
    'firebase-auth': {
      id: 'firebase-auth',
      title: 'Firebase Auth',
      category: 'Authentication',
      role: 'User Sessions & JWT',
      icon: '🔑',
      color: '#f59e0b',
      accentBg: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
      connectedTo: ['api-server'],
      description: 'Manages user identity, session state, secure login flows, and token validation for protected application routes.',
      technologies: ['Firebase Auth', 'JWT Tokens', 'Route Guards', 'Session Store'],
      inbound: 'REST API & Node.js (Token Verify)',
      outbound: 'Authorized User State'
    },
    'database': {
      id: 'database',
      title: 'Database & Storage',
      category: 'Data Persistence',
      role: 'Firestore NoSQL & SQL',
      icon: '⛁',
      color: '#f97316',
      accentBg: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
      connectedTo: ['api-server'],
      description: 'Persistent data layer holding product catalogs, inventory, user profiles, and order records with real-time stream synchronization.',
      technologies: ['Firestore NoSQL', 'SQL Queries', 'Realtime Snapshots', 'Schema Design'],
      inbound: 'REST API & Node.js (CRUD / Queries)',
      outbound: 'Streamed Record Datasets'
    },
    'external-services': {
      id: 'external-services',
      title: 'External Services',
      category: 'Cloud Integration',
      role: 'Formspree & Webhooks',
      icon: '🌐',
      color: '#a855f7',
      accentBg: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
      connectedTo: ['api-server'],
      description: 'External cloud integrations for direct email delivery, payment checkout workflows, and third-party webhook handling.',
      technologies: ['Formspree API', 'Webhook Dispatch', 'Third-Party Endpoints'],
      inbound: 'REST API & Node.js (Notification / Post)',
      outbound: 'External Cloud Handlers'
    }
  };

  const currentNode = architectureNodes[activeId] || architectureNodes['react-app'];

  const isNodeConnected = (nodeId) => {
    if (nodeId === activeId) return true;
    const activeData = architectureNodes[activeId];
    return activeData?.connectedTo.includes(nodeId);
  };

  return (
    <div className="w-full rounded-xl bg-[#0b1120] border border-white/5 shadow-2xl shadow-cyan-950/40 overflow-hidden font-sans">
      
      {/* Header Bar with Legend */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#070b14] border-b border-white/5 select-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span className="text-xs font-bold tracking-tight text-white">
            System Architecture &amp; Data Flow
          </span>
        </div>

        {/* Legend - 5 Distinct Colors */}
        <div className="flex items-center gap-2.5 text-[9.5px] text-slate-400 font-medium">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Client
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Server
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Auth
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span> Data
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> Cloud
          </span>
        </div>
      </div>

      {/* SVG Canvas - Spaced, Ultra-Fine Borders & Clean Vector Paths */}
      <div className="relative p-3 sm:p-4 bg-[#080d19]">
        <svg viewBox="0 0 540 268" className="w-full h-auto select-none overflow-visible">
          <defs>
            {/* Arrow Markers */}
            <marker
              id="arrow-default"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="4.5"
              markerHeight="4.5"
              orient="auto"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#475569" />
            </marker>

            <marker
              id="arrow-active"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="4.5"
              markerHeight="4.5"
              orient="auto"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#22d3ee" />
            </marker>

            {/* Glowing Beat / Packet Filters */}
            <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="glow-amber" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="glow-orange" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="glow-purple" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Connection Lines (Ultra-Fine 1px Stroke) */}

          {/* Path 1: React Client -> API Server */}
          <g>
            <path
              id="path-client-api"
              d="M 270 58 L 270 98"
              stroke={isNodeConnected('react-app') && isNodeConnected('api-server') ? '#22d3ee' : '#334155'}
              strokeWidth="1"
              markerEnd={isNodeConnected('react-app') && isNodeConnected('api-server') ? 'url(#arrow-active)' : 'url(#arrow-default)'}
              className="transition-colors duration-300"
            />
            {/* Protocol Badge */}
            <rect x="227" y="70" width="86" height="16" rx="3" fill="#0f172a" stroke="#1e293b" strokeWidth="0.75" />
            <text x="270" y="81.5" textAnchor="middle" fill="#94a3b8" fontSize="8.5" fontWeight="600">
              HTTPS / JSON
            </text>
            {/* Glowing Moving Beat */}
            <circle r="2.5" fill="#22d3ee" filter="url(#glow-cyan)">
              <animateMotion
                path="M 270 58 L 270 98"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Path 2: API Server -> Firebase Auth (Left Branch - Amber) */}
          <g>
            <path
              id="path-api-auth"
              d="M 270 142 L 270 162 L 92.5 162 L 92.5 206"
              fill="none"
              stroke={isNodeConnected('api-server') && isNodeConnected('firebase-auth') ? '#fbbf24' : '#334155'}
              strokeWidth="1"
              markerEnd={isNodeConnected('api-server') && isNodeConnected('firebase-auth') ? 'url(#arrow-active)' : 'url(#arrow-default)'}
              className="transition-colors duration-300"
            />
            {/* Branch Label */}
            <rect x="126" y="154" width="68" height="15" rx="3" fill="#0f172a" stroke="#1e293b" strokeWidth="0.75" />
            <text x="160" y="165" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="600">
              Token Verify
            </text>
            {/* Glowing Moving Beat */}
            <circle r="2.5" fill="#fbbf24" filter="url(#glow-amber)">
              <animateMotion
                path="M 270 142 L 270 162 L 92.5 162 L 92.5 206"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Path 3: API Server -> Database (Center Branch - Coral Orange) */}
          <g>
            <path
              id="path-api-db"
              d="M 270 142 L 270 206"
              fill="none"
              stroke={isNodeConnected('api-server') && isNodeConnected('database') ? '#fb923c' : '#334155'}
              strokeWidth="1"
              markerEnd={isNodeConnected('api-server') && isNodeConnected('database') ? 'url(#arrow-active)' : 'url(#arrow-default)'}
              className="transition-colors duration-300"
            />
            <rect x="233" y="174" width="74" height="15" rx="3" fill="#0f172a" stroke="#1e293b" strokeWidth="0.75" />
            <text x="270" y="185" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="600">
              CRUD Queries
            </text>
            {/* Glowing Moving Beat */}
            <circle r="2.5" fill="#fb923c" filter="url(#glow-orange)">
              <animateMotion
                path="M 270 142 L 270 206"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Path 4: API Server -> External Services (Right Branch - Purple) */}
          <g>
            <path
              id="path-api-ext"
              d="M 270 142 L 270 162 L 447.5 162 L 447.5 206"
              fill="none"
              stroke={isNodeConnected('api-server') && isNodeConnected('external-services') ? '#c084fc' : '#334155'}
              strokeWidth="1"
              markerEnd={isNodeConnected('api-server') && isNodeConnected('external-services') ? 'url(#arrow-active)' : 'url(#arrow-default)'}
              className="transition-colors duration-300"
            />
            <rect x="348" y="154" width="72" height="15" rx="3" fill="#0f172a" stroke="#1e293b" strokeWidth="0.75" />
            <text x="384" y="165" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="600">
              Webhooks
            </text>
            {/* Glowing Moving Beat */}
            <circle r="2.5" fill="#c084fc" filter="url(#glow-purple)">
              <animateMotion
                path="M 270 142 L 270 162 L 447.5 162 L 447.5 206"
                dur="2.6s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* ======================================================== */}
          {/* Node 1: React Application (Top Center - Cyan) */}
          {/* ======================================================== */}
          <g
            onClick={() => setSelectedNode('react-app')}
            onMouseEnter={() => setHoveredNode('react-app')}
            onMouseLeave={() => setHoveredNode(null)}
            className="cursor-pointer"
            opacity={isNodeConnected('react-app') ? 1 : 0.35}
          >
            <rect
              x="180"
              y="14"
              width="180"
              height="44"
              rx="8"
              fill="#0f172a"
              stroke={activeId === 'react-app' ? '#06b6d4' : 'rgba(255,255,255,0.06)'}
              strokeWidth="0.75"
              className="transition-all duration-300"
            />
            <circle cx="202" cy="36" r="9" fill="#06b6d4" fillOpacity="0.15" />
            <text x="202" y="40" textAnchor="middle" fill="#22d3ee" fontSize="11" fontWeight="bold">⚛</text>
            <text x="218" y="31" fill="#f8fafc" fontSize="10.5" fontWeight="700">React Application</text>
            <text x="218" y="44" fill="#94a3b8" fontSize="9">UI Components &amp; State</text>
          </g>

          {/* ======================================================== */}
          {/* Node 2: REST API & Node.js (Middle Center - Indigo) */}
          {/* ======================================================== */}
          <g
            onClick={() => setSelectedNode('api-server')}
            onMouseEnter={() => setHoveredNode('api-server')}
            onMouseLeave={() => setHoveredNode(null)}
            className="cursor-pointer"
            opacity={isNodeConnected('api-server') ? 1 : 0.35}
          >
            <rect
              x="180"
              y="98"
              width="180"
              height="44"
              rx="8"
              fill="#0f172a"
              stroke={activeId === 'api-server' ? '#6366f1' : 'rgba(255,255,255,0.06)'}
              strokeWidth="0.75"
              className="transition-all duration-300"
            />
            <circle cx="202" cy="120" r="9" fill="#6366f1" fillOpacity="0.15" />
            <text x="202" y="124" textAnchor="middle" fill="#818cf8" fontSize="11" fontWeight="bold">⚡</text>
            <text x="218" y="115" fill="#f8fafc" fontSize="10.5" fontWeight="700">REST API &amp; Node.js</text>
            <text x="218" y="128" fill="#94a3b8" fontSize="9">Controllers &amp; Routing</text>
          </g>

          {/* ======================================================== */}
          {/* Node 3: Firebase Auth (Bottom Left - Amber) */}
          {/* ======================================================== */}
          <g
            onClick={() => setSelectedNode('firebase-auth')}
            onMouseEnter={() => setHoveredNode('firebase-auth')}
            onMouseLeave={() => setHoveredNode(null)}
            className="cursor-pointer"
            opacity={isNodeConnected('firebase-auth') ? 1 : 0.35}
          >
            <rect
              x="15"
              y="206"
              width="155"
              height="46"
              rx="8"
              fill="#0f172a"
              stroke={activeId === 'firebase-auth' ? '#f59e0b' : 'rgba(255,255,255,0.06)'}
              strokeWidth="0.75"
              className="transition-all duration-300"
            />
            <circle cx="36" cy="229" r="9" fill="#f59e0b" fillOpacity="0.15" />
            <text x="36" y="233" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">🔑</text>
            <text x="52" y="224" fill="#f8fafc" fontSize="10" fontWeight="700">Firebase Auth</text>
            <text x="52" y="238" fill="#94a3b8" fontSize="8.5">User Sessions &amp; JWT</text>
          </g>

          {/* ======================================================== */}
          {/* Node 4: Database & Storage (Bottom Center - Coral Orange) */}
          {/* ======================================================== */}
          <g
            onClick={() => setSelectedNode('database')}
            onMouseEnter={() => setHoveredNode('database')}
            onMouseLeave={() => setHoveredNode(null)}
            className="cursor-pointer"
            opacity={isNodeConnected('database') ? 1 : 0.35}
          >
            <rect
              x="192.5"
              y="206"
              width="155"
              height="46"
              rx="8"
              fill="#0f172a"
              stroke={activeId === 'database' ? '#f97316' : 'rgba(255,255,255,0.06)'}
              strokeWidth="0.75"
              className="transition-all duration-300"
            />
            <circle cx="213" cy="229" r="9" fill="#f97316" fillOpacity="0.15" />
            <text x="213" y="233" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="bold">⛁</text>
            <text x="229" y="224" fill="#f8fafc" fontSize="10" fontWeight="700">Database &amp; Store</text>
            <text x="229" y="238" fill="#94a3b8" fontSize="8.5">Firestore &amp; SQL</text>
          </g>

          {/* ======================================================== */}
          {/* Node 5: External Services (Bottom Right - Purple) */}
          {/* ======================================================== */}
          <g
            onClick={() => setSelectedNode('external-services')}
            onMouseEnter={() => setHoveredNode('external-services')}
            onMouseLeave={() => setHoveredNode(null)}
            className="cursor-pointer"
            opacity={isNodeConnected('external-services') ? 1 : 0.35}
          >
            <rect
              x="370"
              y="206"
              width="155"
              height="46"
              rx="8"
              fill="#0f172a"
              stroke={activeId === 'external-services' ? '#a855f7' : 'rgba(255,255,255,0.06)'}
              strokeWidth="0.75"
              className="transition-all duration-300"
            />
            <circle cx="391" cy="229" r="9" fill="#a855f7" fillOpacity="0.15" />
            <text x="391" y="233" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">🌐</text>
            <text x="407" y="224" fill="#f8fafc" fontSize="10" fontWeight="700">External Services</text>
            <text x="407" y="238" fill="#94a3b8" fontSize="8.5">Formspree &amp; APIs</text>
          </g>
        </svg>
      </div>

      {/* Selected Node Information Panel - Animated Crossfade */}
      <div className="p-4 bg-[#090e1a] border-t border-white/5 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentNode.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="space-y-2.5"
          >
            {/* Layer Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded-md text-[11px] font-semibold border ${currentNode.accentBg}`}>
                  {currentNode.category}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  {currentNode.title}
                </h4>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">
                Role: <span className="text-slate-200">{currentNode.role}</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentNode.description}
            </p>

            {/* Technologies Applied */}
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mr-1">
                Tech:
              </span>
              {currentNode.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-900 text-slate-300 border border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Pipeline Connectivity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/5 text-[11px]">
              <div className="flex items-center gap-1.5 text-slate-400">
                <ArrowDown className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                <span className="truncate">In: <strong className="text-slate-200 font-medium">{currentNode.inbound}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <ArrowRight className="w-3.5 h-3 text-indigo-400 flex-shrink-0" />
                <span className="truncate">Out: <strong className="text-slate-200 font-medium">{currentNode.outbound}</strong></span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
