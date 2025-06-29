"use client"
import { useTheme } from "next-themes"

export default function AppBackground() {
  const { theme } = useTheme()
  if (!theme) return null
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-blue-100 via-pink-50 to-yellow-100 opacity-80" />
  )
} 