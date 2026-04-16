"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CartPage() {
  const { cart, removeItem, updateQty } = useCart();
  const router = useRouter();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="bg-gradient-to-r from-[#F4C47C]/20 via-transparent to-[#E1A49A]/20 min-h-screen px-6 md:px-24 pt-28 pb-2">

      {/* HEADER */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#2A1A17]">
          Your Inquiry List
        </h1>
        <p className="text-sm text-[#6C5547] mt-2">
          {cart.length} Products Selected
        </p>
      </div>

      {/* EMPTY */}
      {cart.length === 0 ? (
        <div className="text-center mt-40">
          <p className="text-[#6C5547] mb-6">
            No products added yet
          </p>

          <button
            onClick={() => router.push("/shop")}
            className="px-6 py-3 bg-[#A02D27] text-white text-sm rounded-md hover:opacity-90 transition"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-16">

          {/* LEFT */}
          <div className="md:col-span-2 space-y-6">

            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-6 items-center bg-white/80 backdrop-blur-xl border border-white/40 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >

                {/* IMAGE */}
                <img
                  src={item.image || "/images/fallback.jpg"}
                  className="w-24 h-24 object-cover rounded-md"
                />

                {/* DETAILS */}
                <div className="flex-1">

                  <h3 className="text-sm font-medium text-[#2A1A17]">
                    {item.name}
                  </h3>

                  <p className="text-[11px] text-[#A02D27] mt-1 uppercase">
                    Export Product
                  </p>

                  <p className="text-sm mt-2 text-[#2A1A17]">
                    ₹{item.price.toLocaleString()}
                  </p>

                  {/* QTY */}
                  <div className="flex items-center gap-4 mt-4">

                    <div className="flex items-center border border-[#e5c2c8] rounded-md overflow-hidden">

                      <button
                        onClick={() => updateQty(item.id, "dec")}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        −
                      </button>

                      <span className="px-4 text-sm">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => updateQty(item.id, "inc")}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>

                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-[#6C5547] hover:text-black"
                    >
                      Remove
                    </button>

                  </div>

                </div>

                {/* PRICE */}
                <div className="text-sm font-semibold text-[#2A1A17]">
                  ₹{(item.price * item.qty).toLocaleString()}
                </div>

              </motion.div>
            ))}

          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-xl border border-white/40 p-8 rounded-xl shadow-sm h-fit"
          >

            <h3 className="text-sm tracking-wide mb-8 text-[#2A1A17]">
              Inquiry Summary
            </h3>

            <div className="flex justify-between text-sm mb-4">
              <span className="text-[#6C5547]">Subtotal</span>
              <span>₹{total.toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-sm mb-6">
              <span className="text-[#6C5547]">Shipping</span>
              <span>To be discussed</span>
            </div>

            <div className="border-t border-gray-200 pt-4 flex justify-between text-sm mb-8">
              <span>Total Estimate</span>
              <span className="font-semibold">
                ₹{total.toLocaleString()}
              </span>
            </div>

            <button
              onClick={() => router.push("/checkout")}
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