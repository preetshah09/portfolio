import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: "The Quant Developer",
    organization: "Udemy",
    date: "2025",
    credential: "https://www.udemy.com",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a6?auto=format&fit=crop&q=80&w=200&h=100"
  },
  {
    title: "The Machine Learning Expert",
    organization: "Coursera",
    date: "2024",
    credential: "https://www.coursera.org",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=200&h=100"
  },
  {
    title: "The Python Bootcamp",
    organization: "Udemy",
    date: "2024",
    credential: "https://www.udemy.com",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=200&h=100"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text bg-300% animate-gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-lg font-semibold mb-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.4 }}
                  >
                    {cert.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 text-sm mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.5 }}
                  >
                    {cert.organization}
                  </motion.p>
                  <motion.div 
                    className="flex items-center gap-2 text-sm text-gray-500 mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.6 }}
                  >
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </motion.div>
                  <motion.a 
                    href={cert.credential}
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.7 }}
                  >
                    <Award size={16} />
                    <span>View Credential</span>
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;