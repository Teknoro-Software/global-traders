"use client";

import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "M-Sand",
    price: "₹1,500 / ton",
    category: "Sand",
    image: "/images/msand.jpg",
  },
  {
    id: 2,
    name: "Floor Tiles",
    price: "₹45 / sqft",
    category: "Tiles",
    image: "/images/tiles.webp",
  },
  {
    id: 3,
    name: "Gravel Stones",
    price: "₹1,200 / ton",
    category: "Stones",
    image: "/images/gravel.jpg",
  },
  {
    id: 4,
    name: "Marble Slabs",
    price: "₹120 / sqft",
    category: "Marble",
    image: "/images/marble.jpeg",
  },
  {
    id: 5,
    name: "Hollow Bricks",
    price: "₹35 / piece",
    category: "Bricks",
    image: "/images/Hollow.jpg",
  },
  {
    id: 6,
    name: "Construction Sand",
    price: "₹1,400 / ton",
    category: "Sand",
    image: "/images/Construction.jpg",
  },
];

export default function ShopPage() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = [
    "ALL",
    "Sand",
    "Tiles",
    "Stones",
    "Marble",
    "Bricks",
  ];

  const filteredProducts =
    activeCategory === "ALL"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#F5F5F5] min-h-screen px-6 md:px-20 py-24">

      {/* HEADER */}
      <div className="mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#30303A]">
          Materials
        </h1>
        <p className="text-xs text-[#676061] mt-1">
          {filteredProducts.length} Items
        </p>
      </div>

      {/* FILTER */}
      <div className="flex gap-3 flex-wrap mb-12">
        {categories.map((item, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(item)}
            className={`px-4 py-2 text-sm border transition ${activeCategory === item
                ? "bg-[#526FAE] text-white border-[#526FAE]"
                : "border-gray-300 text-[#30303A] hover:border-[#526FAE]"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            className="group"
          >

            {/* IMAGE */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <img
                src={product.image}
                className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* TEXT */}
            <div className="mt-3">
              <p className="text-[10px] text-[#526FAE] uppercase">
                {product.category}
              </p>

              <h3 className="text-sm text-[#30303A]">
                {product.name}
              </h3>

              <p className="text-sm text-[#30303A] mt-1">
                {product.price}
              </p>
            </div>

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
              className="mt-3 w-full bg-[#30303A] text-white text-sm py-2 hover:bg-black transition"
            >
              Add to Cart
            </button>

          </motion.div>
        ))}

      </div>
    </div>
  );
}