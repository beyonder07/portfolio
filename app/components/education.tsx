"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GraduationCap, Award, BookOpen } from "lucide-react"

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
      degree: "B.Tech in Computer Science and Engineering (IoT)",
      institution: "SRM Institute of Science and Technology",
      duration: "Sep 2022 – Present",
      cgpa: "9.31/10",
      description: "Focusing on IoT architectures, cloud integration, data structures, algorithms, DBMS, operating systems, and computer networks.",
    },
  ]

  const research = [
    {
      title: "Real-Time Smart Meeting Assistant Using Edge AI for Audio Capture, Speech-to-Text Conversion, and Meeting Scheduling",
      publisher: "IEEE Xplore Digital Library",
      description: "Published research focused on Edge AI-based speech recognition systems capable of real-time audio capture, speech-to-text conversion, and intelligent meeting scheduling automation.",
      areas: ["Edge AI", "Speech Recognition", "Audio Processing", "Intelligent Scheduling", "Real-Time Automation"],
    },
  ]

  const certifications = [
    {
      name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      year: "2025",
      category: "Cloud Engineering",
      description: "Oracle University certification covering foundational cloud concepts, OCI architecture, security, and operations.",
    },
    {
      name: "AI/ML for Geodata Analysis",
      year: "2024",
      category: "Artificial Intelligence",
      description: "Indian Institute of Remote Sensing (IIRS), ISRO certification covering ML applications in geodata pipelines.",
    },
    {
      name: "Intro to AI: A Beginner’s Guide to Artificial Intelligence",
      year: "2024",
      category: "Artificial Intelligence",
      description: "In-depth training on neural network architectures, machine learning paradigms, and data workflows.",
    },
  ]

  const achievements = [
    {
      title: "Flipkart GRiD 7.0 Hackathon",
      year: "2025",
      achievement: "National Semi-Finalist",
      description: "Qualified among the top teams nationwide in Flipkart’s flagship software development competition.",
    },
    {
      title: "Smart India Hackathon",
      year: "2024",
      achievement: "Semi-Finalist",
      description: "Developed a Remote AQI Sensor Monitoring solution for environmental analytics and IoT-based monitoring.",
    },
    {
      title: "APPIZAP Hackathon",
      year: "2024",
      achievement: "Runner-Up",
      description: "Built a collaborative application integrating social networking with educational resource sharing systems.",
    },
    {
      title: "Innovation Quest",
      year: "2024",
      achievement: "Finalist",
      description: "Named a finalist in the university-level innovation ideathon for presenting scalable technical solutions.",
    },
    {
      title: "ABINITO 23",
      year: "2023",
      achievement: "Winner",
      description: "Secured first place in the data analytics competition using insight-driven statistical models.",
    },
  ]

  return (
    <section id="education" className="education-section py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="education-item text-4xl lg:text-5xl font-light text-white mb-6">Education & Credentials</h2>
          <p className="education-item text-lg text-gray-400 max-w-2xl mx-auto">
            Academic foundation, professional certifications, published research, and hackathon achievements
          </p>
        </div>

        {/* Top Section: Education & Research on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column: Education & Research */}
          <div className="space-y-12">
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

            <div>
              <h3 className="education-item text-2xl font-light text-white mb-8 flex items-center gap-3">
                <BookOpen className="text-teal-500" size={28} />
                Research Publication
              </h3>
              <div className="space-y-6">
                {research.map((res, index) => (
                  <div key={index} className="education-item bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                    <h4 className="text-lg font-medium text-white mb-2">{res.title}</h4>
                    <p className="text-blue-400 font-medium mb-3">{res.publisher}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{res.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {res.areas.map((area, areaIdx) => (
                        <span key={areaIdx} className="px-2.5 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="space-y-12">
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
          </div>
        </div>

        {/* Bottom Section: Achievements (Horizontally & Vertically Symmetric Grid) */}
        <div className="border-t border-gray-800/80 pt-16">
          <div className="text-center mb-12">
            <h3 className="education-item text-3xl font-light text-white mb-4 flex items-center justify-center gap-3">
              <Award className="text-yellow-500" size={32} />
              Hackathons & Achievements
            </h3>
            <p className="education-item text-gray-400 max-w-xl mx-auto text-sm">
              Recognition and milestones achieved in national and university level competitions
            </p>
          </div>

          <div className="education-item flex flex-wrap justify-center gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col justify-between hover:border-gray-600 transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-medium text-white leading-snug">{achievement.title}</h4>
                    <span className="text-xs text-gray-400 bg-gray-900/60 px-2 py-1 rounded border border-gray-800">{achievement.year}</span>
                  </div>
                  <p className="text-green-400 text-xs font-semibold uppercase tracking-wider mb-3">
                    {achievement.achievement}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}