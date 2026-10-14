import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SkillsEducation from "@/components/SkillsEducation";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Projects />
      <Experience />
      <SkillsEducation />
      <Certifications />
      <Contact />
      <footer className="studio-footer">
        &copy; {new Date().getFullYear()} Sendi Setiawan. All rights reserved.
      </footer>
    </main>
  );
}
