"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Youtube, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "300+ DSA Problems Solved",
    description:
      "Across LeetCode, NeetCode, GeeksforGeeks, and HackerRank — trees, graphs, recursion, dynamic programming, and C fundamentals.",
    links: [
      { href: "https://leetcode.com/u/pikirisu/", label: "LeetCode profile" },
      {
        href: "https://github.com/pikirisu/neetcode-submissions",
        label: "Solutions repo",
      },
    ],
  },
  {
    icon: Youtube,
    title: "30+ Explanation Videos",
    description:
      "Step-by-step walkthroughs of DSA problems and programming concepts, published on YouTube to reinforce learning and help others.",
    links: [
      { href: "https://www.youtube.com/@pikirisu-dsa", label: "Watch on YouTube" },
    ],
  },
  {
    icon: BookOpen,
    title: "Technical Content Creation",
    description:
      "Breaking down algorithms and interview-style problems into clear, structured explanations — written and recorded.",
    links: [],
  },
];

export default function Highlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="highlights" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          Problem Solving &amp; Content
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          Every number below links to the profile or repository it comes from.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 flex flex-col"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Icon size={28} className="text-gray-400 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4 flex-1">
                  {item.description}
                </p>
                {item.links.length > 0 && (
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-300 hover:text-white underline underline-offset-4 decoration-gray-700 hover:decoration-gray-400 transition-colors"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
