import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Users, CheckCircle } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      title: "Full Stack Intern",
      company: "Coding Blocks",
      duration: "June–July 2024",
      description: "Collaborated in a team of 4 developers to build a comprehensive full-stack MERN application within tight deadlines.",
      achievements: [
        "Developed responsive user interfaces using React.js",
        "Implemented RESTful APIs with Node.js and Express",
        "Integrated MongoDB for efficient data management",
        "Successfully delivered project on time with team collaboration"
      ],
      icon: Users
    },
    {
      title: "Java Intern",
      company: "CodSoft",
      duration: "June 2024",
      description: "Completed intensive Java development internship focusing on core programming concepts and practical applications.",
      achievements: [
        "Completed 3 comprehensive Java-based development tasks",
        "Enhanced problem-solving skills through hands-on coding",
        "Gained practical experience in Java application development",
        "Strengthened understanding of OOP principles"
      ],
      icon: CheckCircle
    }
  ];

  return (
    <section id="experience" className={`py-20 ${
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
            Experience
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-2xl mx-auto`}>
            Professional internships and hands-on development experience
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
            darkMode ? 'bg-slate-700' : 'bg-gray-300'
          } hidden md:block`}></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative md:ml-16"
              >
                {/* Timeline dot */}
                <div className={`absolute -left-20 top-6 w-4 h-4 ${
                  darkMode ? 'bg-teal-400' : 'bg-teal-600'
                } rounded-full border-4 ${
                  darkMode ? 'border-slate-900' : 'border-white'
                } shadow-lg hidden md:block`}></div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className={`${
                    darkMode ? 'bg-slate-800' : 'bg-gray-50'
                  } rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                    darkMode ? 'border-slate-700' : 'border-gray-200'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      <div className={`p-3 rounded-lg ${
                        darkMode ? 'bg-teal-500/20 text-teal-400' : 'bg-teal-100 text-teal-600'
                      }`}>
                        <exp.icon size={24} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold ${
                          darkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                          {exp.title}
                        </h3>
                        <p className={`${
                          darkMode ? 'text-teal-400' : 'text-teal-600'
                        } font-semibold text-lg`}>
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className={`flex items-center gap-2 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    } bg-${darkMode ? 'slate-700' : 'white'} px-4 py-2 rounded-lg shadow-sm`}>
                      <Calendar size={16} />
                      <span className="font-medium">{exp.duration}</span>
                    </div>
                  </div>

                  <p className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  } mb-6 leading-relaxed`}>
                    {exp.description}
                  </p>

                  <div>
                    <h4 className={`font-semibold mb-4 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      Key Achievements:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.2) + (idx * 0.1) }}
                          viewport={{ once: true }}
                          className={`flex items-start gap-3 p-3 rounded-lg ${
                            darkMode ? 'bg-slate-700/50' : 'bg-white'
                          } shadow-sm`}
                        >
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            darkMode ? 'bg-teal-400' : 'bg-teal-600'
                          } flex-shrink-0`}></div>
                          <span className={`${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                          } text-sm leading-relaxed`}>
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;