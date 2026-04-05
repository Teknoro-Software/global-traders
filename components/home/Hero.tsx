"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter();
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

    return (
        <section ref={ref} className="relative h-screen overflow-hidden">

            {/* PARALLAX BG */}
            <motion.img
                style={{ y }}
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
                className="absolute inset-0 w-full h-[120%] object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

                {/* BRAND */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs tracking-[0.3em] text-[#526FAE] mb-4"
                >
                    GLOBAL TRADERS
                </motion.p>

                {/* TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight max-w-4xl"
                >
                    Strong Foundations <br />
                    Start With Quality Materials
                </motion.h1>

                {/* TEXT */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 text-gray-300 max-w-xl text-sm md:text-base"
                >
                    Supplying M-Sand, tiles, gravel stones, marbles, and hollow bricks
                    for construction projects with reliability and consistency.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4"
                >
                    <button
                        onClick={() => router.push("/shop")}
                        className="bg-[#526FAE] px-8 py-3 text-white text-sm hover:scale-[1.03] active:scale-[0.97] transition"
                    >
                        View Materials
                    </button>

                    <button
                        onClick={() => router.push("/contact")}
                        className="border border-white px-8 py-3 text-white text-sm hover:bg-white hover:text-black transition"
                    >
                        Contact Us
                    </button>
                </motion.div>

            </div>

            {/* STATS BAR */}
            <div className="absolute bottom-0 left-0 w-full bg-white/10 backdrop-blur-md border-t border-white/10">

                <div className="grid grid-cols-3 text-center py-6 text-white">

                    <div>
                        <p className="text-2xl font-semibold">500+</p>
                        <p className="text-xs text-gray-300 mt-1">Projects Supplied</p>
                    </div>

                    <div>
                        <p className="text-2xl font-semibold">10+</p>
                        <p className="text-xs text-gray-300 mt-1">Years Experience</p>
                    </div>

                    <div>
                        <p className="text-2xl font-semibold">100%</p>
                        <p className="text-xs text-gray-300 mt-1">Quality Materials</p>
                    </div>

                </div>

            </div>

        </section>
    );
}