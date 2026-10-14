"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const disciplines = [
  { name: "Product", note: "From a workplace conversation to a communication practice app. Ideas become useful experiences.", project: "Tutur / PadTitur" },
  { name: "Engineering", note: "From an interface to the systems behind it. I build across web, mobile, and backend development.", project: "Full-stack / iOS / Systems" },
  { name: "Research", note: "From a question to an experiment. I explore machine learning through implementation and evaluation.", project: "3D U-Net / Cryo-ET" },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  return (
    <section className="studio-hero" id="top">
      <nav className="studio-nav" aria-label="Main navigation">
        <a href="#top" className="wordmark" aria-label="Sendi Setiawan home">sendi<span aria-hidden="true">✳</span></a>
        <div><a href="#projects">Work</a><a href="#experience">About</a><a href="#contact">Contact <ArrowUpRight size={14} /></a></div>
      </nav>
      <div className="hero-intro"><span>Sendi Setiawan</span><span>Software engineer / Jakarta, ID</span></div>
      <div className="hero-stage">
        <div className="hero-copy">
          <h1>Thinking<br /><span>into things.</span></h1>
          <p>I connect product thinking, engineering, and research to turn complex problems into useful software.</p>
          <a className="studio-button" href="#projects">Explore my work <ArrowDown size={17} /></a>
        </div>
        <div className="discipline-machine">
          <div className="machine-heading"><span>A practice in three dimensions</span><span aria-hidden="true">↗</span></div>
          <svg className={`machine-art machine-active-${active}`} viewBox="0 0 460 360" role="img" aria-label={`Interactive diagram highlighting ${disciplines[active].name}`}>
            <defs><pattern id="dotgrid" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#47454e" /></pattern></defs>
            <rect width="460" height="360" fill="url(#dotgrid)" />
            <g className="machine-orbits" fill="none" strokeWidth="1.4">
              <ellipse className="orbit orbit-0" cx="230" cy="180" rx="167" ry="67" transform="rotate(-35 230 180)" />
              <ellipse className="orbit orbit-1" cx="230" cy="180" rx="167" ry="67" transform="rotate(35 230 180)" />
              <ellipse className="orbit orbit-2" cx="230" cy="180" rx="67" ry="157" />
            </g>
            <path d="M230 137 269 160 269 205 230 228 191 205 191 160Z" fill="#17161c" stroke="#cdc2ff" strokeWidth="1.5" />
            <path d="m191 160 39 23 39-23m-39 23v45m0-91v46" fill="none" stroke="#cdc2ff" />
            <circle cx="91" cy="257" r="8" fill={active === 0 ? "#cdc2ff" : "#514d60"} />
            <circle cx="366" cy="258" r="8" fill={active === 1 ? "#cdc2ff" : "#514d60"} />
            <circle cx="230" cy="23" r="8" fill={active === 2 ? "#cdc2ff" : "#514d60"} />
            <text x="230" y="310" textAnchor="middle" fill="#aaa6b5" fontSize="11">IDEA → EXPERIMENT → IMPLEMENTATION</text>
          </svg>
          <div className="discipline-tabs" aria-label="Explore my disciplines">{disciplines.map((item, index) => <button key={item.name} aria-pressed={active === index} onClick={() => setActive(index)}>{item.name}</button>)}</div>
          <div className="machine-note" aria-live="polite"><p>{disciplines[active].note}</p><span>{disciplines[active].project}</span></div>
        </div>
      </div>
      <div className="hero-bottom"><span>Curiosity, built into practice.</span><a href="#projects">Selected work <ArrowDown size={14} /></a></div>
    </section>
  );
}
