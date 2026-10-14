"use client";

import ProjectArtwork from "@/components/ProjectArtwork";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, X, Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  role: string;
  duration?: string;
  images: string[];
  tags: string[];
  githubLink?: string;
  liveLink?: string;
  keyFeatures: string[];
  contributions?: string[];
  outcome?: string;
};

const projects: Project[] = [
  {
    id: "tutur",
    title: "Tutur — Communication Practice",
    description: "An iOS app helping entry-level professionals practice speaking and active listening through realistic workplace scenarios, from technical disagreements to deadline-versus-quality discussions. Spoken responses, transcription, AI feedback, and practice history support a structured practice experience.",
    role: "Developer & Project Manager",
    images: [
      "/projects/Tutur/Slide 16_9 - 9@2x.png",
      "/projects/Tutur/Group 33.png",
      "/projects/Tutur/iPhone 17 - 10.png",
      "/projects/Tutur/iPhone 17 - 13.png",
    ],
    tags: ["iOS", "Communication", "AI Feedback", "Product Development"],
    contributions: [
      "Contributed to product ideation and workplace communication practice concepts.",
      "Worked on application development and coding with the team.",
      "Managed project planning and coordination."
    ],
    keyFeatures: [
      "Workplace scenarios for speaking and active listening practice",
      "AI feedback on structure, clarity, and audience fit",
      "Practice history and progress tracking"
    ],
    outcome: "Brings workplace scenarios, speaking and listening practice, AI-powered feedback, and progress tracking into one communication practice experience."
  },
  {
    id: "padtitur",
    title: "PadTitur — Music Notation",
    description: "An iPad app for composers and people who prefer handwritten music notation. It combines Apple Pencil input, handwritten notation recognition, music playback, and sheet management in one workspace.",
    role: "Designer, Developer & Project Manager",
    images: [
      "/projects/PadTitur/pad.png",
      "/projects/PadTitur/IMG_0039.PNG",
      "/projects/PadTitur/IMG_0040.PNG",
    ],
    tags: ["iPad", "PencilKit", "Core ML", "Product Design"],
    contributions: [
      "Designed the interface and experience for writing and managing music sheets.",
      "Developed Apple Pencil input with PencilKit and worked on Core ML notation recognition.",
      "Coordinated project planning and team tasks as project manager."
    ],
    keyFeatures: [
      "Apple Pencil handwriting and notation recognition",
      "Music playback and sheet editing",
      "Library organization and sharing"
    ],
    outcome: "Combines handwriting, notation recognition, playback, and sheet management in a single iPad workspace."
  },
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
      "F-beta 0.643 → 0.714 in a matched configuration on data sample 1",
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
    description: "Spearheaded a 19-member engineering team across 6 sub-teams to customize and scale an Open edX-based Learning Management System. Directed the Agile project lifecycle to deliver 6 custom features for learners and instructors.",
    role: "Engineering Team Lead",
    duration: "2022 - 2023",
    images: ["/projects/edx.png", "/projects/edx2.png", "/projects/edx3.png", "/projects/edx4.png", "/projects/edx5.png", "/projects/edx6.png"],
    tags: ["Open edX", "Agile", "Team Lead", "LMS"],
    githubLink: "#",
    liveLink: "#",
    keyFeatures: [
      "Led 19 students across 6 sub-teams",
      "Delivered 6 major custom LMS features on schedule",
      "Coordinated development and final feature integration"
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

const projectLayoutTransition = { duration: 0.4, ease: "easeInOut" as const };

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState("All work");
  const modalRef = useRef<HTMLDivElement>(null);
  const categories = ["All work", "Apps", "AI & research", "Web & systems"];
  const categoryFor = (project: Project) => ["tutur", "padtitur"].includes(project.id) ? "Apps" : ["ai-rag", "3d-unet", "face-emotion"].includes(project.id) ? "AI & research" : "Web & systems";
  const visibleProjects = projects.filter(project => filter === "All work" || categoryFor(project) === filter);

  useEffect(() => {
    if (!selectedProject) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    modalRef.current?.querySelector<HTMLButtonElement>("button")?.focus({ preventScroll: true });
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
      if (event.key !== "Tab") return;
      const controls = modalRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex="0"]');
      if (!controls?.length) return;
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", handleKey);
    return () => { document.removeEventListener("keydown", handleKey); previousFocus?.focus({ preventScroll: true }); };
  }, [selectedProject]);

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
    <section id="projects" className="projects-section py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="section-heading"><div><span className="section-kicker">Ideas made tangible</span><h2>Selected work<span>.</span></h2></div><p>Products, experiments, and systems.<br />A closer look at what I build.</p></div>
      <div className="project-filters" aria-label="Filter projects">{categories.map(category => <button key={category} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}</div>

      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.id}
            layoutId={`project-container-${project.id}`}
            role="button"
            tabIndex={0}
            aria-label={`View ${project.title}`}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setCurrentImageIndex(0); setSelectedProject(project); }
            }}
            onClick={() => {
              setCurrentImageIndex(0);
              setSelectedProject(project);
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.15, layout: projectLayoutTransition }}
            className={`project-card group ${["tutur", "padtitur"].includes(project.id) ? "project-featured" : ""}`}
          >
            <div className={`project-cover cover-${project.id}`}>
              {project.id === "tutur" ? (
                <div className="tutur-art" aria-hidden="true">
                  <span>tutur</span>
                  <div className="voice-bars">
                    {[22, 40, 68, 36, 90, 56, 112, 74, 46, 82, 32, 60, 24].map((height, index) => <i key={index} style={{ height }} />)}
                  </div>
                  <p>Find your voice.<br />Shape your message.</p>
                </div>
              ) : project.id === "padtitur" ? (
                <div className="padtitur-art" aria-hidden="true">
                  <span>PadTitur</span>
                  <div className="music-staff"><b>𝄞</b><i>♪</i><i>♫</i><i>♩</i></div>
                  <p>From a handwritten note<br />to a musical idea.</p>
                </div>
              ) : <ProjectArtwork id={project.id} />}
              <span className="cover-category">{categoryFor(project)}</span>
              <span className="cover-caption">Concept illustration</span>
            </div>
            <div className="project-card-content">
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
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project case study */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div layoutRoot className="case-overlay">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="case-backdrop"
            />
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              layoutId={`project-container-${selectedProject.id}`}
              transition={{ layout: projectLayoutTransition }}
              className="case-dialog"
            >
              <header className="case-header">
                <div><span>Selected work</span><span className="case-header-divider" aria-hidden="true">/</span><span>{categoryFor(selectedProject)}</span></div>
                <button onClick={() => setSelectedProject(null)} aria-label="Close project" className="case-close">Close <X size={17} /></button>
              </header>

              <motion.div layoutScroll data-lenis-prevent className="case-body project-modal-scroll">
                <aside className={`case-gallery case-gallery-${selectedProject.id}`} aria-label="Project gallery">
                  <div className="case-image-stage">
                    {selectedProject.images.length > 0 ? (
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={`${selectedProject.id}-${currentImageIndex}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.18 }}
                          src={selectedProject.images[currentImageIndex]}
                          alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                          className="case-image"
                        />
                      </AnimatePresence>
                    ) : <ProjectArtwork id={selectedProject.id} />}
                  </div>
                  {selectedProject.images.length > 0 && (
                    <div className="case-gallery-footer">
                      <span aria-live="polite">Image {currentImageIndex + 1} <span className="case-count-divider">/</span> {selectedProject.images.length}</span>
                      <div className="case-gallery-navigation">
                        <button aria-label="Previous project image" onClick={handlePrevImage} disabled={currentImageIndex === 0}><ChevronLeft size={17} /></button>
                        <button aria-label="Next project image" onClick={handleNextImage} disabled={currentImageIndex === selectedProject.images.length - 1}><ChevronRight size={17} /></button>
                      </div>
                    </div>
                  )}
                  {selectedProject.images.length > 1 && (
                    <div className="case-thumbnails" aria-label="Choose project image">
                      {selectedProject.images.map((src, index) => (
                        <button key={src} aria-label={`View project image ${index + 1}`} aria-pressed={currentImageIndex === index} onClick={() => setCurrentImageIndex(index)}>
                          <motion.img src={src} alt="" className="case-thumbnail-image" />
                        </button>
                      ))}
                    </div>
                  )}
                </aside>

                <motion.div layoutScroll data-lenis-prevent className="case-copy project-modal-scroll">
                  <motion.h3
                    id="project-modal-title"
                    layoutId={`project-title-${selectedProject.id}`}
                    transition={{ layout: projectLayoutTransition }}
                  >{selectedProject.title}</motion.h3>
                  <div className="case-meta">
                    <div><User size={14} /><span>{selectedProject.role}</span></div>
                    {selectedProject.duration && <div><Calendar size={14} /><span>{selectedProject.duration}</span></div>}
                  </div>
                  <motion.p
                    layoutId={`project-desc-${selectedProject.id}`}
                    transition={{ layout: projectLayoutTransition }}
                    className="case-description"
                  >{selectedProject.description}</motion.p>

                  {selectedProject.contributions && (
                    <section className="case-detail-section">
                      <h4>My contribution</h4>
                      <ul>{selectedProject.contributions.map(contribution => <li key={contribution}>{contribution}</li>)}</ul>
                    </section>
                  )}
                  <section className="case-detail-section">
                    <h4>What it does</h4>
                    <ul>{selectedProject.keyFeatures.map(feature => <li key={feature}>{feature}</li>)}</ul>
                  </section>
                  {selectedProject.outcome && (
                    <section className="case-outcome">
                      <h4>Project outcome</h4>
                      <p>{selectedProject.outcome}</p>
                    </section>
                  )}
                  <motion.div layoutId={`project-tags-${selectedProject.id}`} transition={{ layout: projectLayoutTransition }} className="case-tags">
                    {selectedProject.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </motion.div>
                  {(selectedProject.githubLink && selectedProject.githubLink !== "#" || selectedProject.liveLink && selectedProject.liveLink !== "#") && (
                    <div className="case-links">
                      {selectedProject.githubLink && selectedProject.githubLink !== "#" && <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer"><FaGithub size={15} /> Source code <ArrowUpRight size={14} /></a>}
                      {selectedProject.liveLink && selectedProject.liveLink !== "#" && <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer"><ExternalLink size={15} /> Live demo <ArrowUpRight size={14} /></a>}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
