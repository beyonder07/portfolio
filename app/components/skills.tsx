"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Skills() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".skill-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const proficiencies = [
    { name: "Next.js / React.js", level: 92 },
    { name: "Python / AI / ML", level: 88 },
    { name: "Node.js / Express.js", level: 86 },
    { name: "PostgreSQL / Supabase", level: 85 },
    { name: "Generative AI / LLM APIs", level: 90 },
    { name: "Cloud Engineering (OCI / Vercel)", level: 80 },
  ]

  const categories = {
    "Frontend Development": [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "Backend & Databases": [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "REST APIs",
      "SQLite"
    ],
    "AI / Machine Learning": [
      "Python",
      "OpenCV",
      "YOLOv4-Tiny",
      "Scikit-learn",
      "Generative AI",
      "LLM APIs",
      "Prompt Engineering"
    ],
    "Cloud & Developer Tools": [
      "Git",
      "GitHub",
      "OCI",
      "Vercel",
      "Postman",
      "Streamlit"
    ],
    "Core Computer Science": [
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "DSA"
    ]
  }

  return (
    <section id="skills" className="skills-section py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="skill-item text-4xl lg:text-5xl font-light text-white mb-6">Skills & Expertise</h2>
          <p className="skill-item text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiencies and engineering tools
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skills with progress bars */}
          <div>
            <h3 className="skill-item text-2xl font-light text-white mb-8">Engineering Core</h3>
            <div className="space-y-6">
              {proficiencies.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grouped Technologies */}
          <div>
            <h3 className="skill-item text-2xl font-light text-white mb-8">Technologies & Frameworks</h3>
            <div className="space-y-6">
              {Object.entries(categories).map(([category, items], idx) => (
                <div key={idx} className="skill-item bg-gray-800/20 backdrop-blur-sm border border-gray-800/80 rounded-xl p-4">
                  <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-xs hover:bg-gray-700 transition-colors duration-300 border border-gray-700/50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
