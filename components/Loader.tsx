"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useMotionTemplate, animate } from 'framer-motion'

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true)
    const [phase, setPhase] = useState<'drop' | 'expand' | 'reveal'>('drop')

    // Mask control variables
    const maskRadius = useMotionValue(0)
    const maskImage = useMotionTemplate`radial-gradient(circle at center, transparent ${maskRadius}%, black ${maskRadius}%)`
    const webkitMaskImage = useMotionTemplate`radial-gradient(circle at center, transparent ${maskRadius}%, black ${maskRadius}%)`

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        window.scrollTo(0, 0)
        return () => { document.body.style.overflow = 'auto' }
    }, [])

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#a0a0a0_100%)] overflow-hidden"
                    transition={{ duration: 0.5 }}
                    style={{
                        maskImage: phase === 'reveal' ? maskImage : undefined,
                        WebkitMaskImage: phase === 'reveal' ? webkitMaskImage : undefined,
                    }}
                >
                    <motion.div
                        className="fixed inset-0 bg-black z-50 pointer-events-none"
                        style={{
                            display: phase === 'reveal' ? 'block' : 'none'
                        }}
                    />

                    {phase === 'drop' && (
                        <motion.div
                            className="relative z-50 mix-blend-normal"
                            initial={{ y: "-50vh", scale: 1 }}
                            animate={{
                                y: ["-50vh", "48vh", "25vh", "48vh"],
                                scaleX: [1, 1.4, 0.9, 1.2, 1],
                                scaleY: [1, 0.6, 1.1, 0.8, 1]
                            }}
                            transition={{
                                y: { duration: 1.5, times: [0, 0.4, 0.7, 1], ease: ["easeIn", "easeOut", "easeIn"] },
                                scaleX: { duration: 1.5, times: [0, 0.4, 0.7, 0.85, 1] },
                                scaleY: { duration: 1.5, times: [0, 0.4, 0.7, 0.85, 1] }
                            }}
                            onAnimationComplete={() => setPhase('expand')}
                        >
                            <div className="w-3 h-3 bg-black rounded-full relative z-10" />
                        </motion.div>
                    )}

                    {phase === 'expand' && (
                        <motion.div
                            className="relative z-50 bg-black rounded-full"
                            initial={{ scale: 1, y: "48vh" }}
                            animate={{ scale: 300 }}
                            transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
                            onAnimationComplete={() => {
                                setPhase('reveal')
                                // Start mask animation manually via animation controls or simple animate
                                animate(maskRadius, 150, {
                                    duration: 1.5,
                                    ease: [0.7, 0, 0.3, 1],
                                    onComplete: () => setIsLoading(false)
                                })
                            }}
                        >
                            <div className="w-3 h-3 bg-black rounded-full" />
                        </motion.div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    )
}
