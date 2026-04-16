"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Ahmed Khan",
        role: "Importer – UAE",
        text: "Consistent quality and reliable shipments. A trusted partner for our coconut imports.",
    },
    {
        name: "Sophia Müller",
        role: "Distributor – Germany",
        text: "Excellent product standards and professional export handling. Highly recommended.",
    },
    {
        name: "John Williams",
        role: "Buyer – USA",
        text: "Premium quality products with smooth logistics and timely delivery every time.",
    },
    {
        name: "David Lee",
        role: "Wholesale Buyer – Singapore",
        text: "Great pricing, consistent supply, and strong communication throughout the process.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-2 bg-gradient-to-r from-[#F4C47C]/20 via-transparent to-[#E1A49A]/20 overflow-hidden">

            {/* HEADER */}
            <div className="px-6 md:px-20 mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#2A1A17]">
                    Trusted by Global Clients
                </h2>
                <p className="text-sm text-[#6C5547] mt-3">
                    What our international partners say about us
                </p>
            </div>

            {/* SCROLL */}
            <div className="relative">

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-8 w-max"
                >

                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="min-w-[320px] bg-white/80 backdrop-blur-xl border border-white/40 rounded-xl p-6 shadow-sm hover:shadow-lg transition"
                        >

                            {/* QUOTE */}
                            <p className="text-sm text-[#2A1A17] leading-relaxed">
                                “{t.text}”
                            </p>

                            {/* USER */}
                            <div className="mt-6">
                                <h4 className="text-sm font-medium text-[#2A1A17]">
                                    {t.name}
                                </h4>
                                <p className="text-xs text-[#6C5547]">
                                    {t.role}
                                </p>
                            </div>

                        </div>
                    ))}

                </motion.div>

            </div>
        </section>
    );
}