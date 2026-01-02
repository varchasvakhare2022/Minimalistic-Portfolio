"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true)
    const [phase, setPhase] = useState<'drop' | 'expand' | 'fade'>('drop')

    useEffect(() => {
        // Lock body scroll during loading
        document.body.style.overflow = 'hidden'

        // Scroll to top
        window.scrollTo(0, 0)

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#a0a0a0_100%)] overflow-hidden"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    onAnimationComplete={() => {
                        document.body.style.overflow = 'auto'
                    }}
                >
                    <motion.div
                        className="relative z-50 mix-blend-normal"
                        initial={{ y: "-50vh", scale: 1 }}
                        animate={
                            phase === 'drop'
                                ? {
                                    y: ["-50vh", "48vh", "25vh", "48vh"],
                                    scaleX: [1, 1.4, 0.9, 1.2, 1],
                                    scaleY: [1, 0.6, 1.1, 0.8, 1]
                                }
                                : { scale: [1, 300] }
                        }
                        transition={
                            phase === 'drop'
                                ? {
                                    y: {
                                        duration: 1.2,
                                        times: [0, 0.4, 0.7, 1],
                                        ease: ["easeIn", "easeOut", "easeIn"]
                                    },
                                    scaleX: {
                                        duration: 1.2,
                                        times: [0, 0.4, 0.7, 0.85, 1]
                                    },
                                    scaleY: {
                                        duration: 1.2,
                                        times: [0, 0.4, 0.7, 0.85, 1]
                                    }
                                }
                                : { duration: 0.8, ease: [0.65, 0, 0.35, 1] }
                        }
                        onAnimationComplete={() => {
                            if (phase === 'drop') {
                                setPhase('expand')
                            } else if (phase === 'expand') {
                                setTimeout(() => setIsLoading(false), 100)
                            }
                        }}
                    >
                        {/* Core Ball - Pure Black */}
                        <div className="w-3 h-3 bg-black rounded-full relative z-10" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
