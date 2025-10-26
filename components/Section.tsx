import * as React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;
