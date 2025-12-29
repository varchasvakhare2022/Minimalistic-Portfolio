import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
    return (
        <Layout>
            <section className="min-h-[70vh] flex flex-col justify-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.1] mb-8">
                        Digital craftsmanship <br />
                        <span className="text-muted">guided by precision.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                        I craft refined digital experiences with a focus on typography, motion, and clarity.
                    </p>
                </motion.div>
            </section>

            <section id="work" className="py-32">
                <div className="mb-16 flex items-baseline justify-between">
                    <h2 className="text-sm font-medium tracking-widest uppercase text-muted">Selected Work</h2>
                    <span className="hidden md:block h-px flex-grow bg-muted/20 ml-6"></span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {[1, 2, 3, 4].map((item) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[4/3] bg-gray-100 mb-6 overflow-hidden">
                                <div className="w-full h-full bg-neutral-200 group-hover:scale-105 transition-transform duration-700 ease-out" />
                            </div>
                            <h3 className="text-xl font-medium mb-1 group-hover:underline decoration-1 underline-offset-4">Project {item}</h3>
                            <p className="text-muted">Design & Development</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default Home;
