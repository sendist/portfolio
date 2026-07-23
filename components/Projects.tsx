"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI-RAG CV & Project Evaluator Backend",
    description:
      "Automated candidate evaluation system using a Retrieval-Augmented Generation (RAG) pipeline with local MiniLM embeddings and a Qdrant vector database for semantic retrieval. Integrated Gemini 2.5 Flash LLM using deterministic prompts and a fixed chunking strategy.",
    tags: ["RAG", "Qdrant", "Gemini LLM", "MiniLM"],
    link: "#",
  },
  {
    title: "3D U-Net Architecture Optimization",
    description:
      "Optimized a 3D U-Net model using PyTorch and MONAI, improving the F-beta score from 0.643 to 0.714 by integrating Squeeze-and-Excitation (SE) attention mechanisms. Developed an interactive Streamlit inference interface to streamline visualization on Cryo-ET datasets.",
    tags: ["PyTorch", "MONAI", "Streamlit", "Cryo-ET"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-16 tracking-tight uppercase"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative border border-gray-800 p-8 flex flex-col gap-6 hover:bg-[#111111] transition-colors duration-500 ease-out"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300">
                {project.title}
              </h3>
              <a
                href={project.link}
                className="text-gray-500 hover:text-white transition-colors"
                aria-label={`View ${project.title}`}
              >
                <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>

            <p className="font-sans text-gray-400 leading-relaxed flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 border border-gray-700 text-gray-300 text-xs uppercase tracking-wider font-sans group-hover:border-gray-500 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
