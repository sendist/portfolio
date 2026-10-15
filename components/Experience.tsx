"use client";

import { Plus, ArrowUpRight } from "lucide-react";

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
    <section id="experience" className="journey-section section-space">
      <header className="section-heading journey-heading">
        <div><span className="section-kicker">The work behind the work</span><h2>Experience<span>.</span></h2></div>
        <p>Different environments.<br />A growing perspective.</p>
      </header>
      <div className="journey-list">
        {experiences.map((experience, index) => (
          <details key={experience.company} className="journey-entry" open={index === 0}>
            <summary>
              <div className="journey-period"><span className="journey-node" aria-hidden="true" /><span>{experience.date}</span></div>
              <div className="journey-identity"><span>{experience.title}</span><h3>{experience.company}</h3><small>{experience.location}</small></div>
              <span className="journey-toggle" aria-hidden="true"><Plus size={20} /></span>
            </summary>
            <div className="journey-content">
              <div className="journey-note"><ArrowUpRight size={20} /><span>{index === 0 ? "Product thinking meets practice." : index === 1 ? "Interfaces meet infrastructure." : "Understanding the workflow."}</span></div>
              <ul>{experience.points.map(point => <li key={point}>{point}</li>)}</ul>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
