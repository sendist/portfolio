"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-gray-400 font-sans tracking-widest uppercase text-sm mb-4"
        >
          Jakarta, Indonesia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-6"
        >
          SENDI <br /> SETIAWAN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-300 font-sans max-w-2xl leading-relaxed"
        >
          Software Engineer experienced in full-stack development, cross-platform
          mobile architecture, and AI/ML integrations. Skilled at designing
          scalable, data-driven applications.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex flex-col items-center gap-4"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500 font-sans [writing-mode:vertical-lr] rotate-180">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="text-gray-500 w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
