"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const certificates = [
  { title: "Junior BE Spring Boot", issuer: "ArutalaLab", image: "/certifications/Junior_BE_Spring_Boot_Sendi_Setiawan.jpg" },
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

const certificateAreas = ["All", "Development", "AI & data", "Career & language"];
const areaFor = (title: string) => /Machine Learning|Artificial Intelligence|Data Science/.test(title) ? "AI & data" : /TOEIC|Employability/.test(title) ? "Career & language" : "Development";

export default function Certifications() {
  const [area, setArea] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<(typeof certificates)[number] | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const visible = certificates.filter(cert => (area === "All" || areaFor(cert.title) === area) && `${cert.title} ${cert.issuer}`.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (!selected) return;
    const focused = document.activeElement as HTMLElement | null;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "Tab") { event.preventDefault(); closeRef.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = oldOverflow; document.removeEventListener("keydown", onKey); focused?.focus({ preventScroll: true }); };
  }, [selected]);

  return (
    <section id="certifications" className="credentials-section section-space">
      <header className="section-heading"><div><span className="section-kicker">A record of continued learning</span><h2>Certifications<span>.</span></h2></div><div className="credentials-count"><strong>{certificates.length}</strong><span>documents in the archive</span></div></header>
      <div className="credentials-toolbar">
        <div className="credentials-filters" aria-label="Filter certificates">{certificateAreas.map(item => <button key={item} aria-pressed={area===item} onClick={() => setArea(item)}>{item}</button>)}</div>
        <label className="credentials-search"><Search size={15} aria-hidden="true" /><input type="search" aria-label="Search certificates" placeholder="Find a certificate" value={query} onChange={event => setQuery(event.target.value)} /></label>
      </div>
      <p className="credentials-result" aria-live="polite">{visible.length} {visible.length === 1 ? "document" : "documents"} · Select to inspect</p>
      <div className="credentials-grid">
        {visible.map(cert => (
          <button key={cert.image} className="credential-record" onClick={() => setSelected(cert)} aria-label={`View certificate: ${cert.title}`}>
            <div className="credential-thumbnail"><Image fill sizes="112px" src={cert.image} alt="" /></div>
            <div className="credential-info"><span>{cert.issuer}</span><h3>{cert.title}</h3><small>{areaFor(cert.title)}</small></div>
            <ArrowUpRight size={17} aria-hidden="true" />
          </button>
        ))}
      </div>
      {visible.length === 0 && <div className="credentials-empty"><p>No certificates match your search.</p><button onClick={() => { setQuery(""); setArea("All"); }}>Show all certificates</button></div>}
      <AnimatePresence>
        {selected && (
          <motion.div className="certificate-overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setSelected(null)}>
            <div role="dialog" aria-modal="true" aria-labelledby="certificate-title" className="certificate-dialog" onClick={event => event.stopPropagation()}>
              <header><div><span>{selected.issuer}</span><h3 id="certificate-title">{selected.title}</h3></div><button ref={closeRef} aria-label="Close certificate preview" onClick={() => setSelected(null)}><X size={20} /></button></header>
              <div className="certificate-document"><motion.img src={selected.image} alt={`${selected.title} certificate`} /></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
