import { motion } from 'framer-motion'
import { useState } from 'react'

const DynamicLogo = ({ src, alt }: { src: string; alt: string }) => {
  const [isRect, setIsRect] = useState<boolean | null>(null)

  return (
    <img
      src={src}
      alt={alt}
      className={
        isRect === null
          ? 'h-12 w-12 object-contain rounded transition-all duration-200'
          : isRect
          ? 'h-12 w-20 object-contain rounded transition-all duration-200'
          : 'h-16 w-16 object-contain rounded transition-all duration-200'
      }
      onLoad={e => {
        const img = e.currentTarget
        setIsRect(img.naturalWidth > img.naturalHeight + 10)
      }}
      style={{ background: '#fff' }}
    />
  )
}

const InternshipCard = ({ title, role, date, description, location, logo }: {
  title: string;
  role: string;
  date: string;
  description: React.ReactNode;
  location: string;
  logo: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-700"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-4">
        {logo && (
          <DynamicLogo src={logo} alt={title + ' logo'} />
        )}
        <div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">{title}</h3>
          <div className="flex flex-col text-gray-600 dark:text-gray-400 text-sm">
            <span>{role}</span>
            <span className="flex items-center gap-2">
              <span>{date}</span>
              <span className="mx-1">•</span>
              <span>{location}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    {description}
  </motion.div>
)

const Internships = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="w-full px-4"
  >
    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">Professional Experience</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <InternshipCard 
        title="Fidelity Investments"
        role="Incoming Quantitative ECM Intern"
        date="Jan 2025 - Present"
        location="Boston, MA"
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjp7mSjC2egqIxP4XMrA-mKs6jlyi2fhgmbQ&s"
        description={
          <p className="text-gray-600 dark:text-gray-300">
            Working on optimizing execution quality with Systematic Trading and Analytics Platform, applying quantitative research across algorithms and analytics.
          </p>
        }
      />

      <InternshipCard 
        title="Waters Corporation"
        role="Software Engineering (RPA) Intern"
        date="May 2024 - Aug 2024"
        location="Milford, MA"
        logo="https://ispe.org/sites/default/files/2021-03/Waters%20%20logo.jpg"
        description={
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>Built automated renewal quote system with Python and SQL</li>
            <li>Integrated AI automation with C# in UI Path</li>
            <li>Developed Intune-SharePoint integration</li>
          </ul>
        }
      />

      <InternshipCard 
        title="Build UMass"
        role="Software Developer"
        date="Feb 2024 - Present"
        location="Amherst, MA"
        logo="https://media.licdn.com/dms/image/v2/C4D0BAQEOOjB5evIbRA/company-logo_200_200/company-logo_200_200/0/1630469396055/buildumass_logo?e=2147483647&v=beta&t=VtF-iFtqZCiLipdsy6VXca84vuLWD8tDSEOQByF7lfM"
        description={
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>Leading MERN stack development for IUCG website</li>
            <li>Improved website performance by 30%</li>
            <li>Working in agile environment with cross-functional team</li>
          </ul>
        }
      />

      <InternshipCard 
        title="MIT Lincoln Laboratory"
        role="Embedded Systems Researcher"
        date="May 2021 - Aug 2022"
        location="Cambridge, MA"
        logo="https://pbs.twimg.com/profile_images/1380233126354558979/ltnN7Gl4_400x400.jpg"
        description={
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>1st place in BWSI Penetration Testing competition</li>
            <li>Developed secure bootloader for Stellaris microcontrollers</li>
            <li>Built penetration testing frameworks</li>
          </ul>
        }
      />
    </div>
  </motion.div>
)

export default Internships