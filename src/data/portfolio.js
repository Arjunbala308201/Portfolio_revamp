import {
  Code2,
  Server,
  Layout,
  Database,
  Globe,
  GitBranch,
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  Shield,
  Layers,
  Workflow,
  Users,
  Zap,
} from 'lucide-react';

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const heroData = {
  greeting: "Hi, I'm",
  name: 'Arjun S.A',
  title: 'Full Stack Developer',
  tagline: 'Building robust, scalable web applications with the MERN & MEAN stack. Passionate about clean code, modern architecture, and delivering exceptional user experiences.',
};

export const aboutData = {
  summary: "I'm a Full Stack Developer with 1 year of professional experience building production-grade web applications. I specialize in the MERN and MEAN stacks, and I thrive in fast-paced, collaborative environments.",
  highlights: [
    {
      icon: Code2,
      title: '1+ Year Experience',
      description: 'Building production applications with modern JavaScript frameworks and best practices.',
    },
    {
      icon: Layers,
      title: 'MERN & MEAN Stack',
      description: 'Deep expertise across React, Angular, Node.js, Express, and MongoDB ecosystems.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Experience working with international teams, following agile workflows and code review practices.',
    },
    {
      icon: Zap,
      title: 'Modern Architecture',
      description: 'Micro-frontend architecture, GraphQL APIs, and scalable system design.',
    },
  ],
};

export const skillsData = {
  frontend: {
    title: 'Frontend',
    icon: Layout,
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Angular', 'NgRx', 'Svelte'],
  },
  backend: {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'GraphQL', 'REST APIs', 'SQL', 'MySQL', 'PostgreSQL'],
  },
  tools: {
    title: 'Tools & DevOps',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'GitLab', 'Gitea', 'VS Code', 'Postman', 'Swagger', 'DBeaver', 'npm', 'Webpack', 'Vite', 'Docker', 'Jira', 'Figma'],
  },
};

export const experienceData = [
  {
    company: 'Gptysoft Solutions Pvt Ltd',
    role: 'Junior Full Stack Developer',
    duration: 'Jun 2025 – Present',
    location: 'Chennai, India',
    points: [
      'Developed and maintained a vehicle insurance portal serving multiple insurance providers with a focus on user experience and reliability.',
      'Implemented micro-frontend architecture enabling independent deployment of feature modules across teams.',
      'Built and optimized GraphQL APIs for efficient data fetching, reducing over-fetching by 40% compared to REST endpoints.',
      'Designed and integrated an automated email notification system for policy renewals, claims updates, and user onboarding.',
      'Collaborated with an international team following agile methodology with sprint planning, code reviews, and CI/CD practices.',
    ],
  },
  {
    company: 'Spangles InfoTech',
    role: 'MERN stack Developer Intern',
    duration: 'Oct 2024 – Dec 2024',
    location: 'Nagercoil, India',
    certificate: '/internship-certificate.pdf',
    points: [
      'Completed a hands-on internship focused on web development, contributing to various real-world projects.',
      'Gained practical experience in building and maintaining web applications using modern technologies.',
      'Demonstrated strong commitment, professionalism, and dedication throughout the internship period.',
    ],
  },
];

export const projectsData = {
  team: [
    {
      id: 'vehicle-insurance-portal',
      title: 'Vehicle Insurance Portal',
      category: 'Team Project',
      shortDesc: 'A comprehensive insurance management platform for vehicle policies, claims processing, and provider management.',
      fullDesc: 'A full-featured vehicle insurance portal that streamlines the entire insurance lifecycle — from policy comparison and purchase to claims filing and tracking. Built with a micro-frontend architecture for scalability and independent deployments.',
      techStack: ['Angular', 'NgRx', 'Node.js', 'Express', 'SQL', 'GraphQL', 'Tailwind CSS'],
      features: [
        'Multi-provider policy comparison and instant quotes',
        'Secure user authentication and role-based access control',
        'Claims submission with document upload and status tracking',
        'Automated email notifications for renewals and claim updates',
        'Admin dashboard with analytics and reporting',
        'Responsive design optimized for mobile and desktop',
      ],
      contributions: [
        'Architected the micro-frontend setup enabling independent module deployment',
        'Built the GraphQL API layer for efficient data querying across services',
        'Developed the email notification microservice for automated communications',
        'Implemented responsive UI components following design system guidelines',
        'Participated in code reviews and sprint planning with the international team',
      ],
      images: [
        { alt: 'Dashboard Overview', placeholder: true },
        { alt: 'Policy Comparison', placeholder: true },
        { alt: 'Claims Management', placeholder: true },
        { alt: 'User Profile', placeholder: true },
      ],
    },
  ],
  individual: [
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform',
      shortDesc: 'A full-stack e-commerce application with product management, cart, checkout, and payment integration.',
      techStack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      github: 'https://github.com/Arjunbala308201/e-commerce',
      live: 'https://e-commerce-1-xee4.onrender.com/',
      video: 'ecommVideo',
      features: [
        'Product catalog with search and filters',
        'Shopping cart with real-time updates',
        'Secure checkout with Stripe integration',
        'Order history and tracking',
        'Admin panel for inventory management',
      ],
    },
    {
      id: 'task-manager',
      title: 'Task Management App',
      shortDesc: 'A simple CRUD app to create, search, and assign tasks to team members.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Arjunbala308201/Task-Manager',
      live: 'https://task-manager-4-react.onrender.com/',
      image: 'tm1',
      features: [
        'Create, read, update, and delete tasks',
        'Search tasks based on any input field',
        'Assign tasks to team members',
        'Clean and intuitive user interface',
        'Responsive design for mobile and desktop',
      ],
    },
  ],
};

export const contactData = {
  email: 'saarjun04@gmail.com',
  phone: '+91 8778799891',
  linkedin: 'https://www.linkedin.com/in/arjun-bala-906721251/',
  github: 'https://github.com/Arjunbala308201',
};
