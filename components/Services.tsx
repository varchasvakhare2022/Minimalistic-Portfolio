"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'

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
            <div className="flex-1 flex flex-col justify-center px-6 md:px-0 md:pl-12 md:items-end py-20 relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-12 w-full max-w-xl translate-x-6 md:translate-x-14 z-10"
                >
                    <h2 className="font-serif text-5xl md:text-7xl opacity-90">
                        Services
                    </h2>

                    <div className="space-y-8">
                        <div className="group cursor-pointer">
                            <h3 className="text-2xl font-light flex items-center gap-4 group-hover:text-white/80 transition-colors">
                                <span className="text-sm font-mono opacity-50">01</span>
                                Website Creation & Hosting
                            </h3>
                            <p className="pl-10 text-white/40 text-sm max-w-sm mt-2">
                                Creating and hosting websites tailored for small business owners.
                            </p>
                        </div>

                        <div className="group cursor-pointer">
                            <h3 className="text-2xl font-light flex items-center gap-4 group-hover:text-white/80 transition-colors">
                                <span className="text-sm font-mono opacity-50">02</span>
                                Project Collaboration
                            </h3>
                            <p className="pl-10 text-white/40 text-sm max-w-sm mt-2">
                                Available for collaboration in any project requiring modern web expertise.
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
                    className="w-[70.5%] h-full bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#a0a0a0_100%)] text-black rounded-[2.5rem] px-8 pt-8 pb-4 md:px-12 md:pt-12 md:pb-6 flex flex-col justify-center shadow-2xl relative group/card"
                >
                    <div className="absolute inset-0 flex items-start pt-2 md:pt-6 pointer-events-none">
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
                    <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between pb-0 relative z-10 box-border">

                        {/* Form Inputs */}
                        <div className="flex flex-col gap-6 md:gap-8 w-full max-w-2xl mx-auto flex-grow justify-center mt-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full bg-transparent border-b border-black/10 focus:border-black outline-none py-4 text-xl md:text-2xl font-serif placeholder:text-black/20 text-black transition-all duration-300"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full bg-transparent border-b border-black/10 focus:border-black outline-none py-4 text-xl md:text-2xl font-serif placeholder:text-black/20 text-black transition-all duration-300"
                            />
                            <textarea
                                name="message"
                                placeholder="Tell me about your project..."
                                required
                                className="w-full bg-transparent border-b border-black/10 focus:border-black outline-none py-4 text-xl md:text-2xl font-serif placeholder:text-black/20 text-black transition-all duration-300 resize-none h-24 md:h-32"
                            />
                        </div>

                        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 pb-2">
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
