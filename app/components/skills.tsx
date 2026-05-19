"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Monitor, Database, Cpu, Cloud, BookOpen } from "lucide-react"

export default function Skills() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".skill-card",
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

  const categories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="text-blue-500 w-6 h-6" />,
      items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend & Databases",
      icon: <Database className="text-purple-500 w-6 h-6" />,
      items: ["Node.js", "Express.js", "PostgreSQL", "Supabase", "REST APIs", "SQLite"],
    },
    {
      title: "AI & Machine Learning",
      icon: <Cpu className="text-teal-500 w-6 h-6" />,
      items: ["Python", "OpenCV", "YOLOv4-Tiny", "Scikit-learn", "Generative AI", "LLM APIs", "Prompt Engineering"],
    },
    {
      title: "Cloud & Developer Tools",
      icon: <Cloud className="text-pink-500 w-6 h-6" />,
      items: ["Git", "GitHub", "OCI", "Vercel", "Postman", "Streamlit"],
    },
    {
      title: "Core Computer Science",
      icon: <BookOpen className="text-yellow-500 w-6 h-6" />,
      items: ["DSA", "DBMS", "Operating Systems", "Computer Networks"],
    },
  ]

  return (
    <section id="skills" className="skills-section py-20 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="skill-card text-4xl lg:text-5xl font-light text-white mb-6">Skills & Expertise</h2>
          <p className="skill-card text-lg text-gray-400 max-w-2xl mx-auto">
            A structured breakdown of my technical capabilities, engineering tools, and core computer science fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="skill-card bg-gray-800/40 backdrop-blur-sm border border-gray-700/80 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  {cat.icon}
                  <h3 className="text-xl font-medium text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {cat.items.map((tool, toolIdx) => (
                    <span
                      key={toolIdx}
                      className="px-3.5 py-1.5 bg-gray-900/60 text-gray-300 rounded-full text-xs hover:bg-gray-800 hover:text-white transition-colors duration-300 border border-gray-700/50"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
