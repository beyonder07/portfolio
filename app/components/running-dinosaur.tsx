"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function RunningDinosaur() {
  const dinoRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (!dinoRef.current || !containerRef.current) return

    // Create audio element for jump sound
    audioRef.current = new Audio("/audio/boop.mp3")
    audioRef.current.volume = 0.2

    const dino = dinoRef.current
    const container = containerRef.current

    // Running animation
    const runAnimation = () => {
      return gsap.fromTo(
        dino,
        { x: -100 },
        {
          x: window.innerWidth + 100,
          duration: Math.random() * 5 + 8, // Randomize duration
          ease: "none",
          delay: Math.random() * 10 + 5, // Randomize start time
          repeat: -1,
          repeatDelay: Math.random() * 15 + 10, // Randomize time between runs
        },
      )
    }

    // Bobbing animation while running
    const bobbingAnimation = () => {
      return gsap.to(dino, {
        y: -5,
        duration: 0.3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      })
    }
    
    // Jump animation
    const jumpAnimation = () => {
      if (audioRef.current) {
        audioRef.current.play()
      }
      gsap.to(dino, {
        y: -100,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(dino, {
            y: 0,
            duration: 0.4,
            ease: "power2.in",
          })
        },
      })
    }

    // Start animations
    const runTl = runAnimation()
    const bobTl = bobbingAnimation()

    // Add click event for jump
    dino.addEventListener("click", jumpAnimation)

    return () => {
      runTl.kill()
      bobTl.kill()
      dino.removeEventListener("click", jumpAnimation)
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed bottom-20 left-0 w-full h-16 pointer-events-none z-30 overflow-hidden">
      <div
        ref={dinoRef}
        className="absolute bottom-0 text-4xl cursor-pointer pointer-events-auto"
        title="🦕"
        style={{ transform: "scaleX(-1)" }}
      >
        🦕
      </div>

      {/* Ground line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-30"></div>
    </div>
  )
}
