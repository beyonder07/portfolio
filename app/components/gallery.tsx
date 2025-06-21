"use client"

import { useState } from "react"
import { X, Play } from "lucide-react"
import Image from "next/image"

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<{ type: "image" | "video"; src: string; title: string } | null>(
    null,
  )

  // Replace these with your actual Drive assets
  const galleryItems = [
    {
      type: "image" as const,
      src: "/placeholder.svg?height=400&width=600",
      title: "Hackfinity 2024 Opening Ceremony",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      type: "video" as const,
      src: "/placeholder.svg?height=400&width=600", // Replace with actual video URL
      title: "Last Year's Highlights",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      type: "image" as const,
      src: "/placeholder.svg?height=400&width=600",
      title: "Teams in Action",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      type: "image" as const,
      src: "/placeholder.svg?height=400&width=600",
      title: "Mentorship Sessions",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      type: "image" as const,
      src: "/placeholder.svg?height=400&width=600",
      title: "Award Ceremony",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      type: "video" as const,
      src: "/placeholder.svg?height=400&width=600", // Replace with actual video URL
      title: "Winner Presentations",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      type: "image" as const,
      src: "/placeholder.svg?height=400&width=600",
      title: "Networking Events",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      type: "image" as const,
      src: "/placeholder.svg?height=400&width=600",
      title: "Tech Expo",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
  ]

  const openModal = (item: (typeof galleryItems)[0]) => {
    setSelectedMedia({
      type: item.type,
      src: item.src,
      title: item.title,
    })
  }

  const closeModal = () => {
    setSelectedMedia(null)
  }

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Gallery</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Take a look at the amazing moments from previous Hackfinity events. Get inspired by the creativity,
            collaboration, and innovation that defines our community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => openModal(item)}
            >
              <Image
                src={item.thumbnail || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                {item.type === "video" && (
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                )}
              </div>

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-sm">{item.title}</h3>
              </div>

              {/* Video indicator */}
              {item.type === "video" && (
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full p-2">
                  <Play className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="relative max-w-4xl w-full max-h-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {selectedMedia.type === "image" ? (
                <div className="relative aspect-video w-full">
                  <Image
                    src={selectedMedia.src || "/placeholder.svg"}
                    alt={selectedMedia.title}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="aspect-video w-full bg-black rounded-lg flex items-center justify-center">
                  {/* Replace with actual video player */}
                  <div className="text-white text-center">
                    <Play className="w-16 h-16 mx-auto mb-4" />
                    <p>Video Player Placeholder</p>
                    <p className="text-sm text-gray-400 mt-2">Replace with your Drive video</p>
                  </div>
                </div>
              )}

              <h3 className="text-white text-xl font-semibold mt-4 text-center">{selectedMedia.title}</h3>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
