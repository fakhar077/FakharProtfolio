import * as React from 'react';
import Section from '../components/Section';
import { EDUCATION, CERTIFICATIONS, LANGUAGES, PROFILE } from '../constants';
import modernPdf from '../my_data/modern.pdf';
import { motion } from 'framer-motion';

const DownloadIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
);

const Resume: React.FC = () => {
    return (
        <Section title="My Resume">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <a
                        href={modernPdf}
                        download="modern.pdf"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        <DownloadIcon />
                        Download PDF
                    </a>
                </div>

                <div className="grid md:grid-cols-1 gap-12">
                    {/* Contact Info */}
                    <motion.div 
                        className="bg-white dark:bg-dark-card p-8 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 border-b-2 border-cyan-500 pb-2 text-gray-800 dark:text-gray-200">Contact Information</h3>
                        <div className="space-y-3 text-gray-600 dark:text-gray-300">
                           <p><strong>Name:</strong> {PROFILE.name}</p>
                           <p><strong>Email:</strong> {PROFILE.email}</p>
                           <p><strong>Phone:</strong> {PROFILE.phone}</p>
                           <p><strong>Location:</strong> {PROFILE.location}</p>
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div 
                        className="bg-white dark:bg-dark-card p-8 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 border-b-2 border-cyan-500 pb-2 text-gray-800 dark:text-gray-200">Education</h3>
                        <div className="space-y-6">
                            {EDUCATION.map((edu, index) => (
                                <div key={index}>
                                    <h4 className="text-lg font-semibold text-cyan-700 dark:text-cyan-400">{edu.degree}</h4>
                                    <p className="text-md text-gray-700 dark:text-gray-400">{edu.institution}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-500">{edu.period}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div 
                        className="bg-white dark:bg-dark-card p-8 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 border-b-2 border-cyan-500 pb-2 text-gray-800 dark:text-gray-200">Certifications</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                            {CERTIFICATIONS.map((cert, index) => (
                                <li key={index}>{cert}</li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Languages */}
                    <motion.div 
                        className="bg-white dark:bg-dark-card p-8 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 border-b-2 border-cyan-500 pb-2 text-gray-800 dark:text-gray-200">Languages</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            {LANGUAGES.map((lang, index) => (
                                <li key={index}>
                                    <strong>{lang.lang}:</strong> {lang.proficiency}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default Resume;
