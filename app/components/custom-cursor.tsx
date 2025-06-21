"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    if (!cursor || !follower) return

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      })
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      })
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement
      const rect = target.getBoundingClientRect()
      const isText = target.tagName === 'P' || target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3' || target.tagName === 'SPAN';
      
      gsap.to(cursor, {
        scale: isText ? 4 : 2,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      })
      
      gsap.to(follower, {
        scale: 2.5,
      })
      
      if(!isText){
         gsap.to(target, {
            x: (e.clientX - rect.left - rect.width / 2) * 0.2,
            y: (e.clientY - rect.top - rect.height / 2) * 0.2,
            duration: 0.3,
         })
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "white",
      })
      gsap.to(follower, {
        scale: 1,
      })
       gsap.to(target, {
            x: 0,
            y: 0,
            duration: 0.3,
         })
    }

    document.addEventListener("mousemove", moveCursor)

    const interactiveElements = document.querySelectorAll(
      "a, button, .interactive, h1, h2, h3, p, span"
    )
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      document.removeEventListener("mousemove", moveCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="custom-cursor fixed w-3 h-3 bg-white rounded-full pointer-events-none z-50"
        style={{ left: "-6px", top: "-6px" }}
      />

      {/* Cursor follower ring */}
      <div
        ref={followerRef}
        className="cursor-follower fixed w-8 h-8 border border-white/50 rounded-full pointer-events-none z-50"
        style={{ left: "-16px", top: "-16px" }}
      />
    </>
  )
}
