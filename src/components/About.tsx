import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text bg-300% animate-gradient text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="relative w-80 h-80"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse-custom"
                  style={{ padding: '3px' }}
                >
                  <motion.div 
                    className="w-full h-full rounded-full overflow-hidden bg-white animate-float"
                  >
                    <img
                      src="https://media.licdn.com/dms/image/v2/D4D03AQEbPhbZ-rPGlA/profile-displayphoto-shrink_400_400/B4DZTXwJ80H0Ag-/0/1738786514325?e=1748476800&v=beta&t=hkYS73tH8eyAKGL8PhrWAvLfx_OpRVyu31In3fioc-w"
                      alt="Preet Shah"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* About Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-gray-100"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-lg text-gray-700 leading-relaxed mb-6 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-[length:200%_100%] animate-shine text-transparent bg-clip-text">
                  Preet Parimal Shah, a highly experienced Machine Learning Engineer and Software Developer, has honed his expertise at Shree Krishna Engineers and Larsen & Toubro. His areas of focus include optimizing system architecture, data processing, and automation.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-[length:200%_100%] animate-shine text-transparent bg-clip-text">
                  Shah has significantly enhanced IT infrastructure efficiency, improved AI-driven document digitization, and streamlined resource utilization. Proficient in agile environments, he leads cross-functional teams and undertakes high-impact projects.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-[length:200%_100%] animate-shine text-transparent bg-clip-text">
                  Shah actively participates in technical communities and team initiatives, contributing to the development of innovative solutions in machine learning and software development.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {[
                  { href: "https://github.com/preetshah09", icon: <Github size={28} />, label: "GitHub", hoverColor: "hover:text-black", bgColor: "bg-gray-100" },
                  { href: "https://www.linkedin.com/in/preetshah15", icon: <Linkedin size={28} />, label: "LinkedIn", hoverColor: "hover:text-blue-600", bgColor: "bg-blue-100" },
                  { href: "mailto:preet.parimal.shah15@gmail.com", icon: <Mail size={28} />, label: "Email", hoverColor: "hover:text-red-500", bgColor: "bg-red-100" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl ${social.bgColor} ${social.hoverColor} transition-all duration-300 flex-1 justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3,
                      delay: 0.6 + (index * 0.1),
                      type: "spring",
                      stiffness: 300
                    }}
                  >
                    {social.icon}
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;