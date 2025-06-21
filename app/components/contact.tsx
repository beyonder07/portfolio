"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, MessageSquare, Send, Github, Linkedin, Phone, MapPin, Instagram } from "lucide-react"
import { toast } from "sonner"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".contact-element",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log("Submitting form data:", formData)
      
      // Check if we're online
      if (!navigator.onLine) {
        toast.error("No internet connection. Please check your connection and try again.")
        setIsSubmitting(false)
        return
      }
      
      // Add timeout to prevent hanging requests
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout
      
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)
      console.log("Response status:", response.status)
      
      if (response.ok) {
        const result = await response.json()
        console.log("Success response:", result)
        toast.success("Message sent! I'll get back to you soon.")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        const errorData = await response.json().catch(() => ({}))
        console.error("Error response:", errorData)
        toast.error("Failed to send message. Please try again later.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      if (error instanceof TypeError && error.message.includes('fetch')) {
        toast.error("Network error. Please check your connection and try again.")
      } else if (error.name === 'AbortError') {
        toast.error("Request timed out. Please try again.")
      } else {
        toast.error("An error occurred. Please try again later.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section py-20 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="contact-element text-4xl lg:text-5xl font-light text-white mb-6">Get In Touch</h2>
          <p className="contact-element text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="contact-element">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-element space-y-8">
            <div>
              <h3 className="text-2xl font-light text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-500" size={20} />
                  <a href="mailto:mrajul1234@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                    mrajul1234@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-blue-500" size={20} />
                  <a href="tel:+919368069761" className="text-gray-300 hover:text-blue-400 transition-colors">
                    +91 93680 69761
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-blue-500" size={20} />
                  <span className="text-gray-300">Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/beyonder07" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/rajul-mishra-621548258" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.instagram.com/13_rajul/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="contact-element mt-20 text-center border-t border-gray-800 pt-8">
          <p className="text-gray-400">© {new Date().getFullYear()} Rajul Mishra. Built with Next.js and lots of ☕</p>
        </div>
      </div>
    </section>
  )
}
