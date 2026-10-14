"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, X, Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";

const projects = [
  {
    id: "ai-rag",
    title: "AI-RAG CV & Project Evaluator Backend",
    description: "Automated candidate evaluation system using a Retrieval-Augmented Generation (RAG) pipeline with local MiniLM embeddings and a Qdrant vector database for semantic retrieval. Integrated Gemini 2.5 Flash LLM using deterministic prompts and a fixed chunking strategy.",
    role: "Backend Engineer",
    duration: "2024",
    images: ["https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80"],
    tags: ["RAG", "Qdrant", "Gemini LLM", "MiniLM"],
    githubLink: "#",
    liveLink: "#",
    keyFeatures: [
      "Vector search utilizing Qdrant and MiniLM embeddings",
      "Deterministic LLM evaluations via Gemini 2.5 Flash",
      "Robust text chunking and semantic retrieval pipeline"
    ]
  },
  {
    id: "3d-unet",
    title: "3D U-Net Architecture Optimization",
    description: "Optimized a 3D U-Net model using PyTorch and MONAI, improving the F-beta score from 0.643 to 0.714 by integrating Squeeze-and-Excitation (SE) attention mechanisms. Developed an interactive Streamlit inference interface to streamline visualization on Cryo-ET datasets.",
    role: "Machine Learning Engineer",
    duration: "2023 - 2024",
    images: ["/projects/unet.png", "/projects/unet2.png"],
    tags: ["PyTorch", "MONAI", "Streamlit", "Cryo-ET"],
    githubLink: "#",
    liveLink: "#",
    keyFeatures: [
      "Integrated SE attention mechanisms into 3D U-Net",
      "Boosted F-beta score by ~7%",
      "Interactive data visualization built with Streamlit"
    ]
  },
  {
    id: "ecommerce-microservices",
    title: "E-Commerce Microservices Architecture",
    description: "Designed a highly scalable e-commerce backend utilizing a modular microservices architecture. Implemented Apache Kafka for event-driven asynchronous communication and Spring Boot for persistent data storage via PostgreSQL.",
    role: "Backend Architect",
    duration: "2023",
    images: ["/projects/microservice.jpg", "/projects/microservice2.jpg"],
    tags: ["Microservices", "Kafka", "Spring Boot", "PostgreSQL"],
    githubLink: "#",
    liveLink: "#",
    keyFeatures: [
      "Distributed architecture for high availability",
      "Event-driven state synchronization using Kafka",
      "Optimized transactional data layers with PostgreSQL"
    ]
  },
  {
    id: "openedx-lms",
    title: "Open edX LMS Enhancement",
    description: "Spearheaded a 19-member engineering team across 6 sub-teams to customize and scale an Open edX-based Learning Management System. Directed the Agile project lifecycle to deliver 6 custom features that improved learner engagement.",
    role: "Engineering Team Lead",
    duration: "2022 - 2023",
    images: ["/projects/edx.png", "/projects/edx2.png", "/projects/edx3.png", "/projects/edx4.png", "/projects/edx5.png", "/projects/edx6.png"],
    tags: ["Open edX", "Agile", "Team Lead", "LMS"],
    githubLink: "#",
    liveLink: "#",
    keyFeatures: [
      "Managed 19 engineers across 6 Agile sub-teams",
      "Delivered 6 major custom LMS features on schedule",
      "Scaled infrastructure for high concurrent student loads"
    ]
  },
  {
    id: "whatsapp-broadcast",
    title: "WhatsApp Broadcasting Web App",
    description: "Architected and developed a full-stack WhatsApp broadcasting application. Built a responsive mobile-first UI with React and designed a scalable Express.js back-end, utilizing RESTful APIs for seamless data exchange.",
    role: "Full-Stack Developer",
    duration: "2022",
    images: ["/projects/broadcast.jpg", "/projects/broadcast2.png", "/projects/broadcast3.png", "/projects/broadcast4.png"],
    tags: ["React", "Express.js", "RESTful APIs", "Full-Stack"],
    githubLink: "#",
    liveLink: "#",
    keyFeatures: [
      "Mobile-first frontend interface built in React",
      "Mass broadcast job queuing via Express.js",
      "Secure and scalable RESTful API design"
    ]
  },
  {
    id: "face-emotion",
    title: "Face Emotion Recognition for Game Testing",
    description: "Engineered a real-time facial emotion recognition (FER) system using computer vision. Fine-tuned a CNN model achieving 89% accuracy on RAF-DB, logging user reactions via webcam and visualizing gameplay pain points via heatmaps.",
    role: "Computer Vision Engineer",
    duration: "2021",
    images: ["/projects/FER.png"],
    tags: ["Computer Vision", "CNN", "Machine Learning", "Data Pipeline"],
    githubLink: "#",
    liveLink: "#",
    keyFeatures: [
      "89% emotion prediction accuracy on RAF-DB",
      "Real-time webcam inference pipeline",
      "Gameplay pain-point mapping via data heatmaps"
    ]
  },
  {
    id: "market-basket",
    title: "Market Basket Analysis Application",
    description: "Developed a desktop application processing transaction data to identify purchasing patterns. Implemented the Apriori algorithm with optimized tree-structures and built a Java Swing GUI for visualizing association rules (support/confidence).",
    role: "Software Developer",
    duration: "2021",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"],
    tags: ["Java Swing", "Apriori Algorithm", "Data Mining", "OOP"],
    githubLink: "#",
    liveLink: "#",
    keyFeatures: [
      "High-performance Apriori algorithm implementation",
      "Interactive data visualization in Java Swing",
      "Modular, OOP-driven codebase architecture"
    ]
  },
];

