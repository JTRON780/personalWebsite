import { motion } from 'framer-motion'
import { projects } from '../data/profile'

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const ProjectCard = ({ title, description, tech, link }: ProjectCardProps) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    className="group relative bg-dark-800/40 backdrop-blur-md rounded-xl p-6 border border-white/5 hover:border-neon-cyan/50 transition-colors duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />

    <div className="relative z-10">
      <h3 className="text-xl font-bold mb-3 text-white font-orbitron group-hover:text-neon-cyan transition-colors">{title}</h3>
      <p className="text-gray-400 mb-4 font-space text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item, index) => (
          <span
            key={index}
            className="bg-neon-blue/10 text-neon-blue/90 border border-neon-blue/20 text-xs px-3 py-1 rounded-sm font-space"
          >
            {item}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-neon-purple hover:text-neon-cyan transition-colors font-medium text-sm uppercase tracking-wider group/link"
      >
        View Project
        <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </motion.div>
)

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full px-4"
    >
      <div className="relative mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple inline-block">
          FEATURED PROJECTS
        </h2>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} tech={project.tech} link={project.repo || project.link || '#'} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects