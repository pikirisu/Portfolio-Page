"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "NeetCode DSA Submissions",
    description:
      "Collection of algorithm solutions in C++, organized by topic. Focus on clean implementations, time/space trade-offs, and revisiting problems to improve approach.",
    tech: ["C++", "DSA", "Problem Solving"],
    github: "https://github.com/pikirisu/neetcode-submissions",
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive personal site built with Next.js and TypeScript. Component-based structure, smooth scroll navigation, and Framer Motion animations — deployed on Vercel.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/pikirisu/portfolio-page-pikirisu",
  },
  {
    title: "Customer Churn Prediction Pipeline",
    description:
      "End-to-end data pipeline: CSV ingestion, feature encoding, train/test split, and model training workflow. Practiced structuring a reproducible ML pipeline rather than optimizing accuracy.",
    tech: ["Python", "Pandas", "Scikit-Learn", "TensorFlow"],
    github: "https://github.com/pikirisu/Customer-Churn-Analytics-Retention-Insights",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gray-200 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
                whileHover={{ x: 5 }}
              >
                <Github size={18} />
                View on GitHub
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
