"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Learner",
    company: "Apple Developer Academy",
    location: "Jakarta",
    date: "March 2026 – Present",
    points: [
      "Collaborating within cross-functional teams to ideate, design, and develop applications from the ground up.",
      "Sharpening professional leadership, agile team-building, and end-to-end product delivery skills through challenge-based learning.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "PT Infomedia Nusantara",
    location: "Bandung",
    date: "January 2026 – March 2026",
    points: [
      "Developed a Dockerized full-stack monitoring dashboard (Next.js, Tailwind, Shadcn UI) for real-time data visualization and analytics.",
      "Architected a high-performance NestJS and Golang with PostgreSQL backend, utilizing Redis and BullMQ for asynchronous job queuing to maintain strict API responsiveness.",
    ],
  },
  {
    title: "Junior Software Developer",
    company: "PT Collega Inti Pratama",
    location: "Jakarta",
    date: "June 2024 – October 2024",
    points: [
      "Developed a cross-platform Flutter application to monitor critical financial workflows, including SOD, EOD, and EOM closures.",
      "Architected a dual-database prototype to decouple read/write operations, implementing Change Data Capture (CDC) via Debezium and Apache Kafka for real-time synchronization.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-16 tracking-tight uppercase"
      >
        Experience
      </motion.h2>

      <div className="flex flex-col gap-12 border-l border-gray-800 pl-6 md:pl-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 bg-gray-400 rounded-full ring-4 ring-[#111111]" />

            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
              <h3 className="text-xl md:text-2xl font-bold text-gray-100">
                {exp.title}
              </h3>
              <span className="text-gray-500 font-sans text-sm tracking-wider uppercase hidden md:inline">
                |
              </span>
              <span className="text-gray-300 font-medium font-sans">
                {exp.company}
              </span>
            </div>
            
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500 font-sans mb-4">
              <span>{exp.date}</span>
              <span>&middot;</span>
              <span>{exp.location}</span>
            </div>

            <ul className="flex flex-col gap-3 font-sans text-gray-400 leading-relaxed max-w-3xl">
              {exp.points.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-gray-600 select-none">-</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
