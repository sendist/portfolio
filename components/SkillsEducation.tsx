"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: "Java, JavaScript, Python, Golang, Swift, Next.js, NestJS, Spring, Flutter, TensorFlow, PyTorch.",
  },
  {
    category: "Databases & Technologies",
    items: "PostgreSQL, MySQL, MongoDB, Docker, Git.",
  },
  {
    category: "Spoken Languages",
    items: "Indonesian (Native), English (TOEIC Listening & Reading 955/990).",
  },
  {
    category: "Soft Skills",
    items: "Problem Solving, Communication, Time Management, Collaboration, Adaptability, Growth Mindset.",
  },
  {
    category: "Certifications",
    items: "Dicoding: Java, JavaScript, Python, SQL, Back-End with JS, Data Visualization, Basic of AI, Data Science, ML Beginners, Fundamental of Deep Learning, Applied Machine Learning.",
  }
];

export default function SkillsEducation() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-12 tracking-tight uppercase">
            Education
          </h2>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold text-gray-100">
                Bachelor of Applied Science, Informatics Engineering
              </h3>
              <p className="text-gray-300 font-medium font-sans">
                Politeknik Negeri Bandung
              </p>
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500 font-sans">
                <span>2021 – 2025</span>
                <span>&middot;</span>
                <span>GPA 3.63</span>
              </div>
              <p className="text-gray-400 font-sans leading-relaxed mt-2">
                Relevant coursework: Software Development, Web Development, Machine Learning, Artificial Intelligence.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-12 tracking-tight uppercase">
            Skills
          </h2>
          <div className="flex flex-col gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col gap-2 border-b border-gray-900 pb-4">
                <h4 className="text-gray-300 font-bold uppercase tracking-wider text-sm font-sans">
                  {skill.category}
                </h4>
                <p className="text-gray-400 font-sans leading-relaxed">
                  {skill.items}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
