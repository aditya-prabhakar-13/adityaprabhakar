import { 
  Code2, 
  Database, 
  Server, 
  Wrench,
  Globe,
  Smartphone,
  Cloud,
  GitBranch
} from "lucide-react";

export interface Skill {
  name: string;
  level: number; // 1-100
}

export interface SkillCategory {
  title: string;
  icon: typeof Code2;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Globe,
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 95 },
      { name: "Javascript", level: 80 },
      { name: "React.js", level: 95 },
      { name: "Tailwind CSS", level: 92 },
      // { name: "Vue.js", level: 75 },
      // { name: "Framer Motion", level: 80 },
    ]
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Django", level: 88 },
      // { name: "GraphQL", level: 82 },
      { name: "REST APIs", level: 95 },
      { name: "Next JS", level: 55 },
      // { name: "Rust", level: 60 },
    ]
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      // { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      // { name: "Redis", level: 80 },
      { name: "MySQL", level: 90 },
      { name: "SQLite", level: 90 },
      // { name: "Firebase", level: 75 },
    ]
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    skills: [
      // { name: "Docker", level: 88 },
      // { name: "AWS", level: 82 },
      { name: "Git", level: 95 },
      // { name: "CI/CD", level: 85 },
      // { name: "Linux", level: 80 },
      // { name: "Kubernetes", level: 70 },
    ]
  }
];

export const experiences = [
  {
    "id": 1,
    "role": "Web Developer Intern",
    "company": "AYUSH Upchar",
    "period": "Aug.2025 - Oct.2025",
    "description": "Conducted a comprehensive website performance audit using Google PageSpeed Insights, analyzing Core Web Vitals and identifying major performance gaps across desktop and mobile platforms.",
    "achievements": [
      "Quantified inefficiencies including 1.5 MB+ unused JavaScript and 45 KB unused CSS",
      "Authored optimization report projecting PageSpeed improvements to 90+ (desktop) and 75+ (mobile)",
      "Documented SEO and accessibility enhancements targeting an SEO score of 90+"
    ],
    "technologies": ["Google PageSpeed Insights", "JavaScript", "CSS", "CDN", "HTML"]
  },
  // {
  //   id: 2,
  //   role: "Full Stack Developer",
  //   company: "StartupXYZ",
  //   period: "2020 - 2022",
  //   description: "Built core product features from scratch, contributing to $5M Series A funding.",
  //   achievements: [
  //     "Developed real-time collaboration features",
  //     "Implemented payment integration processing $2M+ annually",
  //     "Optimized database queries reducing load times by 50%"
  //   ],
  //   technologies: ["Vue.js", "Python", "MongoDB", "GCP"]
  // },
  // {
  //   id: 3,
  //   role: "Software Engineer",
  //   company: "DevAgency",
  //   period: "2018 - 2020",
  //   description: "Delivered 15+ client projects on time with high satisfaction ratings.",
  //   achievements: [
  //     "Built custom CMS used by 50+ clients",
  //     "Mentored 3 junior developers",
  //     "Achieved 98% client satisfaction rate"
  //   ],
  //   technologies: ["React", "Node.js", "MySQL", "Redis"]
  // },
  {
    id: 2,
    role: "Competitive Programmer",
    company: "Contests",
    period: "2025 - Present",
    description: "Active competitive programmer",
    achievements: [
      "Codeforces rating: Newbie (1000+)",
      "Solved 75+ Problems",
    ],
    technologies: ["C++", "Java", "Algorithms", "Data Structures"]
  }
];
