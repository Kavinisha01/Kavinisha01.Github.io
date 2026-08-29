export const personalInfo = {
  name: "Kavinisha Kannan",
  role: "Software Developer & UI/UX Engineer",
  tagline: "Engineering scalable web applications with clean architecture and intuitive user experiences.",
  location: "Chennai, India",
  email: "kavinisha283@gmail.com",
  phone: "+91 9867543565",
  availability: "Available for new engineering opportunities",
  status: "Ready for Frontend / Full-Stack Roles",
  profileImage: "/assets/kavinisha_image.jpeg",
  aboutImage: "/assets/kavinisha_image.jpeg",
  links: {
    github: "https://github.com/Kavinisha01",
    linkedin: "https://www.linkedin.com/in/kavinisha-kannan-1992a6276/?originalSubdomain=in",
    formspree: "https://formspree.io/f/xzzpnjvd"
  }
};

export const skillsData = [
  {
    category: "Frontend",
    icon: "Layout",
    description: "Component lifecycle, state management, responsive UI systems, and modern browser APIs.",
    skills: [
      { 
        id: "react",
        name: "React.js", 
        role: "Component Architecture",
        desc: "Hooks, custom state orchestration, modular component breakdown, Virtual DOM optimization.",
        pipeline: "Component State → API Integration → Responsive Layout",
        projects: ["MagicalDews", "Portfolio v2"]
      },
      { 
        id: "javascript",
        name: "JavaScript (ES6+)", 
        role: "Core Engine",
        desc: "Asynchronous patterns (async/await), event loop, closures, DOM manipulation, ES modules.",
        pipeline: "Event Dispatch → Async Fetch → State Mutation",
        projects: ["CinemaSeat", "MagicalDews"]
      },
      { 
        id: "tailwind",
        name: "Tailwind CSS", 
        role: "Design System",
        desc: "Utility-first design tokens, responsive breakpoints, fluid typography, dark-mode styling.",
        pipeline: "Design Tokens → Fluid Grid → Micro-Interactions",
        projects: ["Portfolio v2", "MagicalDews"]
      },
      { 
        id: "html-css",
        name: "HTML5 / CSS3", 
        role: "Semantic Structure",
        desc: "Accessible markup, Flexbox, Grid, keyframe animations, glassmorphism, SEO standards.",
        pipeline: "Semantic Tree → CSS Layout Engine → Accessible UI",
        projects: ["CinemaSeat", "Portfolio v1"]
      }
    ]
  },
  {
    category: "Backend & Cloud",
    icon: "Server",
    description: "Cloud database persistence, authentication flows, RESTful endpoints, and asynchronous handlers.",
    skills: [
      { 
        id: "firebase",
        name: "Firebase Cloud", 
        role: "Auth & Persistence",
        desc: "User authentication, Firestore NoSQL real-time collections, cloud hosting, and security rules.",
        pipeline: "Auth Token → Firestore Sync → Realtime Listener",
        projects: ["MagicalDews"]
      },
      { 
        id: "rest-apis",
        name: "RESTful APIs", 
        role: "Service Integration",
        desc: "Client-server communication, JSON payloads, HTTP headers, error boundaries, request throttling.",
        pipeline: "Client Request → HTTP Endpoint → Response Parser",
        projects: ["MagicalDews", "Portfolio Platform"]
      },
      { 
        id: "nodejs",
        name: "Node.js", 
        role: "Runtime Environment",
        desc: "Server execution environment, npm package orchestration, build automation scripts.",
        pipeline: "Runtime Exec → Package Manager → Server Scripts",
        projects: ["Full-Stack Workflows"]
      },
      { 
        id: "python",
        name: "Python", 
        role: "Scripting & Logic",
        desc: "Algorithmic problem solving, data structure transformations, automated scripting.",
        pipeline: "Input Parsing → Algorithm Logic → Formatted Output",
        projects: ["Problem Solving & Practice"]
      }
    ]
  },
  {
    category: "Databases",
    icon: "Database",
    description: "Relational data structures, NoSQL document modeling, and query execution.",
    skills: [
      { 
        id: "sql",
        name: "SQL", 
        role: "Relational Modeling",
        desc: "Table relationships, primary/foreign keys, joins, aggregation, data normalization.",
        pipeline: "Schema Design → Table Query → Data Aggregation",
        projects: ["Database Systems"]
      },
      { 
        id: "firestore",
        name: "Firestore NoSQL", 
        role: "Document Store",
        desc: "Collection/document schemas, real-time snapshot listeners, compound indexes.",
        pipeline: "Collection Model → Document Mutation → Client Broadcast",
        projects: ["MagicalDews"]
      }
    ]
  },
  {
    category: "Tools & DevOps",
    icon: "Wrench",
    description: "Version control systems, build toolchains, UI prototyping, and developer tooling.",
    skills: [
      { 
        id: "git",
        name: "Git & GitHub", 
        role: "Version Control",
        desc: "Branching workflows, pull requests, merge conflict resolution, semantic commit history.",
        pipeline: "Feature Branch → Pull Request → Code Review → Deployment",
        projects: ["All Projects"]
      },
      { 
        id: "vite",
        name: "Vite Toolchain", 
        role: "Build & Bundling",
        desc: "Fast ESM development server, tree-shaking, production asset compression.",
        pipeline: "ESM Dev Server → Rollup Bundler → Optimized Assets",
        projects: ["Portfolio v2"]
      },
      { 
        id: "figma",
        name: "Figma", 
        role: "UI/UX Prototyping",
        desc: "Wireframing, interactive prototypes, design component hierarchy, responsive layout spec.",
        pipeline: "User Wireframe → Design System → Production Component",
        projects: ["Product Prototypes", "Portfolio Design"]
      },
      { 
        id: "devtools",
        name: "VS Code & DevTools", 
        role: "Debugging & Profiling",
        desc: "Breakpoint debugging, network request inspection, DOM performance audits.",
        pipeline: "Network Inspect → Console Profiling → Code Optimization",
        projects: ["All Applications"]
      }
    ]
  },
  {
    category: "Engineering",
    icon: "Cpu",
    description: "Architectural principles, accessibility standards, and performance optimization.",
    skills: [
      { 
        id: "architecture",
        name: "Component Architecture", 
        role: "Modular Engineering",
        desc: "Decoupling UI logic from data layers, atomic component reusability, single-responsibility principle.",
        pipeline: "State Store → Dumb Presentational UI → Predictable Renders",
        projects: ["MagicalDews", "Portfolio v2"]
      },
      { 
        id: "responsive",
        name: "Responsive & Accessible UI", 
        role: "Cross-Device Polish",
        desc: "Mobile-first layouts, zero horizontal overflow, touch-target ergonomics, high-contrast readability.",
        pipeline: "Mobile Viewport → Tablet Breakpoint → 4K Fluid Scaling",
        projects: ["CinemaSeat", "Portfolio v2"]
      },
      { 
        id: "performance",
        name: "Performance & Asset Optimization", 
        role: "Speed & Web Vitals",
        desc: "Image lazy loading, bundle minimization, eliminating layout shifts, GPU-friendly animations.",
        pipeline: "Lazy Loading → Asset Compression → 60fps Transitions",
        projects: ["Portfolio v2"]
      }
    ]
  }
];

