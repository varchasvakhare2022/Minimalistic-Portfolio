"use client"

import React, { useState } from "react"
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion"
import { ArrowRight, Check, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface SliderButtonProps {
    onSlideComplete: () => Promise<void> | void
    initialText?: string
    completeText?: string
    isSubmitting?: boolean
}

export default function SliderButton({
    onSlideComplete,
    initialText = "SLIDE TO SEND",
    completeText = "SENT",
    isSubmitting = false
}: SliderButtonProps) {
    const [isComplete, setIsComplete] = useState(false)
    const constraintsRef = React.useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const controls = useAnimation()

    // Transform opacity of text based on drag position
    const textOpacity = useTransform(x, [0, 150], [1, 0])

    // Background fill opacity or width could be added here for extra polish

    const handleDragEnd = async (_: any, info: any) => {
        if (isComplete || isSubmitting) return

        const width = constraintsRef.current?.offsetWidth || 0
        const handleWidth = 40 // h-10 w-10
        const threshold = (width - handleWidth) * 0.8 // 80% threshold

        if (x.get() > threshold) {
            // Snap to end
            controls.start({ x: width - handleWidth - 6 }) // 6px padding adjustment
            setIsComplete(true)
            await onSlideComplete()
        } else {
            // Snap back
            controls.start({ x: 0 })
        }
    }

    React.useEffect(() => {
        if (!isSubmitting && !isComplete) {
            controls.start({ x: 0 })
            x.set(0)
        }
    }, [isSubmitting, isComplete, controls, x])

    return (
        <div
            className={cn(
                "relative flex items-center justify-start p-1 bg-black rounded-full h-12 w-full overflow-hidden transition-colors border border-black/5 shadow-2xl",
                isComplete ? "cursor-default" : "cursor-grab active:cursor-grabbing"
            )}
            ref={constraintsRef}
        >
            {/* Shimmer/Gradient Background Effect (Optional) */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-20" />

            {/* Label Text */}
            <motion.div
                style={{ opacity: textOpacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <span className="text-white/40 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase animate-pulse">
                    {initialText}
                </span>
            </motion.div>

            {/* Completion Text */}
            {isComplete && !isSubmitting && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                >
                    <span className="text-white font-mono text-[10px] md:text-xs tracking-[0.2em] font-bold">
                        {completeText}
                    </span>
                </motion.div>
            )}

            {/* Slider Handle */}
            <motion.div
                drag={isComplete || isSubmitting ? false : "x"}
                dragConstraints={constraintsRef}
                dragElastic={0.05}
                dragMomentum={false}
                onDragEnd={handleDragEnd}
                animate={controls}
                style={{ x }}
                whileTap={{ scale: 0.95 }}
                className="relative z-20 h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
                {isSubmitting ? (
                    <Loader2 className="w-6 h-6 text-black animate-spin" />
                ) : isComplete ? (
                    <Check className="w-6 h-6 text-black" />
                ) : (
                    <ArrowRight className="w-6 h-6 text-black" />
                )}
            </motion.div>
        </div>
    )
}
