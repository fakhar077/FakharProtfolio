import * as React from 'react';
import type { Project } from '../types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
        className="bg-white dark:bg-dark-card rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
        whileHover={{ scale: 1.03 }}
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-cyan-700 dark:text-cyan-400">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto self-start bg-cyan-600 text-white font-bold py-2 px-4 rounded-full hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;