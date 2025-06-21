"use client"

import { Download } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">My Resume</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Download my resume to get a more detailed overview of my skills, experience, and achievements.
        </p>
        <a
          href="/RAJULMISHRA-RESUME.pdf"
          download="RajulMishra_Resume.pdf"
          className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:scale-105 transition-all duration-300"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Resume
        </a>
      </div>
    </section>
  )
} 