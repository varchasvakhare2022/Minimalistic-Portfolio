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
                <Suspense fallback={<div className="w-full h-full bg-black/90" />}>
                    <Scene />
                </Suspense>
            </div>

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 text-center mix-blend-overlay pointer-events-none"
            >
                <h1 className="font-serif text-4xl md:text-6xl text-black mb-4 tracking-wider font-normal">
                    Varchasva Khare
                </h1>
                <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-black/80 font-sans">
                    A Full Stack Web Developer
                </p>
            </motion.div>
        </section>
    )
}
