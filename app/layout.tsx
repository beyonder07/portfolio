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
  const title = "Rajul Mishra | Full Stack Developer & AI Engineer"
  const description = "Portfolio of Rajul Mishra — Full Stack Developer and AI Engineer building scalable SaaS applications, AI-powered systems, and modern web experiences using Next.js, TypeScript, Python, PostgreSQL, and Generative AI."
  const keywords = "Full Stack Developer, AI Engineer, Next.js Developer, MERN Stack, PostgreSQL, Generative AI, SaaS Developer, React Developer, Python Developer"

  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Rajul Mishra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rajul-mishra.vercel.app/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rajul-mishra.vercel.app/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </head>
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
  title: "Rajul Mishra | Full Stack Developer & AI Engineer",
  description: "Portfolio of Rajul Mishra — Full Stack Developer and AI Engineer building scalable SaaS applications, AI-powered systems, and modern web experiences using Next.js, TypeScript, Python, PostgreSQL, and Generative AI.",
  keywords: ["Full Stack Developer", "AI Engineer", "Next.js Developer", "MERN Stack", "PostgreSQL", "Generative AI", "SaaS Developer", "React Developer", "Python Developer"],
  author: "Rajul Mishra",
  generator: 'Next.js'
};
