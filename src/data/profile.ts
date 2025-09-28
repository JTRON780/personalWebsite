// Centralized profile data for site sections
// NOTE: Update this file to propagate changes across Experience, Projects, Skills, Resume, etc.

export interface ExperienceBullet {
  text: string;
  highlights?: string[]; // phrases to emphasize
}

export interface ExperienceEntry {
  company: string;
  role: string;
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
    location: 'Boston, MA',
    start: 'Jun 2025',
    end: 'Aug 2025',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjp7mSjC2egqIxP4XMrA-mKs6jlyi2fhgmbQ&s',
    bullets: [
      { text: 'Saved $210K annually and scaled trading capacity by 30% by piloting a model-driven trade-routing system for hedge fund clients (Fidelity Service Bureau).', highlights: ['$210K', '30%'] },
      { text: 'Improved algorithm selection via contextual bandit ML models in Python & Kdb+/Q (Vowpal Wabbit).', highlights: ['25M+'] },
      { text: 'Achieved +20% prediction accuracy through multi-epoch training & feature optimization on TCA datasets.', highlights: ['+20%'] },
      { text: 'Leveraged Linux, Docker/Kubernetes, and Jenkins CI/CD for reproducible model validation and deployment.' },
      { text: 'Deployed production ML models for OTC trade flow, increasing accessible liquidity.' }
    ]
  },
  {
    company: 'Waters Corporation',
    role: 'Software Engineering (RPA) Intern',
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
    location: 'Amherst, MA',
    start: 'Feb 2024',
    end: 'Present',
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQEOOjB5evIbRA/company-logo_200_200/company-logo_200_200/0/1630469396055/buildumass_logo',
    bullets: [
      { text: 'Leading MERN development for IUCG platform with scalable API layer.' },
      { text: 'Improved site performance by 30% via query optimization & caching.' },
      { text: 'Collaborate cross-functionally using agile ceremonies & code reviews.' }
    ]
  },
  {
    company: 'MIT Lincoln Laboratory',
    role: 'Embedded Systems Researcher',
    location: 'Cambridge, MA',
    start: 'May 2021',
    end: 'Aug 2022',
    logo: 'https://pbs.twimg.com/profile_images/1380233126354558979/ltnN7Gl4_400x400.jpg',
    bullets: [
      { text: '1st place – BWSI Penetration Testing competition.' },
      { text: 'Engineered secure bootloader for Stellaris microcontrollers (C, Assembly, AES-GCM).' },
      { text: 'Developed penetration testing frameworks; mitigated 16 critical vulns.' }
    ]
  }
];

// PROJECTS
export const projects: ProjectEntry[] = [
  {
    title: 'Dusty',
    description: 'Plant disease detection using CNNs on 20K images achieving 82% accuracy (F1: 81%).',
    tech: ['Python', 'OpenCV', 'Keras', 'Scikit-learn'],
    repo: 'https://github.com/username/dusty',
    highlightMetric: '82% accuracy'
  },
  {
    title: 'IUCG Website',
    description: 'Full-stack MERN application with optimized REST APIs and 30% performance improvement.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    repo: 'https://github.com/username/iucg-website',
    highlightMetric: '30% faster'
  },
  {
    title: 'Secure Bootloader',
    description: 'Secure firmware boot chain for Stellaris MCUs (C, Assembly, AES-GCM, UART).',
    tech: ['C', 'Assembly', 'UART', 'AES-GCM'],
    repo: 'https://github.com/username/secure-bootloader'
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
