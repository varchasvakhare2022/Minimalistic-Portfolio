"use client"

import dynamic from 'next/dynamic'
import { Suspense, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Scene = dynamic(() => import('@/components/Scene'), { ssr: false })

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section ref={containerRef} className="h-screen w-full relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Suspense fallback={<div className="w-full h-full bg-black" />}>
                    <Scene />
                </Suspense>
            </div>

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 text-center mix-blend-difference"
            >
                <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white mb-4">
                    Audience of One
                </h1>
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                    Digital Experiences
                </p>
            </motion.div>
        </section>
    )
}
