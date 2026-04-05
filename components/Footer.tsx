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
            <div className="mx-6 md:mx-10 mb-10 rounded-md bg-[#30303A] text-white px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Need Materials for Your Project?
                    </h2>
                    <p className="text-sm text-gray-300 mt-1">
                        Get reliable supply of construction materials with fast delivery
                    </p>
                </div>

                <button
                    onClick={() => router.push("/contact")}
                    className="bg-[#526FAE] px-6 py-3 text-sm text-white hover:opacity-90 transition"
                >
                    Contact Now
                </button>
            </div>

            {/* 🧊 MAIN FOOTER */}
            <div className="bg-[#30303A] text-white px-6 md:px-10 py-14">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                    {/* BRAND */}
                    <div>
                        <h3 className="text-xl font-semibold">
                            Global Traders
                        </h3>
                        <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                            Supplying M-Sand, tiles, gravel stones, marbles, and hollow bricks
                            for construction projects with reliability and quality assurance.
                        </p>
                    </div>

                    {/* LINKS */}
                    <div>
                        <h4 className="font-medium text-[#526FAE] mb-3">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li onClick={() => router.push("/")} className="cursor-pointer hover:text-white">Home</li>
                            <li onClick={() => router.push("/services")} className="cursor-pointer hover:text-white">Services</li>
                            <li onClick={() => router.push("/shop")} className="cursor-pointer hover:text-white">Materials</li>
                            <li onClick={() => router.push("/contact")} className="cursor-pointer hover:text-white">Contact</li>
                        </ul>
                    </div>

                    {/* SERVICES */}
                    <div>
                        <h4 className="font-medium text-[#526FAE] mb-3">
                            Materials
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>M-Sand Supply</li>
                            <li>Tiles & Marble</li>
                            <li>Gravel Stones</li>
                            <li>Hollow Bricks</li>
                        </ul>
                    </div>

                    {/* SOCIAL */}
                    <div>
                        <h4 className="font-medium text-[#526FAE] mb-3">
                            Connect
                        </h4>

                        <div className="flex gap-4 text-gray-300">

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
                <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-400">
                    © 2026 Global Traders. All rights reserved.
                </div>
            </div>
        </footer>
    );
}