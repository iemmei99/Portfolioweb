import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import avatarImage from '../assets/images/regenerated_image_1782375360979.jpg';
import { PROJECTS } from '../data/projects';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-4xl mx-auto px-6 flex flex-col items-center pt-16 md:pt-24 pb-20"
    >
      {/* Hero Section */}
      <div className="text-center max-w-3xl space-y-6 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111111] dark:text-white leading-[1.2]">
          Translating business needs into structured solutions.
        </h1>
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-xl font-medium">
          I am an aspiring Business Analyst passionate about domain research, process modeling, and building practical, user-centered digital solutions.
        </p>
        <Link to="/about" className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-gray-300 dark:hover:border-gray-700 transition-all group">
          <img src={avatarImage} alt="Avatar" className="w-6 h-6 rounded-full object-cover" />
          <span className="font-semibold text-xs text-[#111111] dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">About Sylvia</span>
        </Link>
      </div>

      {/* Project Showcase */}
      <div className="w-full mt-24 space-y-20">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="w-full flex flex-col gap-6"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-2xl overflow-hidden group shadow-lg border border-gray-100 dark:border-gray-800 block">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </a>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#111111] dark:text-white max-w-sm leading-tight">
                  {project.title}
                </h2>
                
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 inline-flex items-center gap-1 text-blue-500 dark:text-blue-400 font-semibold text-xs hover:text-blue-600 dark:hover:text-blue-300 hover:underline group">
                  View details <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
              
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium max-w-3xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.details.map((detail, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white/80 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#111111] dark:text-gray-200 text-xs font-semibold rounded-lg shadow-sm cursor-default">
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
