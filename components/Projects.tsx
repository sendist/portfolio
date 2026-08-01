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
  {
    title: "E-Commerce Microservices Architecture",
    description:
      "Designed a highly scalable e-commerce backend utilizing a modular microservices architecture. Implemented Apache Kafka for event-driven asynchronous communication and Spring Boot for persistent data storage via PostgreSQL.",
    tags: ["Microservices", "Kafka", "Spring Boot", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Open edX LMS Enhancement",
    description:
      "Spearheaded a 19-member engineering team across 6 sub-teams to customize and scale an Open edX-based Learning Management System. Directed the Agile project lifecycle to deliver 6 custom features that improved learner engagement.",
    tags: ["Open edX", "Agile", "Team Lead", "LMS"],
    link: "#",
  },
  {
    title: "WhatsApp Broadcasting Web App",
    description:
      "Architected and developed a full-stack WhatsApp broadcasting application. Built a responsive mobile-first UI with React and designed a scalable Express.js back-end, utilizing RESTful APIs for seamless data exchange.",
    tags: ["React", "Express.js", "RESTful APIs", "Full-Stack"],
    link: "#",
  },
  {
    title: "Face Emotion Recognition for Game Testing",
    description:
      "Engineered a real-time facial emotion recognition (FER) system using computer vision. Fine-tuned a CNN model achieving 89% accuracy on RAF-DB, logging user reactions via webcam and visualizing gameplay pain points via heatmaps.",
    tags: ["Computer Vision", "CNN", "Machine Learning", "Data Pipeline"],
    link: "#",
  },
  {
    title: "Market Basket Analysis Application",
    description:
      "Developed a desktop application processing transaction data to identify purchasing patterns. Implemented the Apriori algorithm with optimized tree-structures and built a Java Swing GUI for visualizing association rules (support/confidence).",
    tags: ["Java Swing", "Apriori Algorithm", "Data Mining", "OOP"],
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
