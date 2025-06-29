"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Loader from "./components/loader"
import Navbar from "./components/navbar"
import Home from "./components/hero"
import About from "./components/about"
import Education from "./components/education"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Experience from "./components/experience"
import Resume from "./components/resume"
import Contact from "./components/contact"
import CustomCursor from "./components/custom-cursor"
import RunningDinosaur from "./components/running-dinosaur"
import EasterEggTrigger from "./components/easter-egg-trigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Portfolio() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!loading) {
      // GSAP animations are handled within individual components
      // No global fade-in animation needed
    }
  }, [loading])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <CustomCursor />
      <RunningDinosaur />
      <EasterEggTrigger />
      <Navbar />
      <main>
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
    </div>
  )
}
