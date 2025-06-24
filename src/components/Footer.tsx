import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/ananya272',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/ananya-tiwari-98595028b',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:ananyatiwari577@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 ${
      darkMode ? 'bg-slate-900 border-t border-slate-700' : 'bg-gray-50 border-t border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold ${
              darkMode ? 'text-white hover:text-teal-400' : 'text-slate-900 hover:text-teal-600'
            } transition-colors duration-300`}
          >
            Ananya Tiwari
          </motion.button>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className={`p-3 rounded-full ${
                  darkMode 
                    ? 'bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white' 
                    : 'bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                } shadow-lg hover:shadow-xl transition-all duration-300`}
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl"
          >
            <p className={`text-lg font-medium mb-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              "Passionate about technology and continuously evolving as a developer"
            </p>
          </motion.div>

          {/* Copyright */}
          <div className={`flex items-center space-x-2 text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <span>© {new Date().getFullYear()} Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500" fill="currentColor" />
            </motion.div>
            <span>by Ananya Tiwari</span>
          </div>

          {/* Tech Stack */}
          <div className={`text-xs ${
            darkMode ? 'text-gray-500' : 'text-gray-400'
          } text-center`}>
            Built with React, TypeScript, Tailwind CSS & Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;