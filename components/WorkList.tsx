"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ArrowLeft, Github } from 'lucide-react'

const projects = [
    {
        id: "01",
        title: "Platera",
        role: "Food & Community",
        year: "2024",
        description: "A modern platform for discovering, creating, and sharing recipes - designed around community and experience.",
        image: "/platera_cover.png",
        github: "https://github.com",
        website: "https://platera-app.vercel.app/"
    },
    {
        id: "02",
        title: "Vortex",
        role: "Voice AI System",
        year: "2023",
        description: "A voice-driven system assistant that executes commands through real-time AI interaction.",
        image: "/Vortex_cover.png",
        github: "https://github.com",
        website: "#"
    },
    {
        id: "03",
        title: "VeriscanX",
        role: "Machine Learning",
        year: "2025",
        description: "An AI-powered system for detecting fake and automated social media news.",
        image: "/Veriscanx_cover.png",
        github: "https://github.com",
        website: "#"
    },
    {
        id: "04",
        title: "CircleChat",
        role: "REAL-TIME COMMUNICATION",
        year: "2024",
        description: "A real-time group messaging platform designed around shared conversations.",
        image: "/Circlechat_cover.png",
        github: "https://github.com",
        website: "#"
    }
]

export default function WorkGallery() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const nextProject = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % projects.length)
    }

    const prevProject = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    }

    const currentProject = projects[currentIndex]

    return (
        <section className="w-full h-full flex flex-col md:flex-row relative z-10">
            {/* Left Content */}
            <div className="flex-1 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
                <div className="space-y-8">
                    {/* Header Details */}
                    <motion.div
                        key={`meta-${currentIndex}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex items-center gap-4 text-xs md:text-sm font-mono tracking-widest text-black/50 uppercase"
                    >
                        <span>{currentProject.id}</span>
                        <span className="w-8 h-[1px] bg-black/20" />
                        <span>{currentProject.year}</span>
                    </motion.div>

                    {/* Main Title */}
                    <div className="overflow-hidden">
                        <motion.h2
                            key={`title-${currentIndex}`}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className={`font-serif text-black leading-[0.9] tracking-tight ${currentProject.title.length > 8
                                ? "text-5xl md:text-7xl lg:text-8xl"
                                : "text-6xl md:text-8xl lg:text-9xl"
                                }`}
                        >
                            {currentProject.title}
                        </motion.h2>
                    </div>

                    {/* Description */}
                    <motion.p
                        key={`desc-${currentIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-sm md:text-base text-black/70 max-w-md leading-relaxed font-light"
                    >
                        {currentProject.description}
                    </motion.p>

                    {/* Role Badge */}
                    <motion.div
                        key={`role-${currentIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <span className="inline-block px-3 py-1 border border-black/10 rounded-full text-xs uppercase tracking-wide text-black/60 bg-white/50 backdrop-blur-sm">
                            {currentProject.role}
                        </span>
                    </motion.div>

                    {/* Navigation */}
                    <div className="flex items-center gap-4 pt-8">
                        <button
                            onClick={prevProject}
                            className="p-3 border border-black/10 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                        >
                            <ArrowLeft size={18} />
                        </button>
                        <button
                            onClick={nextProject}
                            className="p-3 border border-black/10 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                        >
                            <ArrowRight size={18} />
                        </button>

                        <div className="w-[1px] h-8 bg-black/10 mx-2" /> {/* Divider */}

                        <a
                            href={currentProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 border border-black/10 rounded-full hover:bg-black hover:text-white transition-colors duration-300 group"
                            aria-label="View on GitHub"
                        >
                            <Github size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 h-full relative overflow-hidden hidden md:block group">
                <AnimatePresence mode="popLayout" custom={direction}>
                    <motion.a
                        key={currentProject.id}
                        href={currentProject.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        custom={direction}
                        initial={{ x: direction > 0 ? "100%" : "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: direction > 0 ? "-20%" : "20%", opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 w-full h-full block cursor-pointer"
                    >
                        <Image
                            src={currentProject.image}
                            alt={currentProject.title}
                            fill
                            className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-in-out"
                        />
                        {/* Overlay Gradient for integration */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/5 pointer-events-none" />

                        {/* Title Overlay on Image - Sans Serif White (Only for Cura/Custom Images) */}
                        {/* Removed per user request */}
                    </motion.a>
                </AnimatePresence>
            </div>
        </section>
    )
}
