import { motion } from 'framer-motion'

interface ResumeItemProps {
  title: string;
  subtitle?: string;
  date: string;
  location: string;
  company?: string;
  children: React.ReactNode;
}

const ResumeItem = ({ title, subtitle, date, location, company, children }: ResumeItemProps) => (
  <div className="mb-6">
    <div className="flex justify-between mb-1">
      <h3 className="font-semibold">{title}</h3>
      <span>{date}</span>
    </div>
    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
      <p>{company || subtitle}</p>
      <p>{location}</p>
    </div>
    {children}
  </div>
);

const Resume = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="w-full px-4 py-16"
  >
    <div className="max-w-4xl mx-auto bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Johan Lakshmanan</h1>
        <div className="text-gray-600 dark:text-gray-300 space-x-2">
          <span>339-206-1334</span>
          <span>|</span>
          <a href="mailto:jlakshmanan@umass.edu" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            jlakshmanan@umass.edu
          </a>
          <span>|</span>
          <a href="https://linkedin.com/in/JLakshmanan" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            linkedin.com/in/JLakshmanan
          </a>
          <span>|</span>
          <span>Amherst, MA</span>
        </div>
      </header>

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Education</h2>
        <ResumeItem
          title="University of Massachusetts, Amherst"
          subtitle="Bachelor of Science in Computer Science | 3.75"
          date="Aug. 2023 -- May 2026"
          location="Amherst, MA"
        >
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            Relevant Coursework: Data Structures, Algorithms, Artificial Intelligence, C Programming, Java, Calculus III
          </p>
        </ResumeItem>
      </section>

      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Experience</h2>
        
        <ResumeItem
          title="Equity - Quantitative Intern"
          company="Fidelity Investments"
          date="June 2025 -- Aug. 2025"
          location="Boston, MA"
        >
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
            <li>Optimize execution quality with Systematic Trading and Analytics Platform, applying deep quantitative research across algorithms, liquidity sourcing, smart order routing, and analytics.</li>
          </ul>
        </ResumeItem>

        <ResumeItem
          title="Software Engineering Intern"
          company="Waters Corporation"
          date="May 2024 -- Aug. 2024"
          location="Milford, MA"
        >
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
            <li>Engineered an automated renewal quote system using <span className="font-semibold">Python</span> and <span className="font-semibold">SQL</span>, improving sales operations by over <span className="font-semibold">100+ hours monthly</span>.</li>
            <li>Integrated AI automation with <span className="font-semibold">C#</span> in UI Path, optimizing invoice processing in <span className="font-semibold">S/4HANA SAP</span> workflows.</li>
            <li>Developed an <span className="font-semibold">Intune-SharePoint</span> integration using APIs with <span className="font-semibold">JavaScript</span>.</li>
          </ul>
        </ResumeItem>

        <ResumeItem
          title="Software Developer"
          company="Build UMass"
          date="Feb. 2024 -- Present"
          location="Amherst, MA"
        >
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
            <li>Led MERN stack development for IUCG website, implementing scalable RESTful API endpoints.</li>
            <li>Improved website performance by 30% through streamlined API architecture.</li>
            <li>Collaborated with cross-functional team in agile workflow.</li>
          </ul>
        </ResumeItem>

        <ResumeItem
          title="Embedded Systems Researcher"
          company="MIT Lincoln Laboratory"
          date="May 2021 -- Aug. 2022"
          location="Cambridge, MA"
        >
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
            <li>Achieved 1st place in BWSI Penetration Testing competition.</li>
            <li>Developed secure bootloader for Stellaris microcontrollers using C and Assembly.</li>
            <li>Built penetration testing frameworks, patching 16 critical vulnerabilities.</li>
          </ul>
        </ResumeItem>
      </section>

      {/* Technical Skills Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Technical Skills</h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <p className="text-sm"><span className="font-semibold">Languages:</span> Java, Python, C/C++, SQL, JavaScript, TypeScript, HTML/CSS, Powershell</p>
          </div>
          <div>
            <p className="text-sm"><span className="font-semibold">Frameworks:</span> React, Node.js, Django, JUnit, RESTful APIs, Material-UI, FastAPI, Pandas</p>
          </div>
          <div>
            <p className="text-sm"><span className="font-semibold">Developer Tools:</span> Git, Docker, Google Cloud, VS Code, VMware, Linux</p>
          </div>
          <div>
            <p className="text-sm"><span className="font-semibold">Key Skills:</span> AI/ML Integration, Software Design, Embedded Development, Cloud Computing, Agile/Scrum</p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Awards</h2>
        <div className="space-y-4">
          <div>
            <p className="font-semibold">CPTC 3rd Place Global</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Placed 3rd in the Collegiate Penetration Testing Competition Finals. (Jan. 2024)</p>
          </div>
          <div>
            <p className="font-semibold">National Cyber Scholar w/Honors</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">$500 prize awarded to the top 2% of competitors nationwide. (May 2023)</p>
          </div>
          <div>
            <p className="font-semibold">CyberPatriot 3X State Winner</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Placed 1st in MA, within top 100 out of 2000+ teams. (Apr. 2020 -- Apr. 2023)</p>
          </div>
        </div>
      </section>
    </div>
  </motion.div>
);

export default Resume