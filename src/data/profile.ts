// Centralized profile data for site sections
// NOTE: Update this file to propagate changes across Experience, Projects, Skills, Resume, etc.

export interface ContactInfo {
  name: string;
  phone: string;
  email: string;
  linkedin: string;
  linkedinDisplay: string;
  github: string;
  githubDisplay: string;
  location: string;
}

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

// CONTACT INFO — single source of truth for header, resume, about, etc.
export const contact: ContactInfo = {
  name: 'Johan Lakshmanan',
  phone: '339-206-1334',
  email: 'johan.lakshmanan@gmail.com', // TODO: update to your preferred personal email
  linkedin: 'https://linkedin.com/in/JLakshmanan',
  linkedinDisplay: 'linkedin.com/in/JLakshmanan',
  github: 'https://github.com/JTRON780',
  githubDisplay: 'github.com/JTRON780',
  location: 'San Mateo, CA',
};

// EXPERIENCE
export const experience: ExperienceEntry[] = [
  {
    company: 'Dell Technologies',
    role: 'Software Engineer',
    description: '',
    location: 'Hopkinton, MA',
    start: 'Aug. 2026',
    end: 'Present',
    bullets: [
      { text: 'Working on microservices and Kubernetes-based infrastructure.' },
      { text: 'Developing and maintaining cloud-native applications and services.' }
    ]
  },
  {
    company: 'Roblox',
    role: 'Software Engineering Intern',
    description: 'Infra > Compute > Cell Lifecycle',
    location: 'San Mateo, CA',
    start: 'May 2026',
    end: 'Aug. 2026',
    logo: 'https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/0/e/e/0eeeb19633422b1241f4306419a0f15f39d58de9.png',
    bullets: [
      { text: 'Architected a bare-metal GPU provisioning platform supporting 15+ clusters powering GenAI workloads for Roblox\'s 70M+ daily users.' },
      { text: 'Eliminated 5+ min node boot penalties by pre-baking CUDA drivers with open kernel modules, preventing DKMS build collisions and version mismatches during weekly fleet patching.' },
      { text: 'Ensured GPU readiness for GenAI workloads by automating CI/CD validation on self-hosted GitHub Actions runners, writing bash scripts to map PCI addresses, load vfio-pci modules, and gate deployments on hardware checks.' },
      { text: 'Built a Kubernetes GPU validation stack on AWS, deploying the NVIDIA GPU Operator cascade and vLLM inference pipelines to validate bare-metal provisioning workflows before production rollout.' }
    ]
  },
  {
    company: 'Fidelity Investments',
    role: 'Quantitative Research Intern',
    description: 'Equity Trading | Systematic Trading and Analytics Platform',
    location: 'Boston, MA',
    start: 'Jun 2025',
    end: 'Aug 2025',
    bullets: [
      { text: 'Piloted a model-driven trade router, scaling daily trade volume by 1.4x and saving $200K+ annually across 300+ hedge funds.' },
      { text: 'Developed and integrated backend machine learning models in Python and Kdb+/Q to optimize routing for 25M+ daily trades, improving selection accuracy by 20% and reducing decision latency below 10 ms.' },
      { text: 'Built automated ML training and deployment pipelines on AWS EKS with Jenkins CI/CD and containerized microservices, enabling reproducible model versioning and one-click rollback in production via MLflow.' }
    ]
  },
  {
    company: 'Waters Corporation',
    role: 'Software Engineering Intern',
    description: 'IT Development & SAP Systems',
    location: 'Milford, MA',
    start: 'May 2024',
    end: 'Aug 2024',
    bullets: [
      { text: 'Engineered a full-stack automated renewal quote system using Python, RESTful APIs, and a responsive UI, reducing manual workload by 100+ hours monthly and streamlining sales operations.' },
      { text: 'Designed REST APIs to retrieve customer SharePoint resources by environment ID, decreasing incident mitigation times from hours to minutes and reducing on-call engineering workload.' },
      { text: 'Developed high-concurrency C# modules to interface with SAP S/4HANA, optimizing SQL query execution and reducing transaction latency by 25%.' }
    ]
  },
  {
    company: 'MIT Lincoln Laboratory',
    role: 'Embedded Systems Intern',
    description: 'Cyber Security and Embedded Systems (Beaver Works Summer Institute - High School Internship)',
    location: 'Cambridge, MA',
    start: 'May 2021',
    end: 'Aug 2022',
    bullets: [
      { text: 'Engineered a secure bootloader for Stellaris ARM microcontrollers in C and Assembly, implementing cryptographic firmware verification and secure update chains.' },
      { text: 'Designed Python and SQL penetration testing frameworks, identifying and patching 16+ vulnerabilities; earned 1st place in the MITLL Cybersecurity Challenge.' }
    ]
  }
];

// PROJECTS
export const projects: ProjectEntry[] = [
  {
    title: 'BTC Market Outlook',
    description: 'Serverless Bitcoin sentiment dashboard analyzing 500+ articles daily via NLP (FinBERT) across news & Reddit sources. Automated on GitHub infrastructure.',
    tech: ['Next.js', 'FastAPI', 'FinBERT', 'Python', 'Tailwind'],
    link: 'https://btc-delta-one.vercel.app',
    repo: 'https://github.com/jtron780/BTC',
    highlightMetric: '500+ Articles/Day'
  },
  {
    title: 'IUCG Website',
    description: 'Full-stack MERN consulting platform with optimized REST APIs, Redis caching, and 30% faster page loads for 200+ active users.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://www.isenbergconsulting.com/',
    highlightMetric: '200+ Active Users'
  },
  {
    title: 'GenAI Transportation ChatBot',
    description: 'AI-powered chatbot for transportation queries using LangChain RAG over 50K+ transit records, FAISS vector search, and Streamlit interface.',
    tech: ['Python', 'LangChain', 'FAISS', 'Streamlit', 'Pandas'],
    repo: 'https://github.com/JTRON780/Transportation-ChatBot',
    highlightMetric: 'RAG Pipeline'
  }
];

// SKILL CATEGORIES
export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'C/C++', 'TypeScript', 'JavaScript', 'SQL', 'Kdb+/Q', 'Bash', 'HTML/CSS']
  },
  {
    title: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'Express', 'Django', 'FastAPI', 'LangChain', 'FAISS', 'vLLM', 'MLflow', 'Pandas', 'Redis', 'Tailwind CSS']
  },
  {
    title: 'Tools & Platforms',
    items: ['AWS (EC2, EKS, S3)', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions', 'Nginx', 'Git', 'Google Cloud', 'Linux', 'Nix', 'CUDA', 'SAP S/4HANA']
  },
  {
    title: 'Core Skills',
    items: ['Distributed Systems', 'GenAI Infrastructure', 'GPU Provisioning', 'LLM Serving', 'System Design', 'Microservices', 'AI/ML', 'Networking', 'Embedded Systems', 'Cloud Computing', 'Agile/Scrum']
  }
];

// AWARDS
export const awards: AwardEntry[] = [
  {
    title: 'Hack UMass — Best ML Hack',
    description: 'Winner of Best Machine Learning Hack at Hack UMass hackathon.',
    date: 'Nov 2024',
    highlight: true
  },
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
  }
];

// EDUCATION
export const education = {
  institution: 'University of Massachusetts, Amherst',
  degree: 'B.S. Computer Science',
  gpa: '3.7/4.0',
  honors: 'Dean\'s List',
  start: 'Aug 2023',
  end: 'Sep 2026',
  location: 'Amherst, MA',
  coursework: ['Operating Systems', 'Distributed Systems', 'Computer Networks', 'Algorithms', 'Machine Learning']
};