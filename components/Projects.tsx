"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Customer Churn Prediction using ANN",
    description: "ANN churn prediction on 10,000 customers with feature engineering and binary classification pipeline. Extended with salary regression capabilities.",
    tech: ["Python", "NumPy", "Pandas", "Scikit-Learn", "TensorFlow/Keras"],
    github: "https://github.com/pikirisu",
  },
  {
    title: "ML Hallucination Detection",
    description: "Trained on 145k+ samples with feature pipelines containing 385 dimensions. Built reusable model artifacts for hallucination detection in ML outputs.",
    tech: ["Python", "NLP", "PyTorch", "Transformers", "XGBoost"],
    github: "https://github.com/pikirisu",
  },
  {
    title: "Sentiment Analysis using RNN",
    description: "IMDB dataset (25k train/test) with vocabulary size 10,000, padded to 500 tokens. Binary classification pipeline for sentiment analysis.",
    tech: ["TensorFlow/Keras", "NLP"],
    github: "https://github.com/pikirisu",
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
