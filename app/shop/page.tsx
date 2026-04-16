"use client";

import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Fresh Coconut",
    price: "₹25 / piece",
    category: "Coconut",
    image: "/images/coconut.jpg",
  },
  {
    id: 2,
    name: "Coconut Oil",
    price: "₹180 / litre",
    category: "Oil",
    image: "/images/oil.jpg",
  },
  {
    id: 3,
    name: "Coconut Powder",
    price: "₹220 / kg",
    category: "Powder",
    image: "/images/powder.jpg",
  },
  {
    id: 4,
    name: "Coconut Shell",
    price: "₹15 / piece",
    category: "Shell",
    image: "/images/shell.jpg",
  },
  {
    id: 5,
    name: "Coir Products",
    price: "₹300 / bundle",
    category: "Coir",
    image: "/images/coir.jpg",
  },
];

export default function ShopPage() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = ["ALL", "Coconut", "Oil", "Powder", "Shell", "Coir"];

  const filteredProducts =
    activeCategory === "ALL"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-gradient-to-r from-[#F4C47C]/20 via-transparent to-[#E1A49A]/20 min-h-screen px-6 md:px-20 py-24">

      {/* HEADER */}
      <div className="mb-16 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#2A1A17]">
          Our Products
        </h1>
        <p className="text-sm text-[#6C5547] mt-2">
          {filteredProducts.length} Products Available
        </p>
      </div>

      {/* FILTER */}
      <div className="flex justify-center flex-wrap gap-3 mb-14">
        {categories.map((item, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(item)}
            className={`px-5 py-2 text-sm rounded-full border transition ${activeCategory === item
                ? "bg-[#A02D27] text-white border-[#A02D27]"
                : "border-[#e5c2c8] text-[#2A1A17] hover:border-[#A02D27]"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group"
          >

            {/* CARD */}
            <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">

                <p className="text-[10px] text-[#A02D27] uppercase">
                  {product.category}
                </p>

                <h3 className="text-sm font-medium text-[#2A1A17]">
                  {product.name}
                </h3>

                <p className="text-sm text-[#6C5547] mt-1">
                  {product.price}
                </p>

                {/* BUTTON */}
                <button
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: Number(product.price.replace(/[^0-9]/g, "")),
                      image: product.image,
                    })
                  }
                  className="mt-4 w-full bg-[#A02D27] text-white text-sm py-2 rounded-md hover:opacity-90 transition"
                >
                  Add to Inquiry
                </button>

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}