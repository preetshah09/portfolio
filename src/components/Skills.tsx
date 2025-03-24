import React from 'react';
import { Code2, Database, Globe, Server, Palette, Terminal, FileCode, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    icon: <FileCode className="w-6 h-6" />,
    skills: ["Python", "Java", "C++", "O-CamL", "HTML", "React JS", "TypeScript"]
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma", "Supabase"]
  },
  {
    title: "Technology and Frameworks",
    icon: <Laptop className="w-6 h-6" />,
    skills: ["Linux", "GitHub", "Jupyter", "Docker", "AWS", "CI/CD"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text bg-300% animate-gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
              >
                <motion.div 
                  className="p-2 bg-blue-100 rounded-lg text-blue-600"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </motion.div>
              <motion.div 
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.4 }}
              >
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i}
                    className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm shadow-sm hover:shadow transition-shadow duration-300"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.2 + 0.4 + (i * 0.1),
                      type: "spring",
                      stiffness: 300
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;