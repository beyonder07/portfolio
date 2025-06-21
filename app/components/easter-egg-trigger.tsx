"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"

export default function EasterEggTrigger() {
  const [konamiCode, setKonamiCode] = useState<string[]>([])
  const [showSpecialDino, setShowSpecialDino] = useState(false)

  // Konami code sequence
  const konamiSequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = [...konamiCode, e.code].slice(-10)
      setKonamiCode(newSequence)

      // Check if konami code is complete
      if (newSequence.join(",") === konamiSequence.join(",")) {
        triggerSpecialDino()
        setKonamiCode([]) // Reset
      }
    }

    const triggerSpecialDino = () => {
      setShowSpecialDino(true)

      // Create rainbow dinosaur
      const specialDino = document.createElement("div")
      specialDino.innerHTML = "🌈🦕"
      specialDino.className = "fixed bottom-20 text-6xl z-50 pointer-events-none"
      specialDino.style.left = "-100px"
      document.body.appendChild(specialDino)

      // Animate special dino
      gsap.to(specialDino, {
        x: window.innerWidth + 200,
        duration: 3,
        ease: "power2.out",
        onComplete: () => {
          document.body.removeChild(specialDino)
          setShowSpecialDino(false)
        },
      })

      // Add rainbow trail effect
      gsap.to(specialDino, {
        rotation: 360,
        duration: 3,
        ease: "none",
      })
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [konamiCode])

  return null // This component doesn't render anything visible
}
