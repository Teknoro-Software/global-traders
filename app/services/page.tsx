"use client";

import { motion } from "framer-motion";
import {
  Package,
  Truck,
  ShieldCheck,
  Building2,
  Layers,
  Warehouse,
} from "lucide-react";

const services = [
  {
    title: "Bulk Material Supply",
    desc: "Supplying M-Sand, tiles, gravel, and bricks for large construction projects.",
    icon: Package,
    image: "/images/bulk.png",
  },
  {
    title: "Fast Delivery",
    desc: "On-time delivery ensuring your project never faces delays.",
    icon: Truck,
    image: "/images/truck.png",
  },
  {
    title: "Quality Assurance",
    desc: "All materials are tested for strength and durability.",
    icon: ShieldCheck,
    image: "/images/quality.png",
  },
  {
    title: "Construction Support",
    desc: "Helping contractors choose the right materials.",
    icon: Building2,
    image: "/images/Support.png",
  },
  {
    title: "Wide Material Range",
    desc: "From sand to marble, everything you need in one place.",
    icon: Layers,
    image: "/images/materials.png",
  },
  {
    title: "Storage & Distribution",
    desc: "Efficient storage and supply chain management.",
    icon: Warehouse,
    image: "/images/warehouse.png",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#F5F5F5] text-[#30303A]">

      {/* 🔥 HERO */}
      <section className="relative h-[55vh] flex items-center px-6 md:px-20 text-white">

        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative">
          <p className="text-sm text-white/70">Home / Services</p>
          <h1 className="text-4xl md:text-5xl font-semibold mt-2">
            Our Services
          </h1>
        </div>

      </section>

      {/* 💎 SERVICES GRID */}
      <section className="px-6 md:px-20 py-20">

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 overflow-hidden hover:border-[#526FAE] transition"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-40 object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">

                <div className="mb-3 text-[#526FAE]">
                  <item.icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-medium">
                  {item.title}
                </h3>

                <p className="text-sm text-[#676061] mt-2">
                  {item.desc}
                </p>

                <button className="mt-4 text-[#526FAE] text-sm">
                  Learn More →
                </button>

              </div>

            </motion.div>
          ))}

        </div>
      </section>

      {/* 🧱 FEATURE SECTION */}
      <section className="px-6 md:px-20 pb-20 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="/images/construction.jpg"
          className="w-full h-[400px] object-cover rounded-md"
        />

        <div>
          <h2 className="text-3xl font-semibold">
            Reliable Materials for Every Project
          </h2>

          <p className="mt-4 text-[#676061] text-sm leading-relaxed">
            Global Traders provides high-quality construction materials with
            reliable delivery and consistent supply. We support contractors,
            builders, and developers with everything needed to complete projects efficiently.
          </p>

          <button className="mt-6 bg-[#526FAE] text-white px-6 py-3 text-sm hover:opacity-90 transition">
            Contact Us
          </button>
        </div>

      </section>

      {/* 💼 TRUST STRIP */}
      <section className="px-6 md:px-20 pb-20 grid md:grid-cols-3 gap-6">

        {[
          "High Quality Materials",
          "Reliable Supply Chain",
          "Trusted by Contractors",
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className={`p-8 text-center border ${i === 1
                ? "bg-[#526FAE] text-white"
                : "bg-white border-gray-200"
              }`}
          >
            <h3 className="font-medium">{item}</h3>
          </motion.div>
        ))}

      </section>

    </div>
  );
}