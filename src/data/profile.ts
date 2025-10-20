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
    company: 'Fidelity Investments',
    role: 'Equity – Quantitative Intern',
    description: 'Equity Trading | Systematic Trading and Analytics Platform',
    location: 'Boston, MA',
    start: 'Jun 2025',
    end: 'Aug 2025',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjp7mSjC2egqIxP4XMrA-mKs6jlyi2fhgmbQ&s',
    bullets: [
      { text: 'Built and deployed a low-latency trade-routing platform in Kubernetes with Kdb+/Q and Python, scaling Trading capacity 30% and saving $5M+ across clients.', highlights: ['30%', '$5M+'] },
      { text: 'Developed MLflow-based training pipelines and feature stores to automate model retraining, reducing retrain cycle time by 40%.', highlights: ['40%'] },
      { text: 'Integrated models and APIs into Fidelity\'s NEO framework and trader UI, collaborating with quant and systems teams to ensure fault-tolerant, production-ready deployment.' }
    ]
  },
  {
    company: 'Waters Corporation',
    role: 'Software Engineering (RPA) Intern',
    description: 'IT Development & SAP Systems',
    location: 'Milford, MA',
    start: 'May 2024',
    end: 'Aug 2024',
    logo: 'https://ispe.org/sites/default/files/2021-03/Waters%20%20logo.jpg',
    bullets: [
      { text: 'Built automated renewal quote system with Python & SQL saving 100+ hours / month.' },
      { text: 'Integrated AI automation workflows in UI Path using C# for invoice processing (SAP S/4HANA).' },
      { text: 'Developed Intune ↔ SharePoint integration via Microsoft Graph & REST APIs.' }
    ]
  },
  {
    company: 'Build UMass',
    role: 'Software Developer',
    description: 'Full-Stack Development',
    location: 'Amherst, MA',
    start: 'Feb 2024',
    end: 'Present',
    logo: 'https://npr.brightspotcdn.com/ef/7b/c4150f41446c884292aab3e3b182/medium-pms-202.png',
    bullets: [
      { text: 'Leading MERN (MongoDB Express React Node) development for IUCG platform with scalable APIs layer.' },
      { text: 'Improved site performance by 30% via query optimization & caching.' },
      { text: 'Collaborate cross-functionally using Agile ceremonies & code reviews Docker.' }
    ]
  },
  {
    company: 'MIT Lincoln Laboratory',
    role: 'Embedded Systems Researcher',
    description: 'Cyber Security and Embedded Systems',
    location: 'Cambridge, MA',
    start: 'May 2021',
    end: 'Aug 2022',
    logo: 'https://pbs.twimg.com/profile_images/1380233126354558979/ltnN7Gl4_400x400.jpg',
    bullets: [
      { text: '1st place – BWSI Penetration Testing competition.' },
      { text: 'Engineered secure bootloader for Stellaris microcontrollers (C, Assembly, AES-GCM).' },
      { text: 'Developed penetration testing framework in Linux; mitigated 16 critical vulns.' }
    ]
  }
];

// PROJECTS
export const projects: ProjectEntry[] = [
  {
    title: 'Dusty',
    description: 'Plant disease detection using CNNs on 20K images achieving 82% accuracy (F1: 81%).',
    tech: ['Python', 'OpenCV', 'Keras', 'Scikit-learn'],
    repo: 'https://github.com/NxtGenLegend/DGMD-S-17',
    highlightMetric: '82% accuracy'
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
