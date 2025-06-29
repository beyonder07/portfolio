import type React from "react"
import "./globals.css"
import { Inter, Cinzel } from "next/font/google"

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// Load Cinzel font
const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <head>
        <title>Rajul Mishra - Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer with strong JavaScript, Python, and Java skills. Experienced in building web applications using the MERN stack." />
        <meta name="keywords" content="Full Stack Developer, React, Node.js, Python, Java, MERN Stack, Web Development" />
        <meta name="author" content="Rajul Mishra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rajul-mishra.vercel.app/" />
        <meta property="og:title" content="Rajul Mishra - Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer with strong JavaScript, Python, and Java skills. Experienced in building web applications using the MERN stack." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rajul-mishra.vercel.app/" />
        <meta property="twitter:title" content="Rajul Mishra - Full Stack Developer" />
        <meta property="twitter:description" content="Full Stack Developer with strong JavaScript, Python, and Java skills. Experienced in building web applications using the MERN stack." />
      </head>
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
  title: "Rajul Mishra - Full Stack Developer",
  description: "Full Stack Developer with strong JavaScript, Python, and Java skills. Experienced in building web applications using the MERN stack.",
  keywords: ["Full Stack Developer", "React", "Node.js", "Python", "Java", "MERN Stack", "Web Development"],
  author: "Rajul Mishra",
  generator: 'Next.js'
};
