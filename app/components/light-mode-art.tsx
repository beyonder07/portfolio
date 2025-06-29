import React from "react"

export default function LightModeArt() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Animated pastel blobs */}
      <div className="absolute top-[-10%] left-[10%] w-72 h-72 bg-pink-200 opacity-60 rounded-full filter blur-2xl animate-blob1" />
      <div className="absolute top-[30%] left-[60%] w-96 h-96 bg-blue-200 opacity-50 rounded-full filter blur-2xl animate-blob2" />
      <div className="absolute bottom-[-10%] left-[40%] w-80 h-80 bg-yellow-200 opacity-40 rounded-full filter blur-2xl animate-blob3" />
      <div className="absolute bottom-[10%] right-[10%] w-72 h-72 bg-green-200 opacity-50 rounded-full filter blur-2xl animate-blob4" />
      <div className="absolute top-[50%] right-[5%] w-60 h-60 bg-purple-200 opacity-40 rounded-full filter blur-2xl animate-blob5" />
    </div>
  )
} 