export const projectsData = [
  {
    id: "magical-dews",
    title: "MagicalDews — E-Commerce Web Application",
    tagline: "A production-ready boutique fragrance e-commerce platform featuring real-time catalog management and responsive checkout flows.",
    category: "Full Stack & Web Apps",
    image: "/assets/img3.webp",
    featured: true,
    tags: ["React", "JavaScript", "Firebase", "CSS3", "State Management", "Responsive UI"],
    problem: "Traditional boutique retailers often struggle with rigid, non-responsive catalog systems that fail to convey product elegance across mobile devices.",
    solution: "Engineered a fast, mobile-first e-commerce interface with an integrated shopping cart, real-time product discovery, and cloud-backed persistence.",
    highlights: [
      "Dynamic cart state management with instant price recalculation and quantity adjustment",
      "Firebase Cloud Integration for reliable catalog data and user session persistence",
      "Custom responsive design with touch-friendly navigation and high-contrast accessibility",
      "Optimized asset loading ensuring swift page speed and smooth micro-interactions"
    ],
    architecture: "Component-driven React layout with centralized cart state, Firebase cloud backend for structured product schemas, and modular CSS utility styling.",
    liveUrl: "https://magicaldews.netlify.app/",
    githubUrl: "https://github.com/Kavinisha01"
  },
  {
    id: "cinema-seat-booking",
    title: "CinemaSeat — Interactive Ticket Booking UI",
    tagline: "Dynamic visual movie reservation engine with real-time seat occupancy state and tiered price computation.",
    category: "Interactive UI",
    image: "/assets/img2.webp",
    featured: true,
    tags: ["JavaScript", "DOM Engine", "CSS Grid & Flexbox", "State Tracking", "UI/UX"],
    problem: "Visual seat selection requires instant interactive feedback without full page reloads, complex DOM synchronization, and adaptive layouts for all screen sizes.",
    solution: "Developed an interactive seating map system where users select seats across different tiers, updating reservation totals dynamically with instant visual state changes.",
    highlights: [
      "Interactive SVG/CSS grid seating layout with multi-state flags (available, selected, occupied)",
      "Real-time cost calculator dynamically updating with movie selection and seat tier pricing",
      "Clean modular CSS structure preventing layout shift during rapid user interactions",
      "Persistent state via browser storage for seamless reservation recovery"
    ],
    architecture: "State-driven event dispatch architecture with decoupled layout styles and reactive DOM rendering engine.",
    liveUrl: "https://kavinisha01.github.io/pages/CSSMovieBooking/index.html",
    githubUrl: "https://github.com/Kavinisha01"
  },
  {
    id: "portfolio-evolution",
    title: "Developer Portfolio — Platform Evolution",
    tagline: "Complete modernization from vanilla HTML/CSS to an interactive, modular React & Tailwind developer hub.",
    category: "Full Stack & Web Apps",
    image: "/assets/img 1.webp",
    featured: true,
    tags: ["React", "Vite", "Tailwind CSS", "Lucide Icons", "Architecture"],
    problem: "Early career portfolios often suffer from monolithic static code, limited interactivity, and lack of technical depth required for modern engineering roles.",
    solution: "Architected a scalable, data-driven single page application showcasing real software engineering capabilities with an embedded interactive system visual and case-study modals.",
    highlights: [
      "Interactive system architecture illustration visualizing live client-server data flows",
      "Accessible modal case studies with structured problem/solution/architecture breakdowns",
      "Strict dark-mode technical design system with Tailwind glassmorphism and subtle grid glows",
      "Mobile-optimized layout supporting reduced motion and clean keyboard navigation"
    ],
    architecture: "Single-source data flow (`portfolioData.js`), component-level encapsulation, and high-performance Vite build toolchain.",
    liveUrl: "https://kavinisha01.github.io/",
    githubUrl: "https://github.com/Kavinisha01/Kavinisha01.Github.io"
  },
  {
    id: "squad-power",
    title: "Squad Power — Teamwork & Efficiency Framework",
    tagline: "Collaborative process framework for maximizing agile velocity and cross-functional team productivity.",
    category: "Product & Strategy",
    image: "/assets/ls-img1.webp",
    featured: false,
    tags: ["Agile Systems", "Workflow Modeling", "Team Collaboration", "Process Design"],
    problem: "Miscommunication and ambiguous task distribution create friction and slow project delivery timelines.",
    solution: "Designed a standardized collaborative playbook mapping communication channels, milestone tracking, and shared team accountability.",
    highlights: [
      "Structured task breakdown workflows to accelerate sprint execution",
      "Clear escalation pathways and cross-functional accountability matrices",
      "Visual alignment diagrams for rapid team onboarding"
    ],
    architecture: "Collaborative systems design and workflow documentation methodology.",
    liveUrl: "https://www.canva.com/design/DAGKu5WIvXI/BW6LI2LyjQQj2XI4JMf3aQ/edit?utm_content=DAGKu5WIvXI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    githubUrl: "https://github.com/Kavinisha01"
  },
  {
    id: "product-prototype",
    title: "Product Prototype & User Journey Modeling",
    tagline: "Interactive digital product prototyping bridging user requirement discovery and interface engineering.",
    category: "Product & Strategy",
    image: "/assets/ls-img2.png",
    featured: false,
    tags: ["UI/UX Prototyping", "User Research", "Wireframing", "Figma"],
    problem: "Building software without prototyping leads to expensive post-development rework and misaligned user expectations.",
    solution: "Constructed end-to-end interactive prototypes translating user pain points into validated UI flows prior to code implementation.",
    highlights: [
      "Comprehensive user flow diagrams and high-fidelity wireframe states",
      "Iterative usability testing to eliminate navigational friction",
      "Design token handoff specifications for frontend implementation"
    ],
    architecture: "Design-system-first prototyping with reusable visual components.",
    liveUrl: "https://www.canva.com/design/DAGPCH8BBAs/zfADIqSDVW-8FVveCBNLmw/edit?utm_content=DAGPCH8BBAs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    githubUrl: "https://github.com/Kavinisha01"
  },
  {
    id: "workplace-study",
    title: "Workplace Operations & Ergonomics Analysis",
    tagline: "Analytical study on optimizing physical and digital work environments for sustained engineering focus.",
    category: "Product & Strategy",
    image: "/assets/ls-img3.webp",
    featured: false,
    tags: ["Operations Analysis", "Ergonomics", "Performance Systems", "Research"],
    problem: "Suboptimal work environment factors lead to cognitive fatigue and decreased development output.",
    solution: "Conducted an empirical study evaluating workspace ergonomics, lighting, and tooling setups to establish optimal productivity conditions.",
    highlights: [
      "Quantitative review of productivity metrics across varying workstation setups",
      "Practical guideline synthesis for sustained deep work and cognitive endurance",
      "Ergonomic checklist adopted for day-to-day software development workflows"
    ],
    architecture: "Empirical data gathering and actionable system optimization framework.",
    liveUrl: "https://www.canva.com/design/DAGW-9gB9Mg/DHEILZT6-cfvTKwUeKHYbw/edit?utm_content=DAGW-9gB9Mg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    githubUrl: "https://github.com/Kavinisha01"
  }
];

