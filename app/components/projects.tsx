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
        stagger: 0.1,
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
      title: "PowerHouse Gym CRM Platform",
      tagline: "Production-grade gym management SaaS platform.",
      description:
        "Built a scalable gym CRM Progressive Web App focused on operational management, trainer workflows, attendance systems, and business analytics. Optimized for real-world usage and high performance.",
      features: [
        "Membership tracking & workflows",
        "Attendance tracking & analytics",
        "Trainer workflow automation",
        "Real-time operational dashboards",
        "Mobile-first PWA architecture",
      ],
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS"],
      image: "/crm.png",
      github: "https://github.com/beyonder07/pwapowerhouse",
      live: "https://pwapowerhouse.vercel.app/",
    },
    {
      title: "TalentLens – AI Resume Screener",
      tagline: "AI-powered candidate evaluation & resume intelligence.",
      description:
        "Developed an LLM-powered resume analysis system that automates candidate evaluation workflows. Integrates Groq API with Llama models to generate structured candidate evaluations and automated ranking.",
      features: [
        "Groq API & Llama integration",
        "Semantic resume analysis",
        "AI-based candidate scoring",
        "Structured evaluation pipelines",
        "Automated ranking workflows",
      ],
      technologies: ["Python", "Streamlit", "Groq API", "SQLite", "PyMuPDF"],
      image: "/wizpro.png",
      github: "https://github.com/beyonder07/ai-resume-screener",
      live: "https://ai-resume-screener-zpujdq2kg5mfmjj5nae3yx.streamlit.app/",
    },
    {
      title: "Real-Time Object Detection",
      tagline: "Low-latency computer vision detection pipeline.",
      description:
        "Built a real-time object detection application using YOLOv4-Tiny and OpenCV DNN optimized for fast inference and live webcam-based detection workflows. Focused on low latency and Edge computation.",
      features: [
        "Real-time computer vision detection",
        "YOLOv4-Tiny model inference",
        "OpenCV DNN backend integration",
        "Webcam feed processing pipeline",
        "Optimized low-latency performance",
      ],
      technologies: ["Python", "OpenCV", "YOLOv4-Tiny"],
      image: "/intbot.png",
      github: "https://github.com/beyonder07/Objectdetection",
      live: "#",
    },
    {
      title: "WizPro – AI-Powered Code Reviewer",
      tagline: "Intelligent AI-driven code analysis and quality verification.",
      description:
        "An intelligent code review system that uses AI to analyze code quality, suggest improvements, and maintain coding standards. Features JWT authentication and encryption for secure code handling.",
      features: [
        "AI code quality analysis",
        "Detailed review suggestion generation",
        "Secure JWT authentication",
        "Encrypted code transmissions",
        "MERN full stack dashboard",
      ],
      technologies: ["MERN Stack", "JWT", "Encryption", "AI/ML"],
      image: "/wizpro.png",
      github: "https://github.com/beyonder07/WizPro",
      live: "https://wiz-pro-g5pc.vercel.app/",
    },
    {
      title: "XenoCRM – Customer Relationship Manager",
      tagline: "Comprehensive analytics and CRM platform.",
      description:
        "A comprehensive CRM system with role-based authentication, customer management, and analytics dashboard. Built with modern web technologies and deployed on cloud platforms.",
      features: [
        "Role-based access controls",
        "Customer pipeline management",
        "Operational analytics dashboard",
        "Cloud hosting with Render",
        "Cloudflare security layers",
      ],
      technologies: ["MERN Stack", "Role-based Auth", "Render", "Cloudflare"],
      image: "/crm.png",
      github: "https://github.com/beyonder07/XenoCrm",
      live: "https://xenocrm.pages.dev",
    },
    {
      title: "Intbot Symposium Website",
      tagline: "Official SRM Institute symposium management platform.",
      description:
        "Official website for the Intbot Symposium event at SRM Institute. Features event information, registration system, and responsive design with modern UI/UX.",
      features: [
        "Event information management",
        "Symposium registration system",
        "REST APIs for real-time signups",
        "Responsive fluid UI layouts",
        "Secure attendee data storage",
      ],
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
            Production-ready applications and intelligent solutions showing systems thinking and real-world impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project image */}
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center overflow-hidden relative">
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
                  <h3 className="text-xl font-medium text-white mb-1">{project.title}</h3>
                  <p className="text-xs text-blue-400 italic mb-4">{project.tagline}</p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Key Features</h4>
                    <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
                      {project.features.map((feat, fIdx) => (
                        <li key={fIdx} className="leading-relaxed">{feat}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2.5 py-0.5 bg-gray-700/60 text-gray-300 text-xs rounded-full border border-gray-600/35">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="p-6 pt-0 mt-auto border-t border-gray-700/50 flex space-x-4">
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 pt-4"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                )}
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 pt-4"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
