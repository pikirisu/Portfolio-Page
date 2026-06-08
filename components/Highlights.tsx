"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Youtube, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "150+ DSA Problems",
    description:
      "Consistent practice on LeetCode and NeetCode, with solutions tracked in C++ on GitHub.",
  },
  {
    icon: Youtube,
    title: "20+ Explanation Videos",
    description:
      "Step-by-step walkthroughs of DSA problems to reinforce concepts and help others learn.",
    link: "https://www.youtube.com/@pikirisu-dsa",
    linkLabel: "Watch on YouTube",
  },
  {
    icon: BookOpen,
    title: "Technical Content Creation",
    description:
      "Breaking down algorithms and interview-style problems into clear, structured explanations.",
  },
];

export default function Highlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          Problem Solving & Content
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="bg-gray-900/50 rounded-lg p-6 border border-gray-800"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Icon size={28} className="text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.linkLabel} →
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
