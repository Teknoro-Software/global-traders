/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CheckoutPage() {
    const { cart } = useCart();
    const router = useRouter();

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        pin: "",
        phone: "",
        email: "",
    });

    const [errors, setErrors] = useState<any>({});

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors: any = {};

        Object.keys(form).forEach((key) => {
            if (!form[key as keyof typeof form]) {
                newErrors[key] = "Required";
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validate()) return;

        localStorage.setItem("quoteRequest", JSON.stringify({ cart, form }));
        localStorage.removeItem("cart");

        router.push("/success");
    };

    return (
        <div className="bg-gradient-to-r from-[#F4C47C]/20 via-transparent to-[#E1A49A]/20 min-h-screen px-6 md:px-24 pt-28 pb-20">

            {/* HEADER */}
            <div className="text-center mb-14">
                <h1 className="text-3xl md:text-4xl font-semibold text-[#2A1A17]">
                    Export Inquiry
                </h1>
                <p className="text-sm text-[#6C5547] mt-2">
                    Submit your requirements and our team will contact you
                </p>
            </div>

            {cart.length === 0 ? (
                <div className="text-center mt-40">
                    <p className="text-[#6C5547] mb-6">
                        No products selected
                    </p>

                    <button
                        onClick={() => router.push("/shop")}
                        className="px-6 py-3 bg-[#A02D27] text-white text-sm rounded-md"
                    >
                        Browse Products
                    </button>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 gap-16">

                    {/* LEFT - FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-xl p-8 shadow-sm"
                    >

                        <h2 className="text-sm mb-6 text-[#6C5547]">
                            Buyer Details
                        </h2>

                        <div className="space-y-4">

                            {/* NAME */}
                            <div className="grid grid-cols-2 gap-4">
                                {["firstName", "lastName"].map((field) => (
                                    <div key={field}>
                                        <input
                                            name={field}
                                            value={form[field as keyof typeof form]}
                                            onChange={handleChange}
                                            placeholder={
                                                field === "firstName" ? "First Name" : "Last Name"
                                            }
                                            className={`input4 ${errors[field] && "border-red-500"}`}
                                        />
                                    </div>
                                ))}
                            </div>

                            <input
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                placeholder="Delivery Location / Country"
                                className="input4"
                            />

                            <div className="grid grid-cols-3 gap-4">
                                {["city", "state", "pin"].map((field) => (
                                    <input
                                        key={field}
                                        name={field}
                                        value={form[field as keyof typeof form]}
                                        onChange={handleChange}
                                        placeholder={
                                            field === "pin"
                                                ? "ZIP"
                                                : field.charAt(0).toUpperCase() + field.slice(1)
                                        }
                                        className="input4"
                                    />
                                ))}
                            </div>

                            <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Phone / WhatsApp"
                                className="input4"
                            />

                            <input
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="input4"
                            />

                            <textarea
                                rows={4}
                                placeholder="Product details, quantity, packaging..."
                                className="input4"
                            />

                        </div>
                    </motion.div>

                    {/* RIGHT - SUMMARY */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-xl p-8 shadow-sm h-fit"
                    >

                        <h2 className="text-sm mb-6 text-[#2A1A17]">
                            Inquiry Summary
                        </h2>

                        <div className="space-y-3 mb-6">
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span className="text-[#6C5547]">
                                        {item.name} × {item.qty}
                                    </span>
                                    <span>
                                        ₹{(item.price * item.qty).toLocaleString()}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between border-t pt-4 mb-8 text-sm">
                            <span>Total Estimate</span>
                            <span className="font-semibold">
                                ₹{total.toLocaleString()}
                            </span>
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="w-full bg-[#A02D27] text-white py-3 rounded-md text-sm hover:opacity-90 transition"
                        >
                            Send Inquiry
                        </button>

                    </motion.div>

                </div>
            )}
        </div>
    );
}