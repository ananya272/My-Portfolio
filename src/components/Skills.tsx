import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, GitBranch, Monitor, Cpu } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "Java", "JavaScript", "C", "SQL"],
      color: "teal"
    },
    {
      title: "Frontend",
      icon: Monitor,
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
      color: "blue"
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "RESTful APIs"],
      color: "green"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB", "MySQL", "Database Design"],
      color: "purple"
    },
    {
      title: "Tools & Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"],
      color: "orange"
    },
    {
      title: "CS Concepts",
      icon: Cpu,
      skills: ["DSA", "OS", "DBMS", "ML", "OOPS"],
      color: "red"
    }
  ];

  const getColorClasses = (color: string, darkMode: boolean) => {
    const colors = {
      teal: darkMode ? 'bg-teal-500/20 text-teal-400' : 'bg-teal-100 text-teal-600',
      blue: darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600',
      green: darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600',
      purple: darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600',
      orange: darkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-600',
      red: darkMode ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-600',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className={`py-20 ${
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
            Skills & Technologies
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-2xl mx-auto`}>
            Technical expertise across the full development stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`${
                darkMode ? 'bg-slate-900' : 'bg-white'
              } rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                darkMode ? 'border-slate-700' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`p-3 rounded-lg ${getColorClasses(category.color, darkMode)}`}
                >
                  <category.icon size={24} />
                </motion.div>
                <h3 className={`text-xl font-bold ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-2 rounded-lg text-sm font-medium ${
                      darkMode 
                        ? 'bg-slate-800 text-gray-300 hover:bg-slate-700' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    } transition-all duration-300 cursor-default`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Progress Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className={`text-2xl font-bold text-center mb-8 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Proficiency Level
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Frontend Development", level: 85 },
              { name: "Backend Development", level: 80 },
              { name: "Database Management", level: 75 },
              { name: "Problem Solving (DSA)", level: 78 }
            ].map((skill, index) => (
              <div key={index} className={`${
                darkMode ? 'bg-slate-900' : 'bg-white'
              } rounded-lg p-6 shadow-lg`}>
                <div className="flex justify-between items-center mb-3">
                  <span className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {skill.name}
                  </span>
                  <span className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {skill.level}%
                  </span>
                </div>
                <div className={`w-full ${
                  darkMode ? 'bg-slate-700' : 'bg-gray-200'
                } rounded-full h-2`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;