export const engineeringCapabilities = [
  {
    id: "frontend-arch",
    title: "Modern Frontend Architecture",
    icon: "Layers",
    description: "Designing scalable, component-driven React applications with strong state encapsulation, clean props contracts, and high performance.",
    points: ["Component Reusability", "Custom Hooks & State Flow", "Accessible Semantic DOM"]
  },
  {
    id: "responsive-design",
    title: "Adaptive UI & Design Systems",
    icon: "Smartphone",
    description: "Crafting fluid, mobile-first interfaces with Tailwind CSS that look and feel native on any viewport with zero horizontal overflow.",
    points: ["Fluid Breakpoint Systems", "Touch Target Optimization", "Subtle Micro-Interactions"]
  },
  {
    id: "api-backend",
    title: "API & Backend Integration",
    icon: "Network",
    description: "Connecting frontend clients to RESTful services and Firebase databases with robust error boundaries, loading states, and data normalization.",
    points: ["Asynchronous Request Handling", "Cloud Persistence (Firestore)", "Optimistic UI Updates"]
  },
  {
    id: "performance",
    title: "Performance & Asset Optimization",
    icon: "Zap",
    description: "Fine-tuning asset delivery, lazy loading images and modules, minimizing bundle size, and ensuring 60fps animations.",
    points: ["Vite Build Toolchain", "GPU-Accelerated CSS", "Core Web Vitals Focus"]
  },
  {
    id: "uiux-engineering",
    title: "UI/UX Engineering & Prototyping",
    icon: "Figma",
    description: "Bridging the gap between design concepts and production code through thoughtful typography, visual hierarchy, and user-centric flows.",
    points: ["Figma Wireframe Translation", "Design Token Discipline", "Intuitive Interaction Models"]
  },
  {
    id: "problem-solving",
    title: "Clean Code & Reliability",
    icon: "ShieldCheck",
    description: "Structuring readable, self-documenting code with clear folder boundaries, sensible naming conventions, and continuous refactoring.",
    points: ["Maintainable File Structures", "Edge-Case Handling", "Version Control (Git) Discipline"]
  }
];

