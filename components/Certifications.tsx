"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useRef, useState } from "react";

const certificates = [
  { title: "Junior BE Spring Boot", issuer: "BNSP / LSP", image: "/certifications/Junior_BE_Spring_Boot_Sendi_Setiawan.jpg" },
  { title: "Back-End with JS", issuer: "Dicoding", image: "/certifications/belajar-membuat-aplikasi-back-end-untuk-pemula.png" },
  { title: "Applied Machine Learning", issuer: "Dicoding", image: "/certifications/belajar-pengembangan-machine-learning.png" },
  { title: "Machine Learning for Beginners", issuer: "Dicoding", image: "/certifications/belajar-machine-learning-untuk-pemula.png" },
  { title: "Basic Artificial Intelligence", issuer: "Dicoding", image: "/certifications/belajar-dasar-ai.png" },
  { title: "Basic Data Science", issuer: "Dicoding", image: "/certifications/belajar-dasar-data-science.png" },
  { title: "Java Programming", issuer: "Dicoding", image: "/certifications/memulai-pemrograman-dengan-java.png" },
  { title: "Python Programming", issuer: "Dicoding", image: "/certifications/memulai-pemrograman-dengan-python.png" },
  { title: "Basic JavaScript", issuer: "Dicoding", image: "/certifications/belajar-dasar-pemrograman-javascript.png" },
  { title: "Basic SQL", issuer: "Dicoding", image: "/certifications/belajar-dasar-structured-query-language.png" },
  { title: "Employability Skills", issuer: "Wadhwani Foundation", image: "/certifications/Wadhwani Foundation - job ready employability skills.jpg" },
  { title: "TOEIC English Certification", issuer: "ETS", image: "/certifications/Sendi Setiawan_TOEIC.jpg" },
];

export default function Certifications() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="certifications-section py-24 px-6 md:px-12 lg:px-24 border-t border-gray-900 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-end mb-12"
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase flex items-center gap-4">
            Certifications
          </h2>
          {/* <p className="text-gray-400 mt-4 max-w-xl font-sans">
            A continuous commitment to mastering new technologies and methodologies.
          </p> */}
        </div>

        <button
          onClick={scrollRight}
          className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-gray-800 hover:border-gray-500 hover:bg-[#111111] transition-all"
          aria-label="Scroll right"
        >
          <ArrowRight className="w-5 h-5 text-gray-400" />
        </button>
      </motion.div>

      {/* 2-Row Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="grid grid-flow-col grid-rows-2 gap-6 md:gap-10 overflow-x-auto pb-12 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
            className="group w-[280px] snap-center flex flex-col gap-4"
          >
            <div
              onClick={() => setSelectedImage(cert.image)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedImage(cert.image); } }}
              className="relative aspect-[4/3] w-full overflow-hidden border border-gray-800 bg-[#050505] cursor-pointer"
            >
              {/* Image with grayscale-to-color transition */}
              <Image
                fill
                sizes="280px"
                src={cert.image}
                alt={cert.title}
                className="object-cover w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            </div>

            <div className="flex flex-col">
              <h3 className="text-base md:text-lg font-bold text-gray-100 group-hover:text-white transition-colors truncate">
                {cert.title}
              </h3>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-sans mt-1">
                {cert.issuer}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-12 cursor-pointer backdrop-blur-sm"
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close certificate preview"
              className="absolute top-6 right-6 md:top-12 md:right-12 p-2 bg-gray-900 rounded-full text-white hover:bg-gray-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Certification Preview"
              className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
