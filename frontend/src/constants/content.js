export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export const heroContent = {
  name: "Alexander Reed",
  title: "Full Stack Web Developer",
  description:
    "I build modern, scalable web applications using Laravel, React, Node.js, and cloud technologies while continuously exploring DevOps.",
  stats: ["4+ Projects", "2+ Years Learning", "Laravel", "React"],
};

export const aboutContent = {
  intro:
    "I started learning web development with a strong curiosity for building products that feel effortless and perform reliably. Over time, that interest grew into a focus on backend architecture, system design, and creating maintainable software.",
  milestones: [
    {
      year: "2019",
      title: "Started learning web development",
      description:
        "Explored HTML, CSS, JavaScript, and built a foundation in creating interactive experiences.",
    },
    {
      year: "2021",
      title: "Built multiple projects",
      description:
        "Developed full-stack apps and sharpened my approach to product thinking and implementation.",
    },
    {
      year: "2023",
      title: "Focused on backend architecture",
      description:
        "Deepened my understanding of APIs, databases, authentication, and clean service design.",
    },
    {
      year: "2025",
      title: "Learning DevOps and scalable systems",
      description:
        "Expanded my work into deployment pipelines, observability, and resilient infrastructure.",
    },
  ],
  highlights: [
    "Passionate about clean code",
    "Interested in scalable systems",
    "Always exploring new tools and workflows",
  ],
  skills: ["Laravel", "React", "Node", "Express", "MongoDB", "MySQL", "Git"],
};

export const skillsContent = {
  groups: [
    {
      title: "Frontend",
      items: [
        { name: "React", level: "Advanced", icon: "⚛️", progress: 92 },
        { name: "JavaScript", level: "Advanced", icon: "📜", progress: 90 },
        { name: "HTML", level: "Advanced", icon: "🌐", progress: 94 },
        { name: "CSS", level: "Advanced", icon: "🎨", progress: 91 },
        { name: "Tailwind", level: "Advanced", icon: "🪄", progress: 93 },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Laravel", level: "Advanced", icon: "🧱", progress: 90 },
        { name: "PHP", level: "Intermediate", icon: "🐘", progress: 86 },
        { name: "Node.js", level: "Intermediate", icon: "🟢", progress: 82 },
        { name: "Express", level: "Intermediate", icon: "⚡", progress: 78 },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MySQL", level: "Advanced", icon: "🗄️", progress: 88 },
        { name: "MongoDB", level: "Intermediate", icon: "🍃", progress: 74 },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", level: "Advanced", icon: "🧰", progress: 90 },
        { name: "GitHub", level: "Advanced", icon: "🐙", progress: 92 },
        { name: "VS Code", level: "Advanced", icon: "💻", progress: 95 },
        { name: "Postman", level: "Intermediate", icon: "📬", progress: 80 },
        { name: "Docker", level: "Learning", icon: "🐳", progress: 60 },
        { name: "Linux", level: "Learning", icon: "🐧", progress: 64 },
        { name: "DevOps", level: "Learning", icon: "☁️", progress: 58 },
      ],
    },
  ],
};

export const projectsContent = [
  {
    id: 1,
    title: "Northstar Analytics",
    description:
      "A modern analytics dashboard built for product teams to understand usage and engagement in real time.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Laravel", "MySQL", "Tailwind"],
    features: ["Real-time KPIs", "Role-based access", "Interactive charts"],
    challenges: [
      "Handling high-volume event data",
      "Designing a maintainable API",
    ],
    lessons: ["Invest in API contracts early", "Favor progressive enhancement"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "Lumen Commerce",
    description:
      "An elegant commerce experience designed for speed, clarity, and seamless checkout.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Node", "MongoDB", "Express"],
    features: ["Search and filtering", "Checkout flow", "CMS content blocks"],
    challenges: ["Optimizing performance", "Simplifying checkout complexity"],
    lessons: ["Measure before refactoring", "Use server-side validation"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "Horizon Studio",
    description:
      "A collaborative workspace for creative teams to publish content and manage momentum.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Laravel", "React", "MySQL", "Docker"],
    features: [
      "Kanban workflow",
      "Multimedia uploads",
      "Shared project spaces",
    ],
    challenges: ["Complex permissions", "Reliable background jobs"],
    lessons: ["Modularize domain logic", "Document operational processes"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export const experienceContent = [
  {
    title: "Education",
    period: "2020 — Present",
    description:
      "Studied software engineering principles, modern architecture, and independent product development.",
  },
  {
    title: "Internship",
    period: "2023",
    description:
      "Contributed to internal tools, debugging workflows, and API integrations in a fast-moving startup environment.",
  },
  {
    title: "Personal Projects",
    period: "2021 — Present",
    description:
      "Built polished web experiences with a focus on maintainability, speed, and developer experience.",
  },
  {
    title: "Future Goals",
    period: "2026+",
    description:
      "Expand into distributed systems, platform engineering, and high-scale deployment practices.",
  },
];

export const socialLinks = [
  { label: "GitHub", url: "https://github.com" },
  { label: "LinkedIn", url: "https://linkedin.com" },
];
