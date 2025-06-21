"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const projects = [
    {
      title: "WizPro – AI-Powered Code Review System",
      description:
        "An intelligent code review system that uses AI to analyze code quality, suggest improvements, and maintain coding standards. Features JWT authentication and encryption for secure code handling.",
      technologies: ["MERN Stack", "JWT", "Encryption", "AI/ML"],
      image: "/wizpro.png",
      github: "https://github.com/beyonder07/WizPro",
      live: "https://wizpro.pages.dev/",
    },
    {
      title: "XenoCRM – Customer Relationship Management",
      description:
        "A comprehensive CRM system with role-based authentication, customer management, and analytics dashboard. Built with modern web technologies and deployed on cloud platforms.",
      technologies: ["MERN", "Role-based Auth", "Render", "Cloudflare"],
      image: "/crm.png",
      github: "https://github.com/beyonder07/XenoCrm",
      live: "https://xenocrm.pages.dev",
    },
    {
      title: "Intbot Symposium Website",
      description:
        "Official website for the Intbot Symposium event at SRM Institute. Features event information, registration system, and responsive design with modern UI/UX.",
      technologies: ["React", "Node.js", "Express", "REST APIs"],
      image: "/intbot.png",
      github: "#",
      live: "https://srmintbot.in",
    },
  ]

  return (
    <section id="projects" className="projects-section py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="project-card text-4xl lg:text-5xl font-light text-white mb-6">Featured Projects</h2>
          <p className="project-card text-lg text-gray-400 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition-all duration-300"
            >
              {/* Project image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-medium text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
