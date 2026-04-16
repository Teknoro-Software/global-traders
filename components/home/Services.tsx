"use client";

import { motion } from "framer-motion";
import { Globe, Package, Truck, ShieldCheck, Leaf, Warehouse } from "lucide-react";

const services = [
    {
        title: "Global Export",
        desc: "Exporting premium coconut products to UAE, Europe, and USA markets.",
        icon: Globe,
    },
    {
        title: "Bulk Supply",
        desc: "Large-scale supply for wholesalers, distributors, and international buyers.",
        icon: Package,
    },
    {
        title: "Fast Shipping",
        desc: "Reliable and timely delivery across global destinations with secure logistics.",
        icon: Truck,
    },
    {
        title: "Quality Assurance",
        desc: "Strict quality checks ensuring freshness and international export standards.",
        icon: ShieldCheck,
    },
    {
        title: "Farm Sourcing",
        desc: "Direct sourcing from trusted farms for authentic and high-quality coconuts.",
        icon: Leaf,
    },
    {
        title: "Storage & Packaging",
        desc: "Advanced storage and packaging to maintain freshness during export.",
        icon: Warehouse,
    },
];

export default function Services() {
    return (
        <section className="px-6 md:px-20 py-24 bg-[#F4C47C]/20">

            {/* HEADER */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#2A1A17]">
                    Our Services
                </h2>
                <p className="text-sm text-[#6C5547] mt-3">
                    End-to-end coconut export solutions for global markets
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className="group"
                    >

                        {/* CARD */}
                        <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-xl p-6 shadow-sm hover:shadow-lg transition">

                            {/* ICON */}
                            <div className="mb-4 w-10 h-10 rounded-md bg-[#A02D27]/10 flex items-center justify-center text-[#A02D27]">
                                <service.icon className="w-5 h-5" />
                            </div>

                            {/* TITLE */}
                            <h3 className="text-lg font-medium text-[#2A1A17]">
                                {service.title}
                            </h3>

                            {/* DESC */}
                            <p className="text-sm text-[#6C5547] mt-2 leading-relaxed">
                                {service.desc}
                            </p>

                            {/* CTA */}
                            <button className="mt-4 text-[#A02D27] text-sm font-medium group-hover:translate-x-1 transition">
                                Learn More →
                            </button>

                        </div>

                    </motion.div>
                ))}

            </div>
        </section>
    );
}