"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Experience() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".timeline-item",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".experience-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const experiences = [
    {
      year: "Jan 2025 - Apr 2025",
      title: "ML Intern",
      company: "Shamgar Software Solutions",
      description:
        "Developed Python scripts for feature extraction and improved model efficiency by 20%. Built POCs for scalable ML integrations and collaborated with the development team.",
    },
    {
      year: "Jan 2025 - Feb 2025",
      title: "Full Stack Development Intern",
      company: "Extended Leafs Inc",
      description:
        "Built full-stack modules using React and Node.js. Reduced API response time by 25% and collaborated in Agile sprints with designers and product managers.",
    },
  ]

  return (
    <section id="experience" className="experience-section py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="timeline-item text-4xl lg:text-5xl font-light text-white mb-6">Experience</h2>
          <p className="timeline-item text-lg text-gray-400 max-w-2xl mx-auto">
            My professional journey and internship experiences
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item relative flex items-start">
                {/* Timeline dot */}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                  <div className="w-8 h-8 bg-black rounded-full"></div>
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-medium text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-gray-400 text-sm mt-2 md:mt-0">{exp.year}</div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
