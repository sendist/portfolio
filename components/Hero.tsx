"use client";

import { useState } from "react";
import Image from "next/image";
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
        <a href="#top" className="wordmark" aria-label="Sendi Setiawan home">sendist</a>
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
          <div className="machine-heading"><span>The person behind the projects</span><span aria-hidden="true">↗</span></div>
          <figure className="hero-portrait">
            <Image
              src="/assets/my-photo.png"
              alt="Sendi Setiawan"
              fill
              preload
              sizes="(max-width: 700px) 90vw, 42vw"
            />
            <figcaption><span>Sendi Setiawan</span><span>Curious by nature. Builder by practice.</span></figcaption>
          </figure>
          <div className="discipline-tabs" aria-label="Explore my disciplines">{disciplines.map((item, index) => <button key={item.name} aria-pressed={active === index} onClick={() => setActive(index)}>{item.name}</button>)}</div>
          <div className="machine-note" aria-live="polite"><p>{disciplines[active].note}</p><span>{disciplines[active].project}</span></div>
        </div>
      </div>
      <div className="hero-bottom"><span>Curiosity, built into practice.</span><a href="#projects">Selected work <ArrowDown size={14} /></a></div>
    </section>
  );
}
