"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface AnimatedTextProps {
  children: string
  className?: string
  delay?: number
  stagger?: number
  animation?: "slideUp" | "fadeIn" | "typewriter" | "splitWords" | "reveal"
}

export function AnimatedText({
  children,
  className = "",
  delay = 0,
  stagger = 0.05,
  animation = "slideUp",
}: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const element = textRef.current
    const text = children

    // Clear existing content
    element.innerHTML = ""

    if (animation === "splitWords") {
      // Split into words
      const words = text.split(" ")
      words.forEach((word, index) => {
        const wordSpan = document.createElement("span")
        wordSpan.textContent = word + (index < words.length - 1 ? " " : "")
        wordSpan.style.display = "inline-block"
        wordSpan.style.overflow = "hidden"
        element.appendChild(wordSpan)
      })

      gsap.fromTo(
        element.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: stagger,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    } else if (animation === "typewriter") {
      element.textContent = ""
      const chars = text.split("")

      chars.forEach((char) => {
        const charSpan = document.createElement("span")
        charSpan.textContent = char
        charSpan.style.opacity = "0"
        element.appendChild(charSpan)
      })

      gsap.to(element.children, {
        opacity: 1,
        duration: 0.05,
        stagger: 0.05,
        delay: delay,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    } else if (animation === "reveal") {
      element.textContent = text
      element.style.clipPath = "inset(0 100% 0 0)"

      gsap.to(element, {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.2,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    } else {
      // Default slideUp animation
      element.textContent = text
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }
  }, [children, delay, stagger, animation])

  return <div ref={textRef} className={className} />
}

export function GlitchText({ children, className = "" }: { children: string; className?: string }) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const element = textRef.current
    element.setAttribute("data-text", children)

    // Add glitch effect on hover
    const handleMouseEnter = () => {
      gsap.to(element, {
        duration: 0.1,
        skewX: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 3,
      })
    }

    element.addEventListener("mouseenter", handleMouseEnter)
    return () => element.removeEventListener("mouseenter", handleMouseEnter)
  }, [children])

  return (
    <div
      ref={textRef}
      className={`glitch-text ${className}`}
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      {children}
    </div>
  )
}

export function MagneticText({ children, className = "" }: { children: string; className?: string }) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const element = textRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(element, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      })
    }

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div ref={textRef} className={`magnetic-text ${className}`}>
      {children}
    </div>
  )
}
