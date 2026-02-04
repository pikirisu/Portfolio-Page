"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C++"],
  },
  {
    title: "ML",
    skills: ["Supervised Learning", "ANN", "RNN", "Feature Engineering"],
  },
  {
    title: "Frameworks",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn"],
  },
  {
    title: "Tools",
    skills: ["Streamlit", "Flask (basic)", "GitHub", "Jupyter"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">Skills</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-gray-900/50 rounded-lg p-6 border border-gray-800"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    className="text-gray-400 flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
