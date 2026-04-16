"use client";

import { motion } from "framer-motion";

const categories = [
    {
        name: "Fresh Coconut",
        image: "/images/coconut.jpg",
    },
    {
        name: "Coconut Oil",
        image: "/images/oil.jpg",
    },
    {
        name: "Coconut Powder",
        image: "/images/powder.jpg",
    },
    {
        name: "Coconut Shell",
        image: "/images/shell.jpg",
    },
    {
        name: "Coir Products",
        image: "/images/coir.jpg",
    },
    {
        name: "Bulk Export",
        image: "/images/export.jpg",
    },
];

export default function Categories() {
    return (
        <section className="px-6 md:px-20 py-2 bg-[#F4C47C]/20">

            {/* HEADER */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#2A1A17]">
                    Our Product Categories
                </h2>
                <p className="text-sm text-[#6C5547] mt-3">
                    Premium coconut products crafted for global markets
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

                {categories.map((cat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className="group cursor-pointer"
                    >

                        {/* CARD */}
                        <div className="relative overflow-hidden rounded-xl shadow-md">

                            {/* IMAGE */}
                            <img
                                src={cat.image}
                                className="w-full h-[240px] object-cover group-hover:scale-110 transition duration-500"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>

                            {/* TEXT OVER IMAGE */}
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-medium">
                                    {cat.name}
                                </h3>

                                <p className="text-xs mt-1 opacity-80">
                                    View Products →
                                </p>
                            </div>

                        </div>

                    </motion.div>
                ))}

            </div>
        </section>
    );
}