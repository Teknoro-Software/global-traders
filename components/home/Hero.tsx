"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter();

    return (
        <section className="relative bg-[#F4C47C]/20 px-6 md:px-20 py-2 md:py-32 overflow-hidden">

            {/* 🌿 BACKGROUND GLOW */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#A02D27]/10 rounded-full blur-3xl"></div>

            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                >

                    {/* BRAND */}
                    <p className="text-xs tracking-[0.3em] text-[#A02D27] mb-4">
                        GLOBAL TRADERS
                    </p>

                    {/* TITLE */}
                    <h1 className="text-4xl md:text-6xl font-semibold text-[#2A1A17] leading-tight">
                        Coconut Export <br />
                        From India to the World
                    </h1>

                    {/* TEXT */}
                    <p className="mt-6 text-[#6C5547] max-w-md text-sm md:text-base leading-relaxed">
                        Supplying premium quality coconuts and coconut-based products
                        to international markets with reliable sourcing and export standards.
                    </p>

                    {/* CTA */}
                    <div className="mt-10 flex gap-4">

                        <button
                            onClick={() => router.push("/shop")}
                            className="bg-[#A02D27] text-white px-6 py-3 text-sm rounded-md hover:scale-[1.03] transition"
                        >
                            View Products
                        </button>

                        <button
                            onClick={() => router.push("/contact")}
                            className="border border-[#A02D27] text-[#A02D27] px-6 py-3 text-sm rounded-md hover:bg-[#A02D27] hover:text-white transition"
                        >
                            Request Quote
                        </button>

                    </div>

                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative"
                >

                    {/* MAIN IMAGE */}
                    <img
                        src="/images/coco.jpg"
                        className="w-full h-[450px] object-cover rounded-xl shadow-lg"
                    />

                    {/* FLOAT CARD */}
                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-md shadow">

                        <p className="text-xs text-[#6C5547]">
                            EXPORT MARKETS
                        </p>

                        <p className="text-sm text-[#2A1A17] mt-1">
                            UAE • EUROPE • USA
                        </p>

                    </div>

                </motion.div>

            </div>

            {/* 🔽 BOTTOM STATS */}
            <div className="mt-20 grid grid-cols-3 text-center max-w-3xl mx-auto">

                <div>
                    <h3 className="text-xl font-semibold text-[#A02D27]">100+</h3>
                    <p className="text-xs text-[#6C5547] mt-1">Clients</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-[#A02D27]">15+</h3>
                    <p className="text-xs text-[#6C5547] mt-1">Countries</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-[#A02D27]">100%</h3>
                    <p className="text-xs text-[#6C5547] mt-1">Quality</p>
                </div>

            </div>

        </section>
    );
}