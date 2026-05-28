// Centralized profile data for site sections
// NOTE: Update this file to propagate changes across Experience, Projects, Skills, Resume, etc.

export interface ExperienceBullet {
  text: string;
  highlights?: string[]; // phrases to emphasize
}

export interface ExperienceEntry {
  company: string;
  role: string;
  description?: string; // brief summary of focus area
  location: string;
  start: string; // e.g. "Jun 2025"
  end: string;   // e.g. "Aug 2025" or "Present"
  logo?: string;
  bullets: ExperienceBullet[];
}

export interface ProjectEntry {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
  highlightMetric?: string; // optional key metric
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface AwardEntry {
  title: string;
  description: string;
  date?: string;
  highlight?: boolean;
}

// EXPERIENCE
export const experience: ExperienceEntry[] = [
  {
    company: 'Roblox',
    role: 'Software Engineering Intern',
    description: 'Infra > Compute > Cell Lifecycle',
    location: 'San Mateo, CA',
    start: 'Jan 2026',
    end: 'Present',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Roblox_player_icon_black.svg/1200px-Roblox_player_icon_black.svg.png',
    bullets: [
      { text: 'Building GPU integration services within the Cell Lifecycle team, enabling automated provisioning and lifecycle management of GPU-accelerated workloads across Roblox\'s Kubernetes clusters.' },
      { text: 'Developing scalable backend infrastructure to orchestrate GPU resource allocation, health monitoring, and seamless cell transitions, supporting low-latency compute for a global user base of 70M+.' }
    ]
  },
  {
    company: 'Fidelity Investments',
    role: 'Quantitative Research Intern',
    description: 'Equity Trading | Systematic Trading and Analytics Platform',
    location: 'Boston, MA',
    start: 'Jun. 2025',
    end: 'Aug. 2025',
    bullets: [
      { text: 'Piloted a model-driven trade router, scaling trade volume by 1.4x and saving $200K+ over 300+ hedge funds.' },
      { text: 'Developed and integrated backend machine learning models in Python and Kdb+/Q to optimize routing for 25M+ trades, improving selection accuracy by 20% and reducing decision latency below 10 ms.' },
      { text: 'Constructed automated training, deployment, and data pipelines on AWS EKS using Jenkins CI/CD with containerized microservices and MLflow, supporting reproducible model versioning and rollback in production.' }
    ]
  },
  {
    company: 'Waters Corporation',
    role: 'Software Engineering Intern',
    description: 'IT Development & SAP Systems',
    location: 'Milford, MA',
    start: 'May 2024',
    end: 'Aug. 2024',
    bullets: [
      { text: 'Engineered a full-stack automated renewal quote system using Python, RESTful APIs, and a responsive UI, reducing manual workload by 100+ hours monthly, streamlining sales operations.' },
      { text: 'Designed multiple REST APIs to retrieve customer SharePoint resources by environment ID, decreasing mitigation times from hours to minutes for runtime incidents, reducing loads for on-call engineering teams.' },
      { text: 'Developed high-concurrency C# modules to interface with SAP S/4HANA, optimizing SQL query execution and reducing transaction latency by 25%.' }
    ]
  },
  {
    company: 'Build UMass',
    role: 'Software Engineer',
    description: 'Full-Stack Development',
    location: 'Amherst, MA',
    start: 'Feb. 2024',
    end: 'May. 2024',
    logo: 'https://npr.brightspotcdn.com/ef/7b/c4150f41446c884292aab3e3b182/medium-pms-202.png',
    bullets: [
      { text: 'Led full-stack development of a consulting platform using MERN stack, deployed on Dockerized AWS EC2 with Nginx load balancing and GitHub Actions CI/CD.' },
      { text: 'Rebuilt RESTful APIs with pagination, Redis caching, and profiling, reducing latency by 40% and supporting 5x higher concurrent request volumes.' },
      { text: 'Partnered with designers to improve UI responsiveness and reduce load times by 20% for 200+ concurrent users.' }
    ]
  },
  {
    company: 'MIT Lincoln Laboratory',
    role: 'Embedded Systems Intern',
    description: 'Cyber Security and Embedded Systems',
    location: 'Cambridge, MA',
    start: 'May 2021',
    end: 'Aug. 2022',
    bullets: [
      { text: 'Built a secure bootloader for Stellaris microcontrollers (C/Assembly) and designed penetration testing frameworks (Python/SQL), patching 16+ vulnerabilities and earning 1st place in the MITLL Cybersecurity Challenge.' }
    ]
  }
];

// PROJECTS
export const projects: ProjectEntry[] = [
  {
    title: 'BTC Market Outlook',
    description: 'Serverless Bitcoin sentiment dashboard tracking market sentiment via NLP (FinBERT) on news & Reddit. Automated on GitHub infrastructure.',
    tech: ['Next.js', 'FastAPI', 'FinBERT', 'Python', 'Tailwind'],
    link: 'https://btc-delta-one.vercel.app',
    repo: 'https://github.com/jtron780/BTC',
    highlightMetric: 'Live NLP Sentiment'
  },
  {
    title: 'IUCG Website',
    description: 'Full-stack MERN application with optimized REST APIs and 30% performance improvement.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://www.isenbergconsulting.com/',
    highlightMetric: '30% faster'
  },
  {
    title: 'GenAI Transportation ChatBot',
    description: 'AI-powered chatbot for transportation queries using LangChain, FAISS vector database, and Streamlit interface.',
    tech: ['Python', 'LangChain', 'FAISS', 'Streamlit', 'Pandas'],
    repo: 'https://github.com/JTRON780/Transportation-ChatBot'
  }
];

// SKILL CATEGORIES
export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'C/C++', 'SQL', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Powershell']
  },
  {
    title: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'Django', 'FastAPI', 'Pandas', 'JUnit', 'REST APIs']
  },
  {
    title: 'Tools & Platforms',
    items: ['Docker', 'Git', 'Google Cloud', 'Linux', 'VMware', 'VS Code']
  },
  {
    title: 'Core Skills',
    items: ['AI/ML', 'Software Design', 'Embedded Systems', 'Cloud Computing', 'Agile/Scrum']
  }
];

// AWARDS
export const awards: AwardEntry[] = [
  {
    title: 'CPTC 3rd Place Global',
    description: 'Collegiate Penetration Testing Competition Finals placement (Top 3 globally).',
    date: 'Jan 2024',
    highlight: true
  },
  {
    title: 'National Cyber Scholar w/ Honors',
    description: 'Top 2% nationally; $500 scholarship award.',
    date: 'May 2023'
  },
  {
    title: 'CyberPatriot 3× State Winner',
    description: '1st in MA; Top 100 of 2000+ teams.',
    date: '2020–2023'
  }
];

// EDUCATION (optional future extraction)
export const education = {
  institution: 'University of Massachusetts, Amherst',
  degree: 'B.S. Computer Science (GPA 3.75)',
  start: 'Aug 2023',
  end: 'May 2026',
  location: 'Amherst, MA',
  coursework: ['Data Structures', 'Algorithms', 'Artificial Intelligence', 'C Programming', 'Java', 'Calculus III']
};
