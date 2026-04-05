"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="px-6 md:px-20 py-20 bg-[#F5F5F5]">

            <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <img
                        src="/images/construction.jpg"
                        className="w-full h-[420px] object-cover rounded-md"
                    />

                    {/* FLOAT CARD */}
                    <div className="absolute bottom-6 left-6 bg-white px-5 py-3 shadow text-sm">
                        Trusted Material Supplier
                    </div>
                </motion.div>

                {/* CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    {/* BADGE */}
                    <p className="text-xs tracking-widest text-[#526FAE] mb-4">
                        ABOUT US
                    </p>

                    {/* TITLE */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#30303A] leading-snug">
                        Building Strong Foundations <br />
                        With Quality Materials
                    </h2>

                    {/* TEXT */}
                    <p className="mt-5 text-[#676061] text-sm md:text-base leading-relaxed max-w-md">
                        Global Traders specializes in supplying high-quality construction
                        materials including M-Sand, tiles, gravel stones, marbles, and
                        hollow bricks. We support builders, contractors, and developers
                        with reliable materials and timely delivery.
                    </p>

                    {/* FEATURES */}
                    <div className="mt-6 space-y-3 text-sm text-[#30303A]">
                        <div>✔ High-quality materials</div>
                        <div>✔ Reliable supply chain</div>
                        <div>✔ On-time delivery</div>
                    </div>

                    {/* STATS */}
                    <div className="grid grid-cols-3 gap-6 mt-10">

                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-[#526FAE]">200+</h3>
                            <p className="text-xs text-[#676061]">Projects</p>
                        </div>

                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-[#526FAE]">5+</h3>
                            <p className="text-xs text-[#676061]">Years</p>
                        </div>

                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-[#526FAE]">100%</h3>
                            <p className="text-xs text-[#676061]">Quality</p>
                        </div>

                    </div>

                    {/* CTA */}
                    <button className="mt-8 bg-[#526FAE] text-white px-6 py-3 text-sm hover:opacity-90 transition">
                        Learn More
                    </button>

                </motion.div>
            </div>
        </section>
    );
}