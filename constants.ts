
import type { Project, Skill, Experience } from './types';

export const PROFILE = {
  name: "Fakhar Asif",
  title: "JR Full-Stack Developer",
  subtitle: "React | JS | Laravel | MySQL",
  summary: "A Full-Stack Developer specializing in building and deploying scalable web applications with React and Laravel. Passionate about performance optimization, cloud deployment, and writing clean, user-centered code.",
  about: "Junior Full-Stack Developer with hands-on experience building and deploying scalable web applications using React.js, Laravel, and MySQL. Improved web performance by 40% and API response time by 25% through optimized front-end and backend integration. Skilled in Al-assisted coding, Stripe integration, and cloud deployment on Netlify and Vercel, with a strong focus on clean, maintainable code and user-centered design.",
  email: "fakharasif264@gmail.com",
  phone: "+92 343 4889866",
  location: "Sheikhupura Road, Lahore, Pakistan",
};

export const PROJECTS: Project[] = [
  {
    title: "PromptVerse",
    image: "https://picsum.photos/seed/promptverse/400/300",
    description: "A full-stack AI-integrated web app for discovering, creating, and sharing creative prompts.",
    link: "https://promptverse1.netlify.app/",
  },
  {
    title: "K-DN Dashboard",
    image: "https://picsum.photos/seed/kdn/400/300",
    description: "A client dashboard built with React.js and Laravel, featuring analytics modules.",
    link: "https://fakhar077.github.io/K-DN-Dashboard/",
  },
  {
    title: "Global Horizon Foundation NGO",
    image: "https://picsum.photos/seed/ngo/400/300",
    description: "A website for a non-governmental organization to showcase their mission and projects, built with React.js.",
    link: "https://fakhar077.github.io/Global-Horizon-Foundation-NGO/",
  },
  {
    title: "ArSkinCare",
    image: "https://picsum.photos/seed/skincare/400/300",
    description: "An e-commerce platform for skincare products, deployed with a clean and modern user interface.",
    link: "https://fakhar077.github.io/ArSkinCare/#/",
  },
];

export const SKILLS: Skill[] = [
    { name: "React.js", category: "Frontend" },
    { name: "Vue.js", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "Tailwind", category: "Frontend" },
    { name: "Bootstrap", category: "Frontend" },
    { name: "Laravel", category: "Backend" },
    { name: "REST APIs", category: "Backend" },
    { name: "MySQL", category: "Database" },
    { name: "Firebase", category: "Database" },
    { name: "Stripe Integration", category: "Other" },
    { name: "Docker", category: "Tools" },
    { name: "Git/GitHub", category: "Tools" },
    { name: "Deployment", category: "Tools" },
    { name: "AI-Assisted Coding", category: "Tools" },
    { name: "Debugging", category: "Tools" },
    { name: "Python data analysis", category: "Other" },
];

export const EXPERIENCES: Experience[] = [
    {
        role: "Teaching Assistant & Intern",
        company: "SZIIT, China",
        period: "JAN 2025 - JUN 2025",
        description: [
            "Built and deployed NGO and e-commerce websites using React.js and Laravel, improving responsiveness by 40%.",
            "Developed PromptVerse, a full-stack Al-integrated web app.",
            "Engineered an Al-powered image styling app for real-time hairstyle changes.",
            "Integrated Stripe payments, managed databases, and deployed on Netlify/Vercel.",
            "Delivered technical demos and collaborated with cross-functional teams."
        ],
    },
    {
        role: "Hybrid Full-Stack Developer Intern",
        company: "Solution Forum",
        period: "Ongoing",
        description: [
            "Developed client dashboards in React.js and Laravel with analytics modules.",
            "Optimized frontend and backend performance, improving load speed by 25%.",
            "Built RESTful APIs and implemented authentication flows for secure access."
        ],
    }
];

export const EDUCATION = [
    {
        degree: "DAE in Software Technology",
        institution: "SZIIT, China",
        period: "2022 - 2025",
    },
    {
        degree: "Matriculation (Science)",
        institution: "Punjab Board",
        period: "2021 - 2022",
    },
];

export const CERTIFICATIONS = [
    "IBM Certified Data Analyst (In Progress, 50% Completed)",
    "Data Annotation & Al Vocational Skills Project",
    "HSK3 Certification (Conversational Chinese) - Preparing for HSK4",
    "Honor Certificate for Outstanding Performance in Al data training course.",
];

export const LANGUAGES = [
    { lang: "Urdu", proficiency: "Fluent" },
    { lang: "English", proficiency: "Normal" },
    { lang: "Chinese", proficiency: "HSK3 Certified" },
];

export const SOCIAL_LINKS = {
    github: "https://github.com/fakhar077",
    linkedin: "https://linkedin.com/in/fakhar-asif-dev",
    whatsapp: "https://wa.me/923434889866",
    portfolio: "https://fakharprotfolio.netlify.app",
};