"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    value: "akshatchaurasia212005@gmail.com",
    href: "mailto:akshatchaurasia212005@gmail.com",
    icon: Mail,
  },
  {
    name: "GitHub",
    value: "github.com/pikirisu",
    href: "https://github.com/pikirisu",
    icon: Github,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/akshat-chaurasia",
    href: "https://www.linkedin.com/in/akshat-chaurasia-1289252a9/",
    icon: Linkedin,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Get In Touch</h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all group text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon size={32} className="text-gray-400 group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">{link.name}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors break-all">
                  {link.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.a
            href="mailto:akshatchaurasia212005@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send size={20} />
            Send Message
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <p>© {new Date().getFullYear()} Akshat Chaurasia. All rights reserved.</p>
      </motion.div>
    </section>
  );
}
