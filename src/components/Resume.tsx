import { motion } from 'framer-motion'
import { experience, awards, skillCategories, education } from '../data/profile'

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
          title={education.institution}
          subtitle={`${education.degree}`}
          date={`${education.start} -- ${education.end}`}
          location={education.location}
        >
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            Relevant Coursework: {education.coursework.join(', ')}
          </p>
        </ResumeItem>
      </section>

      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Experience</h2>
        {experience.map(exp => (
          <ResumeItem
            key={exp.company + exp.start}
            title={exp.role}
            company={exp.company}
            date={`${exp.start} -- ${exp.end}`}
            location={exp.location}
          >
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
              {exp.bullets.map((b,i) => (
                <li key={i}>
                  {b.highlights ? b.highlights.reduce((acc, h) => acc.replace(h, `__HL__${h}__HL__`), b.text).split('__HL__').map((segment, idx) => (
                    b.highlights!.includes(segment) ? <strong key={idx}>{segment}</strong> : <span key={idx}>{segment}</span>
                  )) : b.text}
                </li>
              ))}
            </ul>
          </ResumeItem>
        ))}
      </section>

      {/* Technical Skills Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Technical Skills</h2>
        <div className="grid grid-cols-1 gap-4">
          {skillCategories.map(cat => (
            <p key={cat.title} className="text-sm">
              <span className="font-semibold">{cat.title}:</span> {cat.items.join(', ')}
            </p>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Awards</h2>
        <div className="space-y-4">
          {awards.map(a => (
            <div key={a.title} className={a.highlight ? 'border-l-4 border-indigo-500 pl-3' : ''}>
              <p className="font-semibold">{a.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{a.description} {a.date && <span className="italic">({a.date})</span>}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </motion.div>
);

export default Resume