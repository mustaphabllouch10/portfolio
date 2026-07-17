import meImage from "../assets/me.jpeg";
import project1CheckinImage from "../assets/project1/checkin.png";
import project1DashboardImage from "../assets/project1/dashboard.png";
import project1MembersImage from "../assets/project1/members.png";
import project2AnalysisImage from "../assets/project2/analysis.png";
import project2TasksImage from "../assets/project2/tasks.png";
import project2TeamImage from "../assets/project2/team.png";
import project3WordleeImage from "../assets/project3/wordlee.png";
import project4MovieHomeImage from "../assets/project4/movieHome.png";
import project4SearchedMovieImage from "../assets/project4/searchedMovie.png";
import project4TrendingMoviesImage from "../assets/project4/trendingMovies.png";

export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
]; 

export const profile = {
  name: "Mustapha bllouch",
  title: "Full Stack Web Developer",
  description:
    "I build modern, scalable web applications with Laravel, React, Node.js, and cloud technologies while continuously improving system reliability and developer experience.",
  email: "mustaphabllouch10@gmail.com",
  github: "https://github.com/mustaphabllouch10",
  linkedin: "http://www.linkedin.com/in/MustaphaBllouch10",
  location: "Agadir, Morocco",
  cvUrl: "/cv.pdf",
  image: meImage,
};

export const heroContent = {
  name: profile.name,
  title: profile.title,
  description: profile.description,
  stats: ["React", "Express", "Laravel", "Javascript", "MySQL", "MongoDB"],
};

export const aboutContent = {
  intro:
    "I started learning web development because I wanted to create products that solve real problems and feel effortless to use. Over time, that curiosity grew into a focus on backend architecture, clear APIs, and maintainable software systems.",
  milestones: [
    {
      year: "2020",
      title: "Started learning web development",
      description:
        "Explored HTML, CSS, JavaScript, and built a strong foundation for creating interactive experiences.",
    },
    {
      year: "2022",
      title: "Built multiple full-stack projects",
      description:
        "Delivered personal and client-facing applications using modern React and Laravel workflows.",
    },
    {
      year: "2024",
      title: "Focused on backend architecture",
      description:
        "Deepened my understanding of APIs, database design, authentication, and scalable service patterns.",
    },
    {
      year: "2026",
      title: "Exploring DevOps and cloud deployment",
      description:
        "Continuing to improve reliability through automation, deployment pipelines, and observability.",
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
        { name: "React", level: "Advanced", icon: "react", progress: 92 },
        {
          name: "JavaScript",
          level: "Advanced",
          icon: "javascript",
          progress: 90,
        },
        { name: "HTML", level: "Advanced", icon: "code2", progress: 94 },
        { name: "CSS", level: "Advanced", icon: "palette", progress: 91 },
        { name: "Tailwind", level: "Advanced", icon: "sparkles", progress: 93 },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Laravel", level: "Advanced", icon: "server", progress: 90 },
        { name: "PHP", level: "Intermediate", icon: "database", progress: 86 },
        { name: "Node.js", level: "Intermediate", icon: "cpu", progress: 82 },
        { name: "Express", level: "Intermediate", icon: "zap", progress: 78 },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MySQL", level: "Advanced", icon: "database", progress: 88 },
        {
          name: "MongoDB",
          level: "Intermediate",
          icon: "database",
          progress: 74,
        },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", level: "Advanced", icon: "gitBranch", progress: 90 },
        { name: "GitHub", level: "Advanced", icon: "github", progress: 92 },
        {
          name: "VS Code",
          level: "Advanced",
          icon: "terminalSquare",
          progress: 95,
        },
        { name: "Postman", level: "Intermediate", icon: "send", progress: 80 },
        { name: "Docker", level: "Learning", icon: "container", progress: 10 },
        { name: "Linux", level: "Learning", icon: "terminal", progress: 10 },
        { name: "DevOps", level: "Learning", icon: "cloud", progress: 10 },
      ],
    },
  ],
};

