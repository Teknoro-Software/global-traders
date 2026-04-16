"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Truck } from "lucide-react";

const steps = [
    {
        title: "Farm Sourcing",
        desc: "We source premium coconuts directly from trusted farms ensuring authenticity and freshness.",
        icon: Leaf,
    },
    {
        title: "Quality Processing",
        desc: "Products are cleaned, processed, and verified to meet international export standards.",
        icon: ShieldCheck,
    },
    {
        title: "Global Delivery",
        desc: "Efficient logistics ensure safe and timely delivery to UAE, Europe, and USA.",
        icon: Truck,
    },
];

export default function Process() {
    return (
        <section className="px-6 md:px-20 py-24 bg-gradient-to-r from-[#F4C47C]/20 via-transparent to-[#E1A49A]/20">

            {/* HEADER */}
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#2A1A17]">
                    Our Process
                </h2>
                <p className="text-sm text-[#6C5547] mt-3">
                    From farm sourcing to global export delivery
                </p>
            </div>

            {/* TIMELINE */}
            <div className="relative">

                {/* LINE */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-[#A02D27]/20"></div>

                <div className="grid md:grid-cols-3 gap-12 relative">

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="text-center relative"
                        >

                            {/* ICON CIRCLE */}
                            <div className="mx-auto w-14 h-14 rounded-full bg-white border border-[#A02D27]/20 flex items-center justify-center shadow-md relative z-10">
                                <step.icon className="w-6 h-6 text-[#A02D27]" />
                            </div>

                            {/* STEP NUMBER */}
                            <p className="text-xs tracking-widest text-[#A02D27] mt-4">
                                STEP {i + 1}
                            </p>

                            {/* TITLE */}
                            <h3 className="text-lg font-medium text-[#2A1A17] mt-2">
                                {step.title}
                            </h3>

                            {/* DESC */}
                            <p className="text-sm text-[#6C5547] mt-2 max-w-xs mx-auto">
                                {step.desc}
                            </p>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}