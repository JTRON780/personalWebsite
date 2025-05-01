import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const ProjectCard = ({ title, description, tech, link }: ProjectCardProps) => (
  <motion.div 
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-700"
  >
    <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((item, index) => (
        <span 
          key={index}
          className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-200 text-sm px-3 py-1 rounded-full"
        >
          {item}
        </span>
      ))}
    </div>
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
    >
      View Project 
      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </motion.div>
)

const Projects = () => {
  const projects = [
    {
      title: "Dusty",
      description: "Plant disease detection system using CNNs, achieving 82% accuracy with 20,000 images and an F-1 score of 81%",
      tech: ["Python", "OpenCV", "Keras", "Scikit-learn"],
      link: "https://github.com/username/dusty"
    },
    {
      title: "IUCG Website",
      description: "Full-stack website development using MERN stack, implementing RESTful APIs and improving performance by 30%",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://github.com/username/iucg-website"
    },
    {
      title: "Secure Bootloader",
      description: "Embedded systems security project for Stellaris microcontrollers using C, Assembly, and AES-GCM encryption",
      tech: ["C", "Assembly", "UART", "AES-GCM"],
      link: "https://github.com/username/secure-bootloader"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full px-4"
    >
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects