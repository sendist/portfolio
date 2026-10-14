"use client";

import { useState } from "react";
import { Code2, Database, Brain, Smartphone, ArrowUpRight, GraduationCap, Languages } from "lucide-react";

const skillGroups = [
  { title: "Web & mobile", icon: Smartphone, description: "Interfaces people can use, from browser experiences to Apple Pencil interaction.", items: ["JavaScript", "React", "Next.js", "Swift", "Flutter", "PencilKit"], evidence: "Tutur / PadTitur / WhatsApp Broadcasting" },
  { title: "Backend & systems", icon: Code2, description: "APIs, application services, and the connections that keep data moving.", items: ["Java", "Golang", "NestJS", "Spring Boot", "Express.js", "Apache Kafka"], evidence: "E-Commerce Microservices / Financial Workflow Monitoring" },
  { title: "AI & research", icon: Brain, description: "Models, experiments, and inference tools that make predictions inspectable.", items: ["Python", "PyTorch", "MONAI", "TensorFlow", "Core ML", "Streamlit"], evidence: "3D U-Net / PadTitur / Face Emotion Recognition" },
  { title: "Data & tooling", icon: Database, description: "Storage and development tools supporting the application lifecycle.", items: ["PostgreSQL", "MySQL", "MongoDB", "Docker", "Git", "Redis"], evidence: "Full-stack dashboards / Backend development" },
];
const collaboration = ["Problem solving", "Communication", "Time management", "Collaboration", "Adaptability", "Growth mindset"];

export default function SkillsEducation() {
  const [active, setActive] = useState(0);
  const selected = skillGroups[active];
  const Icon = selected.icon;
  return (
    <>
      <section id="education" className="foundation-section section-space">
        <header className="section-heading"><div><span className="section-kicker">Where the questions began</span><h2>Education<span>.</span></h2></div><GraduationCap className="foundation-icon" size={40} strokeWidth={1} aria-hidden="true" /></header>
        <div className="foundation-card">
          <div className="foundation-degree">
            <div className="foundation-meta"><span>2021 – 2025</span><span>Bachelor of Applied Science</span></div>
            <h3>Informatics<br />Engineering</h3>
            <p>Politeknik Negeri Bandung</p>
            <div className="foundation-coursework"><span>Software development</span><span>Web development</span><span>Machine learning</span><span>Artificial intelligence</span></div>
          </div>
          <div className="foundation-score"><span>Academic foundation</span><div><strong>3.63</strong><span>/ 4.00</span></div><span>Grade point average</span><svg viewBox="0 0 200 95" fill="none" stroke="currentColor" aria-hidden="true"><path d="M20 72 100 92 180 72V30L100 8 20 30Zm0-42 80 22 80-22M100 52v40M20 51l80 21 80-21" /><path d="m60 19 80 23v40m-80-41 80-22" opacity=".4" /></svg></div>
        </div>
      </section>
      <section id="skills" className="toolkit-section section-space">
        <header className="section-heading journey-heading"><div><span className="section-kicker">Tools follow the problem</span><h2>Skills<span>.</span></h2></div><p>A toolkit across disciplines.<br />Explore each area.</p></header>
        <div className="toolkit-layout">
          <div className="toolkit-selector" aria-label="Explore skill areas">{skillGroups.map((group,index) => { const GroupIcon=group.icon; return <button key={group.title} aria-pressed={active===index} aria-controls="skill-detail" onClick={() => setActive(index)}><GroupIcon size={18} strokeWidth={1.5} /><span>{group.title}</span><ArrowUpRight size={16} /></button>; })}</div>
          <div id="skill-detail" className="toolkit-detail" aria-live="polite">
            <div className="toolkit-detail-heading"><h3>{selected.title}</h3><Icon size={42} strokeWidth={1} aria-hidden="true" /></div>
            <p>{selected.description}</p>
            <div className="toolkit-chips">{selected.items.map(item => <span key={item}>{item}</span>)}</div>
            <div className="toolkit-evidence"><span>In practice</span><p>{selected.evidence}</p></div>
          </div>
        </div>
        <div className="human-skills"><div><h3>How I work</h3><p>The skills between the tools.</p></div><div>{collaboration.map(item => <span key={item}>{item}</span>)}</div></div>
        <div className="language-strip"><Languages size={22} strokeWidth={1.5} aria-hidden="true" /><p>Indonesian <span>Native</span></p><p>English <span>TOEIC Listening & Reading</span></p><strong>955<span>/990</span></strong></div>
      </section>
    </>
  );
}
