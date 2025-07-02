import React from 'react';
import { motion } from 'framer-motion';

interface AboutProps {
  darkMode?: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-[60vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-blue-700 dark:text-blue-400">About Me</h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-4">
          🎓 I’m a final-year <b>B.Tech CSE</b> student at <b>GLA University</b>, passionate about technology and continuously evolving as a developer. My current focus lies in learning web development and mastering Data Structures & Algorithms (DSA), while building a strong foundation in core computer science concepts.
        </p>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-4">
          💻 I enjoy exploring problem-solving and software development through hands-on projects and collaborative learning. I’m especially enthusiastic about full-stack development and the endless possibilities it brings to real-world solutions.
        </p>
        <p className="text-lg md:text-xl text-blue-600 dark:text-blue-300 font-semibold mt-6">
          Let’s connect and grow together!
        </p>
      </motion.div>
    </section>
  );
};

export default About;