type Project = typeof projects[0];

const projectLayoutTransition = { duration: 0.4, ease: "easeInOut" as const };

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject && currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-16 tracking-tight uppercase"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layoutId={`project-container-${project.id}`}
            onClick={() => {
              setCurrentImageIndex(0);
              setSelectedProject(project);
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.15, layout: projectLayoutTransition }}
            className="group relative border border-gray-800 p-8 flex flex-col gap-6 hover:bg-[#111111] cursor-pointer transition-colors duration-300 ease-out h-full"
          >
            <div className="flex justify-between items-start">
              <motion.h3
                layoutId={`project-title-${project.id}`}
                transition={{ layout: projectLayoutTransition }}
                className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300"
              >
                {project.title}
              </motion.h3>
              <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 ml-4" />
            </div>

            <motion.p
              layoutId={`project-desc-${project.id}`}
              transition={{ layout: projectLayoutTransition }}
              className="font-sans text-gray-400 text-sm leading-relaxed flex-grow line-clamp-3"
            >
              {project.description}
            </motion.p>

            <motion.div layoutId={`project-tags-${project.id}`} transition={{ layout: projectLayoutTransition }} className="flex flex-wrap gap-2 mt-auto">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 border border-gray-800 text-gray-400 text-[10px] uppercase tracking-wider font-sans"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-2 py-1 text-gray-500 text-[10px] uppercase tracking-wider font-sans">
                  +{project.tags.length - 3} more
                </span>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div layoutRoot className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              layoutId={`project-container-${selectedProject.id}`}
              transition={{ layout: projectLayoutTransition }}
              className="relative w-full max-w-5xl bg-[#0a0a0a] border border-gray-800 flex flex-col md:flex-row overflow-hidden max-h-[90vh] shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black rounded-full text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Section / Slider */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-[#050505] border-b md:border-b-0 md:border-r border-gray-800 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                </AnimatePresence>

                {/* Slider Controls */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button 
                      onClick={handlePrevImage}
                      disabled={currentImageIndex === 0}
                      className="absolute left-4 p-2 bg-black/50 hover:bg-black disabled:opacity-30 disabled:hover:bg-black/50 text-white rounded-full transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={handleNextImage}
                      disabled={currentImageIndex === selectedProject.images.length - 1}
                      className="absolute right-4 p-2 bg-black/50 hover:bg-black disabled:opacity-30 disabled:hover:bg-black/50 text-white rounded-full transition-all"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dots indicator */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {selectedProject.images.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? "bg-white scale-125" : "bg-white/30"}`}
                        />
                      ))}
                    </div>
                  </>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent md:bg-gradient-to-r opacity-30 pointer-events-none" />
              </div>

              {/* Content Section */}
              <motion.div layoutScroll className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                <motion.h3
                  layoutId={`project-title-${selectedProject.id}`}
                  transition={{ layout: projectLayoutTransition }}
                  className="text-2xl md:text-4xl font-bold text-white mb-6"
                >
                  {selectedProject.title}
                </motion.h3>

                <div className="flex flex-wrap gap-6 mb-8 text-sm font-sans text-gray-400">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{selectedProject.role}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedProject.duration}</span>
                  </div>
                </div>

                <motion.p
                  layoutId={`project-desc-${selectedProject.id}`}
                  transition={{ layout: projectLayoutTransition }}
                  className="font-sans text-gray-300 leading-relaxed mb-8"
                >
                  {selectedProject.description}
                </motion.p>

                <div className="mb-8">
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 font-sans mb-4">Key Features</h4>
                  <ul className="list-disc list-inside font-sans text-gray-300 space-y-2">
                    {selectedProject.keyFeatures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <motion.div layoutId={`project-tags-${selectedProject.id}`} transition={{ layout: projectLayoutTransition }} className="flex flex-wrap gap-2 mb-10">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 border border-gray-700 text-gray-300 text-xs uppercase tracking-wider font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-black font-semibold font-sans hover:bg-gray-200 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    Source Code
                  </a>
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-700 text-white font-semibold font-sans hover:bg-[#111111] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
