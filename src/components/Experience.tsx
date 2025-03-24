import React from 'react';
import { Briefcase, Calendar, GraduationCap, Building, Award, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const workExperience = [
  {
    title: "Software Developer",
    company: "Shree Krishna Engineers",
    location: "Surat, Gujarat",
    period: "April 2024 - August 2024",
    description: "Conducted a thorough evaluation of the client's IT infrastructure, pinpointing critical areas for improvement. Optimized the system architecture, eliminating operational bottlenecks and expediting service delivery timelines by 25%. Analyzed the existing infrastructure, identifying inefficiencies that required attention. Proscribed system upgrades, augmenting data throughput by 20% and enhancing overall operational efficiency for the Technical department.",
    icon: <Briefcase className="w-10 h-10" />
  },
  {
    title: "Software Developer Intern",
    company: "Larsen and Toubro",
    location: "Hazira, Gujarat",
    period: "Jan 2024 - April 2024",
    description: "Spearheaded the development of an Efficient solution for document digitization, enhancing accessibility features for 500+ re usable mater and improving retrieval times by 90% through machine translation and NLP techniques. Modernised the resources utilization system, allowing for real-time monitoring of locations of implementation, leading to a notable decrease in resource burning activity reports by 40% within the first quarter of implementation.",
    icon: <Briefcase className="w-10 h-10" />
  },
  {
    title: "Software and Data Engineer",
    company: "Gujarat Technological University",
    location: "Gujarat, India",
    period: "Jan 2021 - Dec 2023",
    description: "Maintained the web presence of the university system serving over 50,000 students. Demonstrated and implemented the use of AWS Cloud Servers to improve the load balancing of websites by 60%. Collaborated with team members using version control systems such as git to organize modifications and assign tasks. Used: Java, AWS RDS (MySQL), Git, AWS, AWS ELB",
    icon: <Briefcase className="w-10 h-10" />
  }
];

const education = [
  {
    degree: "Master's of Computer Science",
    university: "University of Texas at Arlington",
    location: "Arlington, Texas",
    period: "2024 - 2026",
    achievements: [
      "GPA: 6.67/4.0",
      "Focus on Advanced Machine Learning and AI",
      "Research in Computer Vision"
    ],
    icon: <GraduationCap className="w-10 h-10" />
  },
  {
    degree: "Bachelor's in Computer Science and Engineering",
    university: "Gujarat Technological University",
    location: "Gujarat, India",
    period: "2020 - 2024",
    achievements: [
      "GPA: 3.75/4.0",
      "Major in Computer Science",
      "Active member of Technical Club"
    ],
    icon: <GraduationCap className="w-10 h-10" />
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 section-gradient-2">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text bg-300% animate-gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Professional Journey
        </motion.h2>

        {/* Work Experience Timeline */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-12">
              <motion.div
                className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white shadow-lg"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Building className="w-8 h-8" />
              </motion.div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                Work Experience
              </h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 to-blue-500 rounded-full" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {workExperience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-20"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      className="absolute left-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    />

                    <motion.div
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
                      whileHover={{ scale: 1.02, x: 10 }}
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-md text-blue-600"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {exp.icon}
                        </motion.div>
                        <div>
                          <h4 className="text-xl font-semibold mb-1 text-gray-800">{exp.title}</h4>
                          <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-12">
              <motion.div
                className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl text-white shadow-lg"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GraduationCap className="w-8 h-8" />
              </motion.div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 text-transparent bg-clip-text">
                Education
              </h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-200 to-purple-500 rounded-full" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-20"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      className="absolute left-6 w-5 h-5 bg-purple-500 rounded-full border-4 border-white shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                    />

                    <motion.div
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
                      whileHover={{ scale: 1.02, x: 10 }}
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-md text-purple-600"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {edu.icon}
                        </motion.div>
                        <div>
                          <h4 className="text-xl font-semibold mb-1 text-gray-800">{edu.degree}</h4>
                          <p className="text-purple-600 font-medium mb-2">{edu.university}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                className="flex items-center gap-2 text-gray-600"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.8 + (i * 0.1) }}
                              >
                                <Award className="w-4 h-4 text-purple-500" />
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;