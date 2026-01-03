"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
        <section id="work" className="w-full py-40 relative z-10">
            <div className="max-w-2xl mx-auto px-6">
                <div className="flex flex-col gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center justify-between py-4 border-b border-black/10 cursor-pointer group relative z-10"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                        >
                            <h3 className="text-lg md:text-xl font-light tracking-wide text-black/80 group-hover:text-black transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-sm md:text-base text-black/40 font-mono tracking-tight group-hover:text-black/60 transition-colors duration-300">
                                {project.category}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {hoveredIndex !== null && (
                    <motion.div
                        className="fixed pointer-events-none z-0 hidden md:block"
                        style={{
                            top: '50%',
                            left: '50%',
                            x: '-50%',
                            y: '-50%'
                        }}
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className="w-[300px] h-[200px] relative overflow-hidden rounded-sm shadow-2xl">
                            <Image
                                src={projects[hoveredIndex].image}
                                alt={projects[hoveredIndex].title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
