import React from 'react';
import { Github, ExternalLink, Brain, Shield, Telescope, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Abnormality Detection in Pathological Images",
    description: "Replaced MLP layers with KAN within PaliGemma2, creating a more interpretable model to reduce radiologist review time by 20%. Improved model explainability and robustness in medical imaging by leveraging KAN for more precise feature extraction.",
    tech: ["Python", "PaliGemma2", "KAN", "Deep Learning", "Medical Imaging"],
    github: "https://github.com/preetshah09",
    image: "https://images.unsplash.com/photo-1576670392954-858d5784239c?auto=format&fit=crop&q=80&w=800&h=400",
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: "Real-Time DDoS Attack Detection System",
    description: "Initiated and predicted DDoS attacks using AWS-hosted attacker systems, tshark for traﬃc capture, and a Gradient Boosting Classifier for detection, improving real-time attack detection accuracy by 60%.",
    tech: ["Python", "AWS", "tshark", "Gradient Boosting", "Network Security"],
    github: "https://github.com/preetshah09",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800&h=400",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Astronomical Objects Classification",
    description: "Devised and executed machine learning strategies to mitigate dataset imbalances, achieving a 99% improvement in classification accuracy. Advanced astronomy research by developing a novel classification approach for celestial objects in the SDSS database, addressing an imbalance ratio of 5.88 and improving data usability for scientists globally.",
    tech: ["Machine Learning", "SDSS", "Data Science", "Python"],
    github: "https://github.com/preetshah09",
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&q=80&w=800&h=400",
    icon: <Telescope className="w-6 h-6" />
  },
  {
    title: "Octobuy Chrome Extension",
    description: "Introduced a Chrome extension using ReactJS and jQuery that enabled real-time price comparisons across 50+ online retailers; increased user engagement and empowered shoppers to make informed purchasing decisions, enhancing satisfaction. Launched an automated system using fetch API to aggregate product details from 15+ e-commerce platforms, enabling real-time tracking of price fluctuations; enhanced data accuracy by 98% and improved pricing strategies.",
    tech: ["ReactJS", "jQuery", "Chrome Extension", "Fetch API"],
    github: "https://github.com/preetshah09",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800&h=400",
    icon: <ShoppingBag className="w-6 h-6" />
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text bg-300% animate-gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <motion.div 
                  className="absolute bottom-4 left-4 text-white flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                >
                  <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                    {project.icon}
                  </div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3 hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.4 }}
                >
                  {project.tech.map((tech, i) => (
                    <motion.span 
                      key={i} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.5 }}
                >
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;