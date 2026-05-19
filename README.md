# 🌌 Rajul Mishra | Interactive Developer Portfolio

Welcome to my personal portfolio repository! This is a modern, interactive, and visually stunning web application designed to showcase my experience, skills, projects, and achievements.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-Animation-green?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

---

## ✨ Key Features

- **🌀 Custom Interactivity**: Immersive custom cursor with responsive hover scaling.
- **🦖 Running Dinosaur Easter Egg**: An offline-style Chrome dinosaur game integrated as a hidden easter egg!
- **🎭 Smooth Animations**: Built using **GSAP (GreenSock Animation Platform)** with `ScrollTrigger` for sophisticated scroll-driven animations.
- **📊 Dynamic Skill Bars**: Interactive proficiency visualization.
- **📧 Contact Form Integration**: Powered by **Resend** for sending emails securely and directly.
- **📱 Fully Responsive**: Tailored fluid design using CSS Grid, Flexbox, and Tailwind breakpoints.

---

## 🛠️ Tech Stack & Libraries

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Radix UI Primitives](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [GSAP](https://greensock.com/gsap/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) for validation
- **Backend/API integration**: Next.js Server Actions / API Routes + [Resend](https://resend.com/)

---

## 📂 Project Structure

```
├── app/
│   ├── api/             # API routes (e.g. for Resend integration)
│   ├── components/      # Reusable UI components
│   │   ├── about.tsx          # About Me section
│   │   ├── contact.tsx        # Contact form with validation
│   │   ├── custom-cursor.tsx  # Dynamic circular cursor
│   │   ├── education.tsx      # Academic timeline
│   │   ├── experience.tsx     # Professional experience timeline
│   │   ├── projects.tsx       # Portfolio projects card grid
│   │   ├── resume.tsx         # Resume download link
│   │   ├── running-dinosaur.tsx # Chrome-style dinosaur game
│   │   └── ...
│   ├── contexts/        # React context providers
│   ├── globals.css      # Core styles, Tailwind directives, custom keyframes
│   ├── layout.tsx       # Root layout configuration
│   └── page.tsx         # Main entry point importing sections
├── public/              # Static assets (images, logos, PDF resume)
│   └── RAJULMISHRA-RESUME.pdf # Downloadable resume PDF
├── tailwind.config.ts   # Custom theme setup
└── package.json         # Dependency configuration
```

---

## 🚀 Getting Started

Follow these steps to run the portfolio locally on your machine.

### 📋 Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or later is recommended).

### ⚙️ Environment Setup

Create a `.env.local` file in the root directory (do not commit this file to GitHub, as it is automatically ignored via `.gitignore` to prevent secret key exposure). Add your **Resend** credentials:

```bash
# .env.local
RESEND_API_KEY=your_resend_api_key_here
```

### 📦 Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/beyonder07/portfolio.git
cd portfolio
npm install
```

### 💻 Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 🏗️ Production Build

To build the application for production:

```bash
npm run build
npm start
```

---

## 🔒 Security

This project enforces strict security practices:
- **Zero Exposed Keys**: All secret credentials like API keys are kept in local `.env` files.
- **Git Ignore Safeguard**: The `.gitignore` file includes rules to prevent any `.env*` files from being staged or committed.

---

## 👤 Author

**Rajul Mishra**
- **Education**: B.Tech CSE (9.2 CGPA) at SRM Institute of Science and Technology
- **GitHub**: [@beyonder07](https://github.com/beyonder07)
- **Projects Highlighted**:
  - [WizPro](https://github.com/beyonder07/WizPro) – AI-Powered Code Review System
  - [XenoCRM](https://github.com/beyonder07/XenoCrm) – Customer Relationship Management System
  - [Intbot Symposium](https://srmintbot.in) – SRM Symposium Event Website
