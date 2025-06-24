import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="contact" className={`py-20 ${
      darkMode ? 'bg-slate-900' : 'bg-white'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Let's Work Together
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-2xl mx-auto`}>
            I'm always interested in new opportunities and collaborations. 
            Drop me a message and let's discuss how we can work together!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`${
            darkMode ? 'bg-slate-800' : 'bg-gray-50'
          } rounded-xl p-8 shadow-lg border ${
            darkMode ? 'border-slate-700' : 'border-gray-200'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-slate-900 border-slate-600 text-white focus:border-teal-400' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-teal-500'
                  } focus:ring-2 focus:ring-teal-500/20 transition-all duration-300`}
                  placeholder="Your full name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-slate-900 border-slate-600 text-white focus:border-teal-400' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-teal-500'
                  } focus:ring-2 focus:ring-teal-500/20 transition-all duration-300`}
                  placeholder="your.email@example.com"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  darkMode 
                    ? 'bg-slate-900 border-slate-600 text-white focus:border-teal-400' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-teal-500'
                } focus:ring-2 focus:ring-teal-500/20 transition-all duration-300`}
              >
                <option value="">Select a subject</option>
                <option value="job-opportunity">Job Opportunity</option>
                <option value="collaboration">Collaboration</option>
                <option value="project-inquiry">Project Inquiry</option>
                <option value="general">General Inquiry</option>
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={`w-full px-4 py-3 rounded-lg border ${
                  darkMode 
                    ? 'bg-slate-900 border-slate-600 text-white focus:border-teal-400' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-teal-500'
                } focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 resize-vertical`}
                placeholder="Tell me about your project, opportunity, or just say hello!"
              ></textarea>
            </motion.div>

            {/* Submit Status */}
            {submitStatus !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`flex items-center gap-3 p-4 rounded-lg ${
                  submitStatus === 'success'
                    ? darkMode ? 'bg-green-900/50 text-green-400' : 'bg-green-50 text-green-700'
                    : darkMode ? 'bg-red-900/50 text-red-400' : 'bg-red-50 text-red-700'
                }`}
              >
                {submitStatus === 'success' ? (
                  <CheckCircle size={20} />
                ) : (
                  <AlertCircle size={20} />
                )}
                <span>
                  {submitStatus === 'success'
                    ? 'Message sent successfully! I\'ll get back to you soon.'
                    : 'Failed to send message. Please try again or contact me directly.'}
                </span>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                whileHover={{ scale: isFormValid && !isSubmitting ? 1.02 : 1 }}
                whileTap={{ scale: isFormValid && !isSubmitting ? 0.98 : 1 }}
                className={`px-8 py-4 rounded-lg font-semibold flex items-center gap-3 mx-auto transition-all duration-300 ${
                  isFormValid && !isSubmitting
                    ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl'
                    : darkMode
                      ? 'bg-slate-700 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;