export const experienceTimeline = [
  {
    period: "2024 — Present",
    role: "Full Stack & UI/UX Developer",
    organization: "Software Engineering & Independent Projects",
    location: "Chennai, India",
    type: "Engineering",
    description: "Deep focus on building production-grade React web applications, designing scalable component architectures, mastering Firebase integration, and crafting polished developer-first interfaces.",
    achievements: [
      "Architected and deployed MagicalDews, an e-commerce platform with dynamic cart state and Firebase cloud integration.",
      "Developed responsive interactive UI tools including CinemaSeat booking and modernized developer portfolio platform.",
      "Standardized UI component workflows using modern Tailwind CSS and Vite toolchains."
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "Firebase", "Node.js", "Git", "REST APIs"]
  },
  {
    period: "2022 — 2024",
    role: "Retail Technology & Operations Specialist",
    organization: "Poorvika Mobiles",
    location: "Chennai, India",
    type: "Operations & Customer Experience",
    description: "Collaborated in a fast-paced retail technology ecosystem, analyzing customer device requirements, managing inventory systems, and honing direct user communication skills.",
    achievements: [
      "Managed digital inventory tracking and customer service workflows with high accuracy and speed.",
      "Communicated technical specifications and product trade-offs directly to diverse consumer demographics.",
      "Cultivated high-pressure problem solving and cross-functional team coordination."
    ],
    tech: ["Customer Operations", "Inventory Systems", "Problem Solving", "Team Leadership"]
  },
  {
    period: "2021 — 2022",
    role: "Retail Operations Associate",
    organization: "Sathya Mobiles",
    location: "Chennai, India",
    type: "Operations & Foundation",
    description: "Engaged in hands-on operations, product demonstrations, and customer support, establishing a solid foundation in customer-centric communication and fast-paced execution.",
    achievements: [
      "Demonstrated consumer technology products and handled point-of-sale operations.",
      "Maintained structured product showcases and assisted with customer onboarding."
    ],
    tech: ["Customer Support", "Operations", "Communication", "Time Management"]
  },
  {
    period: "2018 — 2024",
    role: "Higher Secondary & Secondary Education",
    organization: "State Board Education",
    location: "Chennai, India",
    type: "Education",
    description: "Completed 10th Grade (2018) and 12th Grade (2024) with foundational focus on mathematics, computer science basics, and analytical disciplines.",
    achievements: [
      "Developed early passion for web technologies and computer programming.",
      "Self-directed transition into dedicated modern software development practices."
    ],
    tech: ["Computer Science Fundamentals", "Analytical Problem Solving", "Mathematics"]
  }
];
