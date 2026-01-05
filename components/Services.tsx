"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'

import ServiceGeometry from './ServiceGeometry'
import SliderButton from './SliderButton'

export default function Services() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setFormStatus('submitting')

        const form = e.currentTarget
        const formData = new FormData(form)

        // Append Web3Forms Access Key (User needs to replace this)
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE")

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            })
            const data = await response.json()
            if (data.success) {
                setFormStatus('success')
                form.reset()
            } else {
                setFormStatus('error')
            }
        } catch (error) {
            setFormStatus('error')
        }
    }

    return (
        <section className="min-h-screen w-full bg-black text-white flex flex-col md:flex-row relative z-20">
            {/* Left: Services List */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 relative overflow-hidden">
                <ServiceGeometry />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <h2 className="font-serif text-5xl md:text-7xl opacity-90">
                        Services
                    </h2>

                    <div className="space-y-8">
                        <div className="group cursor-pointer">
                            <h3 className="text-2xl font-light flex items-center gap-4 group-hover:text-white/80 transition-colors">
                                <span className="text-sm font-mono opacity-50">01</span>
                                Web Development
                            </h3>
                            <p className="pl-10 text-white/40 text-sm max-w-sm mt-2">
                                Custom tailored websites built with modern technologies like React, Next.js, and Three.js.
                            </p>
                        </div>

                        <div className="group cursor-pointer">
                            <h3 className="text-2xl font-light flex items-center gap-4 group-hover:text-white/80 transition-colors">
                                <span className="text-sm font-mono opacity-50">02</span>
                                Small Business Solutions
                            </h3>
                            <p className="pl-10 text-white/40 text-sm max-w-sm mt-2">
                                Scalable digital presence for growing businesses, from landing pages to e-commerce.
                            </p>
                        </div>

                        <div className="group cursor-pointer">
                            <h3 className="text-2xl font-light flex items-center gap-4 group-hover:text-white/80 transition-colors">
                                <span className="text-sm font-mono opacity-50">03</span>
                                Technical Consultation
                            </h3>
                            <p className="pl-10 text-white/40 text-sm max-w-sm mt-2">
                                Architecture planning, performance optimization, and SEO strategy.
                            </p>
                        </div>
                    </div>

                    <div className="pt-8">
                        <a
                            href="mailto:vk.varchasva@gmail.com"
                            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors border-b border-white/20 pb-1"
                        >
                            <Mail size={16} />
                            vk.varchasva@gmail.com
                            <ArrowUpRight size={14} className="opacity-50" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Right: Contact Form - Floating Card */}
            <div className="flex-1 p-4 md:p-8 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full h-full bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#a0a0a0_100%)] text-black rounded-[2.5rem] px-8 pt-8 pb-4 md:px-12 md:pt-12 md:pb-6 flex flex-col justify-center shadow-2xl relative overflow-hidden group/card"
                >
                    <div className="absolute inset-0 flex items-start pt-2 md:pt-6 overflow-hidden pointer-events-none">
                        <motion.div
                            initial={{ x: "-20%", opacity: 0 }}
                            whileInView={{ x: "-5%", opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="font-sans text-[2rem] md:text-[4rem] lg:text-[5rem] leading-[0.9] text-black tracking-tighter font-bold"
                            style={{ marginLeft: "-0.2ch" }}
                        >
                            Contact
                        </motion.div>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col h-full justify-end pb-0 relative z-10">
                        {/* 
                        <div className="font-serif text-3xl md:text-5xl leading-tight text-black/80 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[300px]">
                            Let's work together.
                        </div> 
                        */}

                        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
                            <p className="text-sm font-sans text-black/40 order-2 md:order-1">
                                *I'll get back to you within 24h.
                            </p>
                            <div className="order-1 md:order-2 w-full max-w-[300px]">
                                <SliderButton
                                    onSlideComplete={() => {
                                        const form = document.querySelector('form') as HTMLFormElement
                                        if (form) form.requestSubmit()
                                    }}
                                    isSubmitting={formStatus === 'submitting'}
                                    initialText="SLIDE TO SEND"
                                />
                            </div>
                        </div>

                        {formStatus === 'success' && (
                            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-600 font-sans text-sm mt-4 absolute bottom-8 left-0 right-0 text-center">
                                Message sent successfully.
                            </motion.p>
                        )}
                        {formStatus === 'error' && (
                            <p className="text-red-500 font-sans text-sm mt-4 absolute bottom-8 left-0 right-0 text-center">
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
