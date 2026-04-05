"use client";

import { motion } from "framer-motion";

const categories = [
    {
        name: "M-Sand",
        image: "/images/msand.jpg",
    },
    {
        name: "Tiles",
        image: "/images/tiles.webp",
    },
    {
        name: "Gravel Stones",
        image: "/images/gravel.jpg",
    },
    {
        name: "Marble",
        image: "/images/marble.jpeg",
    },
    {
        name: "Hollow Bricks",
        image: "/images/hollow.jpg",
    },
    {
        name: "Bulk Supply",
        image: "/images/construction.jpg",
    },
];

export default function Categories() {
    return (
        <section className="px-6 md:px-20 py-20 bg-[#F5F5F5]">

            {/* TITLE */}
            <div className="mb-14">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#30303A]">
                    Materials We Supply
                </h2>
                <p className="text-sm text-[#676061] mt-2">
                    High-quality construction materials for all types of projects
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

                {categories.map((cat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className="group cursor-pointer"
                    >

                        {/* IMAGE */}
                        <div className="relative overflow-hidden rounded-md">

                            <img
                                src={cat.image}
                                className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
                            />

                            {/* DARK OVERLAY */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                                <span className="text-white text-sm">
                                    View Materials →
                                </span>
                            </div>

                        </div>

                        {/* TEXT */}
                        <h3 className="mt-3 text-[#30303A] font-medium text-sm">
                            {cat.name}
                        </h3>

                    </motion.div>
                ))}

            </div>
        </section>
    );
}