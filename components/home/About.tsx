"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="px-6 md:px-20 py-24 bg-gradient-to-r from-[#F4C47C]/20 via-transparent to-[#E1A49A]/20">

            <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* IMAGE SIDE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >

                    {/* MAIN IMAGE */}
                    <img
                        src="/images/coconut2.jpg"
                        className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
                    />

                    {/* FLOATING CARD */}
                    <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-md border border-white/40">
                        <p className="text-sm text-[#2A1A17] font-medium">
                            Trusted Global Export Partner
                        </p>
                    </div>

                </motion.div>

                {/* CONTENT SIDE */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    {/* BADGE */}
                    <p className="text-xs tracking-[0.3em] text-[#A02D27] mb-4">
                        ABOUT US
                    </p>

                    {/* TITLE */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#2A1A17] leading-snug">
                        Connecting Farms to <br />
                        Global Markets
                    </h2>

                    {/* TEXT */}
                    <p className="mt-5 text-[#6C5547] text-sm md:text-base leading-relaxed max-w-md">
                        We specialize in exporting premium coconut-based products and natural
                        goods to international markets. With a strong sourcing network and
                        reliable logistics, we ensure consistent quality and smooth global delivery.
                    </p>

                    {/* FEATURES */}
                    <div className="mt-6 space-y-3 text-sm text-[#2A1A17]">
                        <div>✔ Direct farm sourcing</div>
                        <div>✔ International export standards</div>
                        <div>✔ Reliable logistics & delivery</div>
                    </div>

                    {/* STATS */}
                    <div className="grid grid-cols-3 gap-6 mt-10">

                        <div>
                            <h3 className="text-xl font-semibold text-[#A02D27]">50+</h3>
                            <p className="text-xs text-[#6C5547]">Clients</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#A02D27]">15+</h3>
                            <p className="text-xs text-[#6C5547]">Countries</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#A02D27]">100%</h3>
                            <p className="text-xs text-[#6C5547]">Quality</p>
                        </div>

                    </div>

                    {/* CTA */}
                    <button className="mt-8 bg-[#A02D27] text-white px-6 py-3 text-sm rounded-md hover:opacity-90 transition">
                        Learn More
                    </button>

                </motion.div>

            </div>
        </section>
    );
}