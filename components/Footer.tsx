"use client";

import { motion } from "framer-motion";
import { RiGlobalFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Footer() {
    const router = useRouter();

    return (
        <footer className="mt-20">

            {/* 🔔 CTA STRIP */}
            <div className="mx-6 md:mx-10 mb-10 rounded-xl bg-gradient-to-r from-[#A02D27] to-[#6B1F1A] text-white px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Looking for Reliable Coconut Export Partner?
                    </h2>
                    <p className="text-sm text-white/80 mt-2">
                        Supplying premium coconut products to UAE, Europe, and USA
                    </p>
                </div>

                <button
                    onClick={() => router.push("/contact")}
                    className="bg-white text-[#2A1A17] px-6 py-3 text-sm rounded-md hover:opacity-90 transition"
                >
                    Request Quote
                </button>

            </div>

            {/* 🧊 MAIN FOOTER */}
            <div className="bg-[#2A1A17] text-white px-6 md:px-10 py-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                    {/* BRAND */}
                    <div>
                        <h3 className="text-xl font-semibold">
                            Global Traders
                        </h3>
                        <p className="mt-3 text-sm text-white/70 leading-relaxed">
                            Exporting premium coconut products and natural goods with
                            consistent quality, trusted sourcing, and reliable global logistics.
                        </p>
                    </div>

                    {/* LINKS */}
                    <div>
                        <h4 className="font-medium text-[#F4C47C] mb-3">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li onClick={() => router.push("/")} className="cursor-pointer hover:text-white">Home</li>
                            <li onClick={() => router.push("/services")} className="cursor-pointer hover:text-white">Services</li>
                            <li onClick={() => router.push("/shop")} className="cursor-pointer hover:text-white">Products</li>
                            <li onClick={() => router.push("/contact")} className="cursor-pointer hover:text-white">Contact</li>
                        </ul>
                    </div>

                    {/* PRODUCTS */}
                    <div>
                        <h4 className="font-medium text-[#F4C47C] mb-3">
                            Products
                        </h4>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li>Fresh Coconut</li>
                            <li>Coconut Oil</li>
                            <li>Coconut Powder</li>
                            <li>Coir Products</li>
                        </ul>
                    </div>

                    {/* SOCIAL */}
                    <div>
                        <h4 className="font-medium text-[#F4C47C] mb-3">
                            Connect
                        </h4>

                        <div className="flex gap-4 text-white/70">

                            <motion.div whileHover={{ scale: 1.2 }}>
                                <RiGlobalFill className="cursor-pointer hover:text-white" />
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.2 }}>
                                <FaFacebook className="cursor-pointer hover:text-white" />
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.2 }}>
                                <FaInstagram className="cursor-pointer hover:text-white" />
                            </motion.div>

                        </div>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-white/50">
                    © 2026 Global Traders. All rights reserved.
                </div>

            </div>
        </footer>
    );
}