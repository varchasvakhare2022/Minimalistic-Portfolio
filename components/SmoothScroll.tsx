"use client"

import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 2,
        })

        // One Page Scroll Logic
        let isScrolling = false

        function handleWheel(e: WheelEvent) {
            e.preventDefault() // Stop default scrolling

            if (isScrolling) return

            const direction = Math.sign(e.deltaY)
            const viewportHeight = window.innerHeight
            const currentScroll = lenis.scroll

            // Calculate nearest section index
            const currentIndex = Math.round(currentScroll / viewportHeight)
            let nextIndex = currentIndex + direction

            // Clamping
            const maxScroll = document.documentElement.scrollHeight - viewportHeight
            const maxIndex = Math.round(maxScroll / viewportHeight)

            if (nextIndex < 0) nextIndex = 0
            if (nextIndex > maxIndex) nextIndex = maxIndex

            if (nextIndex !== currentIndex) {
                isScrolling = true
                lenis.scrollTo(nextIndex * viewportHeight, {
                    duration: 1.5,
                    force: true,
                    lock: true,
                    onComplete: () => {
                        isScrolling = false
                    }
                })
            }
        }

        // Add wheel listener with { passive: false } to allow preventDefault
        window.addEventListener('wheel', handleWheel, { passive: false })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            window.removeEventListener('wheel', handleWheel)
            lenis.destroy()
        }
    }, [])

    return (
        <div className="lenis-container">
            {children}
        </div>
    )
}
