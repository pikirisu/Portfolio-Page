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
              I'm a Computer Science student at IIIT Nagpur, focused on full-stack software engineering with a growing specialization in AI integration. I build and deploy production applications end-to-end while applying strong data structures, algorithms, and core CS fundamentals.
            </motion.p>
            <motion.p
              className="text-lg text-gray-400 leading-relaxed mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I care about understanding how systems work — from memory and processes to databases, networks, and API design — and how to wire LLMs into real products responsibly and cost-effectively.
            </motion.p>
            <motion.ul
              className="text-lg text-gray-400 leading-relaxed mb-6 space-y-2 list-disc list-inside"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <li>
                Solved 300+ DSA problems across LeetCode, NeetCode, GeeksforGeeks, and
                HackerRank &mdash; trees, graphs, recursion, and dynamic programming
              </li>
              <li>Built and deployed full-stack AI platforms integrating OpenAI and Gemini through a unified LLM layer</li>
              <li>Designed REST APIs with JWT authentication, role-based access control, and MongoDB aggregation pipelines</li>
              <li>Published 30+ YouTube videos explaining DSA problems and programming concepts step by step</li>
            </motion.ul>
            <motion.p
              className="text-lg text-gray-400 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              My goal is to become a strong software engineer with solid fundamentals — not shortcuts.
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
                <p className="text-gray-400 mb-1">B.Tech Computer Science (Data Science and Analytics)</p>
                <p className="text-sm text-gray-500 mb-1">Final Year · Aug 2023 – Jul 2027</p>
                <p className="text-sm text-gray-500">8.98/10 SGPA · 6th Semester</p>
              </div>
              <div className="pt-4 border-t border-gray-800">
                <h4 className="text-lg font-medium text-white mb-2">
                  St. Xavier&apos;s High School, Nagpur
                </h4>
                <p className="text-gray-400 mb-1">Central Board of Secondary Education (CBSE)</p>
                <p className="text-sm text-gray-500">96% in Class X · 2022</p>
              </div>
              <div className="mt-6">
                <h5 className="text-lg font-medium text-white mb-3">Relevant Coursework</h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Operating Systems",
                    "Data Structures and Algorithms",
                    "Computer Organization and Architecture",
                    "Computer Networks",
                    "Database Management Systems",
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
