"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Rahul Menon",
        role: "Contractor",
        text: "Reliable supply and consistent quality materials. Perfect partner for our construction projects.",
    },
    {
        name: "Arjun Nair",
        role: "Builder",
        text: "Timely delivery and excellent service. We trust Global Traders for all our material needs.",
    },
    {
        name: "Vivek Sharma",
        role: "Site Engineer",
        text: "Strong quality materials and smooth logistics. Highly recommended for large-scale projects.",
    },
    {
        name: "Sanjay Kumar",
        role: "Developer",
        text: "Affordable pricing and high-quality materials. Great experience working with them.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-[#F5F5F5] overflow-hidden">

            {/* TITLE */}
            <div className="px-6 md:px-20 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#30303A]">
                    Client Feedback
                </h2>
                <p className="text-sm text-[#676061] mt-2">
                    What professionals say about our materials
                </p>
            </div>

            {/* SCROLL ROW */}
            <div className="relative">

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-6 w-max"
                >

                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="min-w-[300px] bg-white border border-gray-200 p-6"
                        >

                            <p className="text-sm text-[#30303A] leading-relaxed">
                                “{t.text}”
                            </p>

                            <div className="mt-5">
                                <h4 className="text-sm font-medium text-[#30303A]">
                                    {t.name}
                                </h4>
                                <p className="text-xs text-[#676061]">
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