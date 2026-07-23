import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SkillsEducation from "@/components/SkillsEducation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Experience />
      <Projects />
      <SkillsEducation />
      <footer className="py-8 text-center text-gray-600 font-sans text-sm border-t border-gray-900 mt-24">
        &copy; {new Date().getFullYear()} Sendi Setiawan. All rights reserved.
      </footer>
    </main>
  );
}
