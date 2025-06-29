"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import Image from "next/image"

export default function Loader() {
  useEffect(() => {
    const tl = gsap.timeline()

    // Animate logo and ring
    tl.fromTo(
      ".loader-logo",
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" },
    )
      .fromTo(
        ".loader-ring",
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(".loader-ring", {
              scale: 1.2,
              opacity: 0,
              duration: 1.5,
              repeat: -1,
              ease: "power2.out",
            })
          },
        },
        "-=0.8",
      )
      .fromTo(".progress-line", { width: "0%" }, { width: "100%", duration: 2, ease: "power2.inOut" }, "-=1")
  }, [])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="loader-logo w-full h-full rounded-full overflow-hidden border-2 border-gray-700">
            <Image
              src="/dp1.jpg"
              alt="Rajul Mishra"
              width={96}
              height={96}
              className="object-cover w-full h-full"
              style={{ objectPosition: "center 15%" }}
              priority
            />
          </div>
          <div className="loader-ring absolute inset-0 rounded-full border-2 border-purple-500"></div>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <div className="progress-line h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
