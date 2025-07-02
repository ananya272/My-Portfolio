import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import OnlinePresence from './components/OnlinePresence';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      setDarkMode(JSON.parse(savedTheme));
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
    
    // Simulate loading time
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        darkMode ? 'bg-slate-900' : 'bg-white'
      }`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Ananya Tiwari
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className={`${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Loading Portfolio...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-slate-900' : 'bg-white'
      }`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Education darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Experience darkMode={darkMode} />
          <OnlinePresence darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </motion.main>
        
        <Footer darkMode={darkMode} />
        
        {/* Scroll to top button */}
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-40 ${
            darkMode 
              ? 'bg-teal-600 hover:bg-teal-700 text-white' 
              : 'bg-white hover:bg-gray-50 text-gray-900'
          } border ${
            darkMode ? 'border-slate-700' : 'border-gray-200'
          } transition-all duration-300`}
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </motion.button>
      </div>
    </AnimatePresence>
  );
}

export default App;