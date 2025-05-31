'use client'

// src/pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Head>
        <title>Developer Portfolio | Inspired by Behance</title>
        <meta name="description" content="Modern developer portfolio website built with Next.js and React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-sm`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold"
          >
            <span className="text-blue-500">Dev</span>Portfolio
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`py-2 px-1 transition-all duration-300 ${activeSection === item.toLowerCase() ? 'text-blue-500 font-medium border-b-2 border-blue-500' : 'hover:text-blue-400'}`}
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? '🌙' : '☀️'}
            </button>
            
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`py-2 transition-all ${activeSection === item.toLowerCase() ? 'text-blue-500 font-medium' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm uppercase tracking-wider text-blue-500 mb-2">Frontend Developer & UI Designer</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm <span className="text-blue-500">Aymen Hamidi</span></h1>
            <p className={`text-lg mb-8 max-w-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I create engaging digital experiences through clean code and thoughtful design. Welcome to my portfolio.
            </p>
            <div className="flex space-x-4">
              <motion.button 
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.button 
                className={`px-6 py-3 rounded-lg font-medium ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                <div className="w-full h-full bg-gray-200 border-2 border-dashed rounded-xl" />
              </div>
              <div className={`absolute -bottom-4 -right-4 px-6 py-3 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>Available for work</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-2/5 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={`p-1 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <div className="rounded-2xl overflow-hidden">
                  <div className="w-full h-80 bg-gray-200 border-2 border-dashed rounded-xl" />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-3/5 md:pl-16"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6">Crafting Digital Experiences</h3>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a passionate frontend developer with 5+ years of experience creating beautiful, functional web applications. My journey in tech started when I built my first website at 16, and I've been hooked ever since.
              </p>
              <p className={`mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I specialize in React, Next.js, and modern JavaScript frameworks. My design background helps me bridge the gap between aesthetics and functionality, ensuring every project I work on delivers an exceptional user experience.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Name', value: 'Alex Morgan' },
                  { label: 'Email', value: 'alex@example.com' },
                  { label: 'Location', value: 'San Francisco, CA' },
                  { label: 'Availability', value: 'Open to Work' },
                ].map((item, index) => (
                  <div key={index}>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Frontend Development', 
                skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
              { title: 'UI/UX Design', 
                skills: ['Figma', 'Adobe XD', 'User Research', 'Wireframing', 'Prototyping'] },
              { title: 'Backend & Tools', 
                skills: ['Node.js', 'Express', 'REST APIs', 'Git', 'Webpack', 'Vite'] },
              { title: 'Soft Skills', 
                skills: ['Problem Solving', 'Communication', 'Team Collaboration', 'Time Management', 'Adaptability'] },
            ].map((category, index) => (
              <motion.div 
                key={index}
                className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project, index) => (
              <motion.div 
                key={index}
                className={`rounded-xl overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="h-48 bg-gray-200 border-2 border-dashed w-full"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">Project Title {project}</h3>
                    <div className="flex space-x-2">
                      <a href="#" className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
                        </svg>
                      </a>
                      <a href="#" className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    A brief description of the project and the technologies used. This project demonstrates my skills in UI design and frontend development.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Tailwind CSS'].map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}
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

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className={`rounded-xl p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
                  <p className={`mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Have a project in mind or want to discuss potential opportunities? Feel free to reach out using the form or contact me directly.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { icon: 'mail', text: 'alex@example.com' },
                      { icon: 'phone', text: '+1 (555) 123-4567' },
                      { icon: 'location', text: 'San Francisco, CA' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className={`p-2 rounded-lg mr-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d={
                              item.icon === 'mail' 
                                ? "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" 
                                : item.icon === 'phone' 
                                  ? "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" 
                                  : "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            } />
                          </svg>
                        </div>
                        <div>{item.text}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4 mt-8">
                    {['github', 'linkedin', 'twitter', 'dribbble'].map((social, index) => (
                      <a 
                        key={index}
                        href="#"
                        className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
                      >
                        <div className="w-5 h-5 bg-gray-200 border-2 border-dashed rounded-xl" />
                      </a>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className={`w-full p-3 rounded-lg ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className={`w-full p-3 rounded-lg ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                      <textarea 
                        id="message" 
                        rows="4"
                        className={`w-full p-3 rounded-lg ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                    <motion.button
                      type="submit"
                      className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-10 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4 text-center">
          <div className="text-lg font-bold mb-4">
            <span className="text-blue-500">Dev</span>Portfolio
          </div>
          <p className={`mb-6 max-w-lg mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Crafting beautiful digital experiences with clean code and thoughtful design.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            {[1, 2, 3, 4].map((item) => (
              <a 
                key={item}
                href="#"
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                <div className="w-5 h-5 bg-gray-200 border-2 border-dashed rounded-xl" />
              </a>
            ))}
          </div>
          <div className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            © {new Date().getFullYear()} Alex Morgan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}