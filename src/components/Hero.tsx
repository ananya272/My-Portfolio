import React from 'react';
import { motion } from 'framer-motion';
import { Download, FolderOpen, Mail, Github, Linkedin } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-white via-gray-50 to-white'
    }`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/background.jpg')`,
          opacity: darkMode ? 0.5 : 0.7,
          zIndex: 0,
        }}
      />
      {/* Overlay for Light Mode */}
      {!darkMode && (
        <div
          className="absolute inset-0 w-full h-full bg-black"
          style={{
            opacity: 0.5,
            zIndex: 1,
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className={`text-5xl md:text-7xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ananya Tiwari
          </motion.h1>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className={`text-2xl md:text-3xl font-semibold mb-4 ${
              darkMode ? 'text-teal-400' : 'text-teal-600'
            }`}>
              Full Stack Developer | DSA Enthusiast | MERN Stack Developer
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm a Computer Science undergraduate passionate about backend development, problem-solving, and building scalable full-stack web applications. I enjoy exploring technology through hands-on projects and am eager to contribute, grow, and make an impact in the tech world.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="https://drive.google.com/file/d/1PnYurvjZzRQhvBGWYIHkSyLem9iwMxUa/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg transition-all duration-300"
            >
              <Download size={20} />
              Resume
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className={`border-2 ${
                darkMode 
                  ? 'border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900' 
                  : 'border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white'
              } px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300`}
            >
              <FolderOpen size={20} />
              View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className={`${
                darkMode 
                  ? 'bg-slate-800 hover:bg-slate-700 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              } px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300`}
            >
              <Mail size={20} />
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: Github, href: 'https://github.com/ananya272', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/ananya-tiwari-98595028b', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className={`p-3 rounded-full ${
                  darkMode 
                    ? 'bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white' 
                    : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900'
                } shadow-lg transition-all duration-300`}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>


      </div>
      {/* Scroll indicator - always at bottom, hidden on mobile */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ zIndex: 20 }}
      >
        <div className={`w-6 h-10 border-2 ${
          darkMode ? 'border-gray-400' : 'border-gray-500'
        } rounded-full flex justify-center`}>
          <div className={`w-1 h-3 ${
            darkMode ? 'bg-gray-400' : 'bg-gray-500'
          } rounded-full mt-2`}></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;