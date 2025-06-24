import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const educationData = [
    {
      institution: "GLA University, Mathura",
      degree: "Bachelor of Technology – Computer Science",
      duration: "2022–2026",
      description: "Currently pursuing Computer Science with focus on software development, data structures, algorithms, and modern web technologies."
    },
    {
      institution: "St. Dominic's Sr. Sec. School, Mathura",
      degree: "PCM Stream",
      duration: "Graduated in 2022",
      description: "Completed higher secondary education with Physics, Chemistry, and Mathematics as core subjects."
    }
  ];

  return (
    <section id="education" className={`py-20 ${
      darkMode ? 'bg-slate-800' : 'bg-gray-50'
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
            Education
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-2xl mx-auto`}>
            My academic journey in computer science and technology
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${
                darkMode ? 'bg-slate-900' : 'bg-white'
              } rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                darkMode ? 'border-slate-700' : 'border-gray-200'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-3 rounded-lg ${
                      darkMode ? 'bg-teal-500/20 text-teal-400' : 'bg-teal-100 text-teal-600'
                    }`}>
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {edu.institution}
                      </h3>
                      <p className={`${
                        darkMode ? 'text-teal-400' : 'text-teal-600'
                      } font-semibold`}>
                        {edu.degree}
                      </p>
                    </div>
                  </div>
                  <p className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  } leading-relaxed`}>
                    {edu.description}
                  </p>
                </div>
                <div className={`flex items-center gap-2 mt-4 md:mt-0 md:ml-6 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <Calendar size={16} />
                  <span className="font-medium">{edu.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;