import * as React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';
// Fix: Import Variants type to provide explicit typing for the variant objects.
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const Projects: React.FC = () => {
  return (
    <Section title="My Projects">
      <p className="text-center max-w-3xl mx-auto mb-16 text-lg text-gray-600 dark:text-gray-400">
        I thrive on turning complex problems into beautiful, intuitive digital solutions. Here are some of the projects I've worked on that showcase my skills in front-end and back-end development.
      </p>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {PROJECTS.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;