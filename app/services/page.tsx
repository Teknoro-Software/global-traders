"use client";

import { motion } from "framer-motion";
import { Globe, Package, Truck, ShieldCheck, Leaf, Warehouse } from "lucide-react";

const services = [
  {
    title: "Global Export",
    desc: "Exporting premium coconut products to UAE, Europe, and USA.",
    icon: Globe,
    image: "/images/bulk.jpg",
  },
  {
    title: "Bulk Supply",
    desc: "Large-scale supply for wholesalers and international buyers.",
    icon: Package,
    image: "/images/export.jpg",
  },
  {
    title: "Fast Delivery",
    desc: "Reliable and timely shipping with strong logistics support.",
    icon: Truck,
    image: "/images/fast.jpg",
  },
  {
    title: "Quality Assurance",
    desc: "Strict quality checks to meet global export standards.",
    icon: ShieldCheck,
    image: "/images/quality.jpg",
  },
  {
    title: "Farm Sourcing",
    desc: "Direct sourcing from trusted farms for authentic products.",
    icon: Leaf,
    image: "/images/farm.jpg",
  },
  {
    title: "Storage & Packaging",
    desc: "Modern storage and packaging to maintain freshness.",
    icon: Warehouse,
    image: "/images/stoarge.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#FDF8F4] text-[#2A1A17]">

      {/* 🔥 HERO */}
      <section className="relative h-[60vh] flex items-center px-6 md:px-20 text-white">

        <img
          src="/images/coco.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative">
          <p className="text-sm text-white/70">Home / Services</p>
          <h1 className="text-4xl md:text-5xl font-semibold mt-2">
            Our Export Services
          </h1>
        </div>

      </section>

      {/* 💎 SERVICES */}
      <section className="px-6 md:px-20 py-24">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            What We Offer
          </h2>
          <p className="text-sm text-[#6C5547] mt-3">
            End-to-end coconut export solutions for global markets
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group bg-white/80 backdrop-blur-xl border border-white/40 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-44 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <div className="mb-3 text-[#A02D27]">
                  <item.icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-medium">
                  {item.title}
                </h3>

                <p className="text-sm text-[#6C5547] mt-2">
                  {item.desc}
                </p>

                <button className="mt-4 text-[#A02D27] text-sm font-medium">
                  Learn More →
                </button>

              </div>

            </motion.div>
          ))}

        </div>
      </section>

      {/* 🌿 FEATURE SECTION */}
      <section className="px-6 md:px-20 pb-24 grid md:grid-cols-2 gap-16 items-center">

        <img
          src="/images/coconut.jpg"
          className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-semibold">
            Trusted Coconut Export Partner
          </h2>

          <p className="mt-4 text-[#6C5547] text-sm leading-relaxed">
            We specialize in exporting high-quality coconut products with
            consistent sourcing, strict quality control, and reliable logistics.
            Our goal is to deliver excellence to global markets.
          </p>

          <button className="mt-6 bg-[#A02D27] text-white px-6 py-3 text-sm rounded-md hover:opacity-90 transition">
            Contact Us
          </button>
        </div>

      </section>

      {/* 💼 TRUST STRIP */}
      <section className="px-6 md:px-20 pb-24 grid md:grid-cols-3 gap-6">

        {[
          "Premium Quality Products",
          "Reliable Global Shipping",
          "Trusted by International Clients",
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            className={`p-8 text-center rounded-lg border ${i === 1
                ? "bg-[#A02D27] text-white"
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