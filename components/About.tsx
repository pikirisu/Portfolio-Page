"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p
              className="text-lg text-gray-400 leading-relaxed mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              I'm a passionate Software Engineer and ML & AI enthusiast currently pursuing my B.Tech in Computer Science with a specialization in Data Science & Analytics at IIIT Nagpur.
            </motion.p>
            <motion.p
              className="text-lg text-gray-400 leading-relaxed mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              My focus lies in building scalable systems and developing intelligent machine learning solutions. I enjoy working on end-to-end ML projects, from data preprocessing to model deployment, and I'm constantly learning and exploring new technologies in the AI space.
            </motion.p>
            <motion.p
              className="text-lg text-gray-400 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              When I'm not coding, I'm diving deep into the latest research papers, experimenting with new ML frameworks, or contributing to open-source projects.
            </motion.p>
          </div>

          <motion.div
            className="bg-gray-900/50 rounded-lg p-8 border border-gray-800"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-medium text-white mb-2">
                  Indian Institute of Information Technology Nagpur
                </h4>
                <p className="text-gray-400 mb-1">B.Tech Computer Science (Data Science & Analytics)</p>
                <p className="text-sm text-gray-500">Aug 2023 – Jul 2027</p>
              </div>
              <div className="mt-6">
                <h5 className="text-lg font-medium text-white mb-3">Relevant Coursework</h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Operating Systems",
                    "Data Structures",
                    "AI",
                    "ML",
                    "Networking",
                    "Databases",
                    "Computer Vision",
                  ].map((course, index) => (
                    <motion.span
                      key={course}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
