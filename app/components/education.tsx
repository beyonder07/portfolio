"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GraduationCap, Calendar, Award } from "lucide-react"

export default function Education() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".education-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".education-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "SRM Institute of Science and Technology",
      duration: "Sep 2022 – Present",
      cgpa: "9.2/10",
      description: "Currently pursuing my undergraduate degree with a strong focus on computer science fundamentals, software engineering, and modern development practices.",
    },
  ]

  const certifications = [
    {
      name: "ISRO IIRS Certification",
      year: "2024",
      category: "AI/ML",
      description: "Certification in Artificial Intelligence and Machine Learning from Indian Space Research Organisation.",
    },
    {
      name: "100 Days of Web Dev Bootcamp",
      year: "2025",
      category: "Web Development",
      description: "Comprehensive web development bootcamp covering modern technologies and best practices.",
    },
  ]

  const achievements = [
    {
      title: "Smart India Hackathon",
      year: "2024",
      achievement: "Semi-Finalist",
      description: "Reached the semi-finals in the prestigious Smart India Hackathon competition.",
    },
    {
      title: "SRM Hackathon",
      year: "2023",
      achievement: "Winner",
      description: "Won the SRM Institute hackathon with an innovative project solution.",
    },
  ]

  return (
    <section id="education" className="education-section py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="education-item text-4xl lg:text-5xl font-light text-white mb-6">Education & Achievements</h2>
          <p className="education-item text-lg text-gray-400 max-w-2xl mx-auto">
            My academic journey and notable achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <h3 className="education-item text-2xl font-light text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-500" size={28} />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="education-item bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-medium text-white mb-2">{edu.degree}</h4>
                      <p className="text-blue-400 font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-400 text-sm mb-1">{edu.duration}</div>
                      <div className="text-2xl font-bold text-green-400">{edu.cgpa}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="space-y-12">
            {/* Certifications */}
            <div>
              <h3 className="education-item text-2xl font-light text-white mb-8 flex items-center gap-3">
                <Award className="text-purple-500" size={28} />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="education-item bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-medium text-white">{cert.name}</h4>
                      <span className="text-sm text-gray-400">{cert.year}</span>
                    </div>
                    <p className="text-blue-400 text-sm mb-2">{cert.category}</p>
                    <p className="text-gray-300 text-sm">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="education-item text-2xl font-light text-white mb-8 flex items-center gap-3">
                <Award className="text-yellow-500" size={28} />
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="education-item bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-medium text-white">{achievement.title}</h4>
                      <span className="text-sm text-gray-400">{achievement.year}</span>
                    </div>
                    <p className="text-green-400 text-sm mb-2 font-medium">{achievement.achievement}</p>
                    <p className="text-gray-300 text-sm">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 