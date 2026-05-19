"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

export default function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    tl.fromTo(".about-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }).fromTo(
      ".about-content",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.2 },
      "-=0.5",
    )
  }, [])

  return (
    <section id="about" className="about-section py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="about-title text-4xl lg:text-5xl font-light text-white mb-8">About Me</h2>

            <div className="space-y-6">
              <p className="about-content text-lg text-gray-300 leading-relaxed">
                I enjoy building products that combine clean user experiences with strong backend systems and intelligent automation. My work spans full stack development, AI-powered workflows, computer vision, and scalable Progressive Web Applications.
              </p>

              <p className="about-content text-lg text-gray-300 leading-relaxed">
                I’m particularly interested in building systems that solve real operational problems while maintaining high-performance user experiences and scalable architectures.
              </p>

              <p className="about-content text-lg text-gray-300 leading-relaxed">
                Currently, I’m working as a ServiceNow Intern at Deloitte, where I contribute to enterprise workflow automation and backend operational systems.
              </p>
            </div>

            {/* Highlights List */}
            <div className="about-content mt-8 space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>B.Tech in Computer Science & Engineering (IoT) at SRM IST</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                <span>IEEE Research Publication in Edge AI & Speech Recognition</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                <span>Multiple Hackathon Winner & National Semi-Finalist</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span>Experience across AI, Full Stack Development, and Workflow Automation</span>
              </div>
            </div>

            {/* Stats */}
            <div className="about-content grid grid-cols-3 gap-8 mt-10">
              <div className="text-center">
                <div className="text-3xl font-light text-white mb-2 font-medium">9.31</div>
                <div className="text-sm text-gray-400">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white mb-2 font-medium">IEEE</div>
                <div className="text-sm text-gray-400">Research Pub</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white mb-2 font-medium">3</div>
                <div className="text-sm text-gray-400">Internships</div>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="about-content flex items-center justify-center">
            <div className="w-80 h-80 lg:w-96 lg:h-96 relative group transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-800 relative">
                <Image
                  src="/dp1.jpg"
                  alt="Rajul Mishra"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 5%' }}
                  priority
                />
              </div>
              <div
                className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
                  boxShadow: "0 0 3rem 0.5rem rgba(124, 58, 237, 0.2)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
