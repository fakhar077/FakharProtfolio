import * as React from 'react';
import Section from '../components/Section';
import SkillBadge from '../components/SkillBadge';
import { PROFILE, EXPERIENCES, SKILLS } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skillCategories = ['Frontend', 'Backend', 'Database', 'Tools', 'Other'];

  return (
    <div>
      <Section title="About Me">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {PROFILE.about}
          </motion.p>
        </div>
      </Section>

      <Section title="Work Experience">
        <div className="max-w-4xl mx-auto space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-cyan-700 dark:text-cyan-400">{exp.role}</h3>
                  <p className="text-md font-semibold text-gray-700 dark:text-gray-300">{exp.company}</p>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">{exp.period}</span>
              </div>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Skills">
        <div className="max-w-5xl mx-auto space-y-8">
          {skillCategories.map(category => (
            <div key={category}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.filter(skill => skill.category === category).map(skill => (
                  <SkillBadge key={skill.name} skill={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
