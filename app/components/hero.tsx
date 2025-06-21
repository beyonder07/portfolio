"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ChevronDown, Github, Linkedin, Mail, Instagram } from "lucide-react"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3.5 })

    // Main title animation
    tl.fromTo(".hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
      .fromTo(".hero-subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.8")
      .fromTo(
        ".hero-description",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.6",
      )
      .fromTo(".hero-cta", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.4")
      .fromTo(".hero-social", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, ease: "power2.out" }, "-=0.8")

    // Floating animation for scroll indicator
    gsap.to(".scroll-indicator", {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    })

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20

      gsap.to(".parallax-element", {
        x: x,
        y: y,
        duration: 0.5,
        ease: "power2.out",
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section ref={heroRef} id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-element absolute top-20 right-20 w-2 h-2 bg-blue-500 rounded-full opacity-60"></div>
        <div className="parallax-element absolute bottom-40 left-20 w-1 h-1 bg-purple-500 rounded-full opacity-40"></div>
        <div className="parallax-element absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50"></div>
      </div>

      <div className="relative z-10 text-center px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main content */}
        <div className="hero-title mb-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-medium">
              Rajul
            </span>
          </h1>
        </div>

        <div className="hero-subtitle mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300">Full Stack Developer</h2>
        </div>

        <div className="hero-description mb-12">
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer with strong JavaScript, Python, and Java skills. Experienced in building web applications using the MERN stack. Proficient in RESTful API development, database management, and cloud platforms.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:scale-105 transition-all duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-full hover:border-gray-400 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="hero-social flex justify-center space-x-6">
          <a href="https://github.com/beyonder07" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rajul-mishra-621548258" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Linkedin size={24} />
          </a>
          <a href="https://www.instagram.com/13_rajul/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Instagram size={24} />
          </a>
          <a href="mailto:mrajul1234@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400">
        <ChevronDown size={24} />
      </div>
    </section>
  )
}
