"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useTransform, useAnimation, PanInfo } from "framer-motion"
import { ArrowUpRight, Check } from "lucide-react"

interface SwipeButtonProps {
    onComplete: () => void
    isSubmitting?: boolean
    text?: string
}

export default function SwipeButton({ onComplete, isSubmitting = false, text = "Send Message" }: SwipeButtonProps) {
    const [isCompleted, setIsCompleted] = useState(false)
    const constraintsRef = useRef<HTMLDivElement>(null)
    const handleRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const controls = useAnimation()

    // Calculate progress for opacity/transform effects
    const opacity = useTransform(x, [0, 200], [1, 0])
    const textOpacity = useTransform(x, [0, 100], [1, 0])

    const handleDrag = (_: any, info: PanInfo) => {
        if (isCompleted || isSubmitting) return
    }

    const handleDragEnd = async (_: any, info: PanInfo) => {
        if (isCompleted || isSubmitting) return

        const containerWidth = containerRef.current?.offsetWidth || 0
        const handleWidth = handleRef.current?.offsetWidth || 0
        const threshold = (containerWidth - handleWidth) * 0.9

        if (x.get() > threshold) {
            setIsCompleted(true)
            controls.start({ x: containerWidth - handleWidth })
            onComplete()
        } else {
            controls.start({ x: 0 })
        }
    }

    useEffect(() => {
        if (!isSubmitting && !isCompleted) {
            controls.start({ x: 0 })
            setIsCompleted(false)
        }
    }, [isSubmitting, isCompleted, controls])

    return (
        <div
            ref={containerRef}
            className="relative h-14 w-full max-w-[260px] bg-black rounded-full overflow-hidden flex items-center p-1 cursor-grab active:cursor-grabbing shadow-lg border border-white/10"
        >
            {/* Background Text */}
            <motion.div
                style={{ opacity: textOpacity }}
                className="absolute inset-0 flex items-center justify-center pl-10 pointer-events-none"
            >
                <span className="font-mono text-white/90 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
                    {isSubmitting ? "Sending..." : text}
                </span>
            </motion.div>

            {/* Draggable Handle */}
            <motion.div
                ref={handleRef}
                drag="x"
                dragConstraints={containerRef}
                dragElastic={0.05}
                dragMomentum={false}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                animate={controls}
                style={{ x }}
                className="relative z-10 h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-md group border border-black/5"
            >
                {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                ) : isCompleted ? (
                    <Check size={20} className="text-black" />
                ) : (
                    <ArrowUpRight size={20} className="text-black transition-transform group-hover:scale-110" />
                )}
            </motion.div>
        </div>
    )
}
