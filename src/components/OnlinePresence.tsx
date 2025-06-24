import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code, Trophy, Mail, Phone } from 'lucide-react';

interface OnlinePresenceProps {
  darkMode: boolean;
}

const OnlinePresence: React.FC<OnlinePresenceProps> = ({ darkMode }) => {
  const profiles = [
    {
      name: "GitHub",
      username: "ananya272",
      url: "https://github.com/ananya272",
      icon: Github,
      description: "Open source contributions and personal projects",
      color: "gray"
    },
    {
      name: "LinkedIn",
      username: "ananya-tiwari-98595028b",
      url: "https://linkedin.com/in/ananya-tiwari-98595028b",
      icon: Linkedin,
      description: "Professional network and career updates",
      color: "blue"
    },
    {
      name: "LeetCode",
      username: "ananya_t27",
      url: "https://leetcode.com/ananya_t27",
      icon: Code,
      description: "Data Structures & Algorithms problem solving",
      color: "orange"
    },
    {
      name: "HackerRank",
      username: "ananyatiwari_27",
      url: "https://hackerrank.com/ananyatiwari_27",
      icon: Trophy,
      description: "Coding challenges and skill assessments",
      color: "green"
    }
  ];

  const contactInfo = [
    {
      type: "Email",
      value: "ananyatiwari577@gmail.com",
      icon: Mail,
      href: "mailto:ananyatiwari577@gmail.com"
    }
  ];

  const getColorClasses = (color: string, darkMode: boolean) => {
    const colors = {
      gray: darkMode ? 'hover:bg-gray-600 border-gray-600' : 'hover:bg-gray-50 border-gray-300',
      blue: darkMode ? 'hover:bg-blue-600 border-blue-600' : 'hover:bg-blue-50 border-blue-300',
      orange: darkMode ? 'hover:bg-orange-600 border-orange-600' : 'hover:bg-orange-50 border-orange-300',
      green: darkMode ? 'hover:bg-green-600 border-green-600' : 'hover:bg-green-50 border-green-300',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className={`py-20 ${
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
            Online Presence
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-2xl mx-auto`}>
            Connect with me across various platforms and coding communities
          </p>
        </motion.div>

        {/* Social Profiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`${
                darkMode ? 'bg-slate-900' : 'bg-white'
              } rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                getColorClasses(profile.color, darkMode)
              } group`}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`p-4 rounded-full mb-4 ${
                    darkMode ? 'bg-slate-800' : 'bg-gray-100'
                  } group-hover:bg-opacity-80 transition-all duration-300`}
                >
                  <profile.icon 
                    size={32} 
                    className={`${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    } group-hover:text-current transition-colors duration-300`}
                  />
                </motion.div>
                
                <h3 className={`text-lg font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {profile.name}
                </h3>
                
                <p className={`text-sm font-mono mb-3 ${
                  darkMode ? 'text-teal-400' : 'text-teal-600'
                }`}>
                  @{profile.username}
                </p>
                
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                } leading-relaxed`}>
                  {profile.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={`${
            darkMode ? 'bg-slate-900' : 'bg-white'
          } rounded-xl p-8 shadow-lg border ${
            darkMode ? 'border-slate-700' : 'border-gray-200'
          }`}
        >
          <h3 className={`text-2xl font-bold text-center mb-8 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Get In Touch
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`flex items-center gap-4 p-4 rounded-lg ${
                  darkMode 
                    ? 'bg-slate-800 hover:bg-slate-700' 
                    : 'bg-gray-50 hover:bg-gray-100'
                } transition-all duration-300 group`}
              >
                <div className={`p-3 rounded-lg ${
                  darkMode ? 'bg-teal-500/20 text-teal-400' : 'bg-teal-100 text-teal-600'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <contact.icon size={20} />
                </div>
                <div>
                  <p className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {contact.type}
                  </p>
                  <p className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  } group-hover:text-teal-500 transition-colors duration-300`}>
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OnlinePresence;