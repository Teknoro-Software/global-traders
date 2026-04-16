"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";

export default function SuccessPage() {
    const router = useRouter();

    const [requestId] = useState(() =>
        Math.floor(100000 + Math.random() * 900000)
    );

    return (
        <div className="bg-gradient-to-r from-[#F4C47C]/20 via-transparent to-[#E1A49A]/20 min-h-screen flex items-center justify-center px-6">

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center max-w-md w-full bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-10 shadow-lg"
            >

                {/* ICON */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-16 h-16 mx-auto mb-8 rounded-full bg-[#A02D27]/10 flex items-center justify-center"
                >
                    <Check className="w-7 h-7 text-[#A02D27]" />
                </motion.div>

                {/* BADGE */}
                <p className="text-xs tracking-[0.3em] text-[#A02D27] mb-3">
                    SUCCESS
                </p>

                {/* TITLE */}
                <h1 className="text-2xl font-semibold text-[#2A1A17]">
                    Inquiry Submitted
                </h1>

                {/* SUBTEXT */}
                <p className="text-sm text-[#6C5547] mt-3 leading-relaxed">
                    Your request has been successfully received.
                    Our team will contact you shortly with pricing and export details.
                </p>

                {/* REQUEST ID */}
                <div className="mt-8 text-sm text-[#6C5547]">
                    Reference ID:
                    <span className="ml-2 text-[#2A1A17] font-semibold">
                        #{requestId}
                    </span>
                </div>

                {/* DIVIDER */}
                <div className="h-px bg-gray-200 my-10"></div>

                {/* ACTIONS */}
                <div className="space-y-3">

                    <button
                        onClick={() => router.push("/shop")}
                        className="w-full bg-[#A02D27] text-white py-3 rounded-md text-sm hover:opacity-90 transition"
                    >
                        Explore More Products
                    </button>

                    <button
                        onClick={() => router.push("/")}
                        className="w-full text-sm text-[#6C5547] hover:text-[#2A1A17] transition"
                    >
                        Back to Home
                    </button>

                </div>

            </motion.div>
        </div>
    );
}