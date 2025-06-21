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

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "Java", level: 80 },
    { name: "React.js", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 82 },
    { name: "MySQL", level: 78 },
    { name: "AWS", level: 75 },
  ]

  const tools = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "React.js",
    "Next.js",
    "TailwindCSS",
    "HTML",
    "CSS",
    "Node.js",
    "Express.js",
    "Spring Boot",
    "REST APIs",
    "MongoDB",
    "MySQL",
    "Git",
    "Postman",
    "AWS",
    "GCP",
  ]

  return (
    <section id="skills" className="skills-section py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="skill-item text-4xl lg:text-5xl font-light text-white mb-6">Skills & Technologies</h2>
          <p className="skill-item text-lg text-gray-400 max-w-2xl mx-auto">
            I work with a variety of technologies to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skills with progress bars */}
          <div>
            <h3 className="skill-item text-2xl font-light text-white mb-8">Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
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

          {/* Technologies */}
          <div>
            <h3 className="skill-item text-2xl font-light text-white mb-8">Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="skill-item px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
