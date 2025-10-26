import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { PROFILE } from '../constants';
// Note: file in my_data is named 'tranparent.png' (typo). Importing the actual filename.
import transparent from '../my_data/tranparent.png';

const homeContent = {
  titles: ['Full-Stack Developer', 'React.js Specialist', 'Laravel Expert', 'API Developer'],
};

const Home: React.FC = () => {
  const [text] = useTypewriter({
    words: homeContent.titles,
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-12rem)] py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white">
          Hi, I'm <span className="text-cyan-600 dark:text-cyan-400">{PROFILE.name}</span>
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 h-16 md:h-auto">
          <span>{text}</span>
          <Cursor cursorStyle="_" />
        </h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0"
        >
          {PROFILE.summary}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
        >
          <Link to="/projects" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center shadow-lg">
            View My Projects
          </Link>
          <Link to="/contact" className="border-2 border-cyan-600 text-cyan-600 dark:text-cyan-400 dark:border-cyan-400 font-bold py-3 px-8 rounded-full hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center">
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
        className="md:w-1/2 mt-16 md:mt-0 flex justify-center items-center"
      >
        <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-3xl opacity-50 dark:opacity-30"></div>
            <img
              src={transparent}
              alt="Profile"
              className="relative rounded-xl w-full max-w-sm h-auto object-cover transform hover:scale-105 transition-transform duration-300"
            />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;