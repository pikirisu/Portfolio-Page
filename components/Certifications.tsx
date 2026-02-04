"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const certifications = [
  {
    title: "Complete Data Science, Machine Learning, Deep Learning, NLP Bootcamp",
    instructor: "Krish Naik",
    platform: "Udemy",
    status: "completed",
  },
  {
    title: "DSA in C++",
    instructor: "Love Babbar",
    platform: "In Progress",
    status: "in-progress",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">Certifications</h2>
        
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ x: 5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.2 + 0.2, duration: 0.3 }}
              >
                <CheckCircle2
                  size={24}
                  className={cert.status === "completed" ? "text-green-500" : "text-yellow-500"}
                />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-400">
                  Instructor: <span className="text-gray-300">{cert.instructor}</span>
                </p>
                <p className="text-gray-500 text-sm mt-1">{cert.platform}</p>
              </div>
              {cert.status === "in-progress" && (
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-xs font-medium">
                  In Progress
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
