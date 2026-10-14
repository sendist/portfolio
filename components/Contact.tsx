"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const links = [
  {
    name: "Email",
    value: "sendisetiawan10902@gmail.com",
    url: "mailto:sendisetiawan10902@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/sendist",
    url: "https://www.linkedin.com/in/sendist/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    value: "github.com/sendist",
    url: "https://github.com/sendist",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    value: "@sendis10",
    url: "https://instagram.com/sendis10",
    icon: FaInstagram,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] flex justify-center relative overflow-hidden">
      {/* Subtle background glow for the contact section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 bg-blue-900/20 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl flex flex-col items-center text-center z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight uppercase">
          Let’s build something.
        </h2>
        <p className="text-lg md:text-xl text-gray-400 font-sans leading-relaxed mb-16 max-w-2xl">
          Have a problem worth exploring? Let’s talk about software, product ideas, or working together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex items-center justify-between p-6 bg-[#111111] border border-gray-800 hover:border-gray-500 hover:bg-[#1a1a1a] transition-all duration-300 w-full text-left"
            >
              <div className="flex items-center gap-4">
                <link.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-gray-500 font-sans mb-1">
                    {link.name}
                  </span>
                  <span className="text-gray-200 font-medium font-sans group-hover:text-white transition-colors">
                    {link.value}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
