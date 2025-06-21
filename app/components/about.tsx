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
                I'm a passionate Full Stack Developer currently pursuing B.Tech in Computer Science and Engineering at SRM Institute of Science and Technology with a strong academic record of 9.2/10 CGPA.
              </p>

              <p className="about-content text-lg text-gray-300 leading-relaxed">
                I specialize in building web applications using the MERN stack, with expertise in JavaScript, Python, and Java. I'm experienced in RESTful API development, database management, and cloud platforms like AWS and GCP.
              </p>

              <p className="about-content text-lg text-gray-300 leading-relaxed">
                I've successfully completed internships at Extended Leafs Inc and Shamgar Software Solutions, where I improved API response times by 25% and enhanced model efficiency by 20%. I'm passionate about creating scalable solutions and collaborating in cross-functional teams.
              </p>
            </div>

            {/* Stats */}
            <div className="about-content grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-light text-white mb-2">9.2</div>
                <div className="text-sm text-gray-400">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white mb-2">3+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white mb-2">2</div>
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
