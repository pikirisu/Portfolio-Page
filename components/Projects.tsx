"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Inter Coach",
    description:
      "Full-stack AI resume platform with 21 REST APIs for resume analysis, JD extraction, and resume–JD matching. Deterministic 70/30 weighted scoring reduces LLM usage to extraction and recommendations, with OpenAI and Gemini unified through one LLM layer at under $0.20 measured AI cost per resume.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "OpenAI", "Gemini"],
    github: "https://github.com/pikirisu/InterCoach",
    live: "https://inter-coach.vercel.app",
  },
  {
    title: "Project Camp",
    description:
      "34-route project management REST API supporting projects, members, tasks, subtasks, notes, and file attachments. Role-based authorization across 26 protected routes with 3 permission levels, plus MongoDB aggregation pipelines for live member counts and nested task/subtask data.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "RBAC"],
    github: "https://github.com/pikirisu/Projects-Management-System",
  },
  {
    title: "TCP Server in JS",
    description:
      "HTTP/1.1 server framework built in Node.js on raw TCP sockets — request parsing, routing, middleware chaining, and response handling without Node's built-in http module. Sustained ~4,800 req/sec at 50 concurrent connections with 0 errors, backed by 20 automated tests.",
    tech: ["Node.js", "TCP/IP", "HTTP/1.1"],
    github: "https://github.com/pikirisu/TCP-Server-in-JS-",
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

              <div className="flex items-center gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
                  whileHover={{ x: 5 }}
                >
                  <Github size={18} />
                  GitHub
                </motion.a>
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink size={18} />
                    Live
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
