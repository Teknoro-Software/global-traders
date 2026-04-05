"use client";

import { motion } from "framer-motion";
import { Truck, Package, ShieldCheck, Building2, Layers, Warehouse } from "lucide-react";

const services = [
    {
        title: "Bulk Material Supply",
        desc: "Reliable supply of M-Sand, tiles, gravel, and bricks for large construction projects.",
        icon: Package,
    },
    {
        title: "On-Time Delivery",
        desc: "Fast and efficient transportation ensuring materials reach your site without delays.",
        icon: Truck,
    },
    {
        title: "Quality Assurance",
        desc: "All materials are tested and verified for strength, durability, and consistency.",
        icon: ShieldCheck,
    },
    {
        title: "Construction Support",
        desc: "Helping contractors and builders choose the right materials for their projects.",
        icon: Building2,
    },
    {
        title: "Wide Material Range",
        desc: "From sand to marble, we provide a complete range of construction materials.",
        icon: Layers,
    },
    {
        title: "Storage & Distribution",
        desc: "Efficient warehousing and distribution system for smooth supply operations.",
        icon: Warehouse,
    },
];

export default function Services() {
    return (
        <section className="px-6 md:px-20 py-20 bg-[#F5F5F5]">

            {/* TITLE */}
            <div className="mb-14">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#30303A]">
                    Our Services
                </h2>
                <p className="text-sm text-[#676061] mt-2">
                    Complete construction material solutions for contractors and builders
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className="group"
                    >

                        {/* CARD */}
                        <div className="bg-white border border-gray-200 p-6 hover:border-[#526FAE] transition">

                            {/* ICON */}
                            <div className="mb-4 text-[#526FAE]">
                                <service.icon className="w-6 h-6" />
                            </div>

                            {/* TITLE */}
                            <h3 className="text-lg font-medium text-[#30303A]">
                                {service.title}
                            </h3>

                            {/* DESC */}
                            <p className="text-sm text-[#676061] mt-2 leading-relaxed">
                                {service.desc}
                            </p>

                            {/* CTA */}
                            <button className="mt-4 text-[#526FAE] text-sm font-medium">
                                Learn More →
                            </button>

                        </div>

                    </motion.div>
                ))}

            </div>
        </section>
    );
}