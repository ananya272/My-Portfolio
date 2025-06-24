import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, Code } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: "Job Seeking Portal",
      description: "A comprehensive MERN stack application for job seekers and employers with real-time features and secure authentication.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "WebSockets", "JWT", "bcrypt"],
      features: [
        "Real-time job updates with WebSockets",
        "Secure login for users and employers",
        "Clean UI with dynamic job listings",
        "Advanced search and filter capabilities"
      ],
      date: "May 2024",
      github: "https://github.com/ananya272/Job-Portal",
      demo: "#"
    },
    {
      title: "Quiz Portal",
      description: "An interactive quiz platform with user authentication, progress tracking, and multiple question types with randomized questions.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      features: [
        "Authentication with user progress tracking",
        "Multiple question types (MCQ, true/false, short answer)",
        "Timer functionality with randomized questions",
        "Comprehensive result analytics"
      ],
      date: "August 2024",
      github: "https://github.com/ananya272/Quiz-Portal.git",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className={`py-20 ${
      darkMode ? 'bg-slate-900' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Projects
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-2xl mx-auto`}>
            Full-stack applications showcasing my technical skills and problem-solving abilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`${
                darkMode ? 'bg-slate-800' : 'bg-gray-50'
              } rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                darkMode ? 'border-slate-700' : 'border-gray-200'
              } group`}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg ${
                    darkMode ? 'bg-teal-500/20 text-teal-400' : 'bg-teal-100 text-teal-600'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <Code size={24} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {project.title}
                    </h3>
                    <div className={`flex items-center gap-2 mt-1 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <Calendar size={14} />
                      <span className="text-sm">{project.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className={`p-2 rounded-lg ${
                      darkMode 
                        ? 'bg-slate-700 hover:bg-slate-600 text-gray-300 hover:text-white' 
                        : 'bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                    } shadow transition-all duration-300`}
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    className={`p-2 rounded-lg ${
                      darkMode 
                        ? 'bg-teal-500/20 hover:bg-teal-500/30 text-teal-400' 
                        : 'bg-teal-100 hover:bg-teal-200 text-teal-600'
                    } transition-all duration-300`}
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </div>

              {/* Description */}
              <p className={`${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              } mb-6 leading-relaxed`}>
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className={`font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-start gap-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                        darkMode ? 'bg-teal-400' : 'bg-teal-600'
                      }`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className={`font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        darkMode 
                          ? 'bg-slate-700 text-gray-300' 
                          : 'bg-white text-gray-700'
                      } shadow-sm`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;