export const projectsContent = [
  {
    id: 1,
    title: "GymFLow",
    description:
      "Developed a comprehensive gym management system designed to simplify daily operations for fitness centers. The platform allows administrators to manage members, employees, subscriptions, and attendance records through a centralized dashboard. Members can check in and out using QR codes, enabling fast and accurate attendance tracking. The system also provides tools for monitoring active memberships, managing subscription plans, tracking employee activities, and generating insights to improve overall gym management efficiency.",
    images: [
      project1CheckinImage,
      project1DashboardImage,
      project1MembersImage,
    ],
    technologies: ["React" , "vite" , "Laravel", "MySQL", "Tailwind"],
    features: ["Admin dashboard", "QR code scanner", "Insights views"],
    challenges: ["Complex inventory rules", "Multi-role permissions"],
    lessons: [
      "Structure APIs around business flows",
      "Design with clarity first",
    ],
    github: profile.github,
    demo: "https://github.com/mustaphabllouch10/GymFlow.git",
  },
  {
    id: 2,
    title: "Project Manager",
    description:
      "A focused workspace for planning tasks, monitoring team progress, and keeping project details organized in one place.",
    images: [project2AnalysisImage, project2TasksImage, project2TeamImage],
    technologies: ["React" , "vite" ],
    features: [
      "Dynamic scheduling",
      "Real-time availability",
      "User-friendly checkout",
    ],
    challenges: ["Conflict handling", "Fast response times"],
    lessons: ["Validate early", "Keep forms predictable"],
    github: profile.github,
    demo: "https://github.com/mustaphabllouch10/taskManager-Pro.git",
  },
  {
    id: 3,
    title: "Wordlee Clone",
    description:
      "A polished word puzzle experience built with a simple, engaging interface and smooth daily gameplay flow.",
    images: [project3WordleeImage],
    technologies: [ "React" , "Vite" , "API"],
    features: ["Project updates", "Feedback boards", "Authentication flows"],
    challenges: ["Complex permissions", "Reliable background jobs"],
    lessons: ["Keep domain logic modular", "Document operational processes"],
    github: profile.github,
    demo: "https://github.com/mustaphabllouch10/wordle.git",
  },
  {
    id: 4,
    title: "MovieFlix",
    description:
      "A movie discovery app with a cinematic homepage, intelligent search, and trending collections for browsing new releases.",
    images: [
      project4MovieHomeImage,
      project4SearchedMovieImage,
      project4TrendingMoviesImage,
    ],
    technologies: ["React", "Vite", "Tailwind", "TMDB API"],
    features: [
      "Trending catalog",
      "Search experience",
      "Movie detail browsing",
    ],
    challenges: ["API state handling", "Responsive media layouts"],
    lessons: [
      "Keep UI feedback immediate",
      "Design around content-first flows",
    ],
    github: profile.github,
    demo: "https://github.com/mustaphabllouch10/MovieFlix.git",
  },
];

export const experienceContent = [
  {
    title: "Education",
    period: "2024 — 2026",
    description:
      "Studied software engineering principles, modern architecture, and independent product development through hands-on projects.",
  },
  {
    title: "internship",
    period: "1 month",
    description:
      "Developed an internal employee management platform during my internship that streamlines daily operations within the company. The system enables employees to view and manage their daily tasks, while providing administrators with tools to track expenses, monitor attendance through a fingerprint-based time tracking system, and manage employee records. It also includes WhatsApp integration to improve communication and automate notifications across the organization.",
  },
  {
    title: "Personal Projects",
    period: "2025 — Present",
    description:
      "Created polished web experiences centered on maintainability, performance, and strong developer workflows.",
  },
  {
    title: "Future Goals",
    period: "2026+",
    description:
      "Continue growing into distributed systems, platform engineering, and high-scale deployment practices.",
  },
];

export const socialLinks = [
  { label: "GitHub", url: profile.github },
  { label: "LinkedIn", url: profile.linkedin },
];
