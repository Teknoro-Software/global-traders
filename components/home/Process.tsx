"use client";

import { motion } from "framer-motion";
import { Package, Truck, Building2 } from "lucide-react";

const steps = [
    {
        title: "Material Selection",
        desc: "We source high-quality M-Sand, tiles, gravel, and bricks from trusted suppliers.",
        icon: Package,
    },
    {
        title: "Quality Check",
        desc: "Each material is inspected to ensure durability, strength, and consistency.",
        icon: Building2,
    },
    {
        title: "Delivery to Site",
        desc: "Fast and reliable transportation ensuring materials reach your project on time.",
        icon: Truck,
    },
];

export default function Process() {
    return (
        <section className="px-6 md:px-20 py-20 bg-[#F5F5F5]">

            {/* TITLE */}
            <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#30303A]">
                    Our Process
                </h2>
                <p className="text-sm text-[#676061] mt-2">
                    Simple and reliable process to supply construction materials
                </p>
            </div>

            {/* TIMELINE */}
            <div className="grid md:grid-cols-3 gap-10">

                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >

                        {/* STEP NUMBER */}
                        <div className="text-xs text-[#526FAE] mb-3">
                            STEP {i + 1}
                        </div>

                        {/* CARD */}
                        <div className="bg-white border border-gray-200 p-6">

                            {/* ICON */}
                            <div className="mb-4 text-[#526FAE]">
                                <step.icon className="w-6 h-6" />
                            </div>

                            {/* TITLE */}
                            <h3 className="text-lg font-medium text-[#30303A]">
                                {step.title}
                            </h3>

                            {/* DESC */}
                            <p className="text-sm text-[#676061] mt-2">
                                {step.desc}
                            </p>

                        </div>

                    </motion.div>
                ))}

            </div>
        </section>
    );
}