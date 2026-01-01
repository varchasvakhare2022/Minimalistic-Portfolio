"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
    {
        title: "Cura",
        category: "Health & Wellness",
        image: "https://placehold.co/600x400/101010/FFF?text=Cura"
    },
    {
        title: "Luma",
        category: "Lighting Design",
        image: "https://placehold.co/600x400/202020/FFF?text=Luma"
    },
    {
        title: "Apex",
        category: "Financial Tech",
        image: "https://placehold.co/600x400/303030/FFF?text=Apex"
    },
    {
        title: "Mono",
        category: "Lifestyle",
        image: "https://placehold.co/600x400/404040/FFF?text=Mono"
    }
]

export default function WorkList() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <div className="w-full py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center justify-between py-12 border-b border-white/10 cursor-pointer group relative z-10"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-15%" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                    >
                        <h3 className="text-4xl md:text-6xl font-light tracking-tight group-hover:translate-x-4 transition-transform duration-300">
                            {project.title}
                        </h3>
                        <p className="text-sm md:text-base text-white/40 font-mono">
                            {project.category}
                        </p>
                    </motion.div>
                ))}
            </div>

            {hoveredIndex !== null && (
                <motion.div
                    className="fixed pointer-events-none z-0 hidden md:block"
                    style={{
                        top: '50%',
                        left: '50%',
                        x: '-50%',
                        y: '-50%'
                    }}
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                >
                    <div className="w-[400px] h-[300px] relative overflow-hidden rounded-lg">
                        {/* Using a key to force re-render/animation on change if needed, or just standard state update */}
                        <Image
                            src={projects[hoveredIndex].image}
                            alt={projects[hoveredIndex].title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            )}
        </div>
    )
}
