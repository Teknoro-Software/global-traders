"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-r from-[#F4C47C]/20 via-transparent to-[#E1A49A]/20 px-6 md:px-24 pt-24 pb-20">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mb-16"
      >
        <p className="text-xs tracking-[0.3em] text-[#A02D27] mb-3">
          CONTACT
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold text-[#2A1A17] leading-tight">
          Let’s Build Global <br />
          <span className="text-[#A02D27]">Business Together</span>
        </h1>

        <p className="mt-6 text-[#6C5547] text-base">
          Looking for reliable export partners? Get in touch with us for bulk orders,
          pricing, and global shipping details.
        </p>
      </motion.div>

      {/* MAIN */}
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >

          {/* LOCATION */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-md bg-[#A02D27]/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#A02D27]" />
            </div>
            <div>
              <h4 className="font-medium text-[#2A1A17]">
                Location
              </h4>
              <p className="text-[#6C5547] text-sm mt-1">
                Kerala, India
              </p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-md bg-[#A02D27]/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#A02D27]" />
            </div>
            <div>
              <h4 className="font-medium text-[#2A1A17]">
                Email
              </h4>
              <p className="text-[#6C5547] text-sm mt-1">
                support@yourcompany.com
              </p>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-md bg-[#A02D27]/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#A02D27]" />
            </div>
            <div>
              <h4 className="font-medium text-[#2A1A17]">
                Phone / WhatsApp
              </h4>
              <p className="text-[#6C5547] text-sm mt-1">
                +91 9544250000
              </p>
            </div>
          </div>

          {/* INFO BOX */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-6 rounded-xl shadow-sm">
            <p className="text-sm text-[#6C5547]">
              We typically respond within 24 hours for all international inquiries and bulk export requests.
            </p>
          </div>

        </motion.div>

        {/* RIGHT - FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/80 backdrop-blur-xl border border-white/40 p-8 rounded-xl shadow-sm"
        >

          <h2 className="text-xl font-medium text-[#2A1A17] mb-6">
            Send Inquiry
          </h2>

          <form className="space-y-5">

            {/* NAME */}
            <div className="grid grid-cols-2 gap-4">
              <input className="input4" placeholder="First Name" />
              <input className="input4" placeholder="Last Name" />
            </div>

            {/* EMAIL + PHONE */}
            <div className="grid grid-cols-2 gap-4">
              <input className="input4" placeholder="Email" />
              <input className="input4" placeholder="Phone / WhatsApp" />
            </div>

            {/* MESSAGE */}
            <textarea
              rows={5}
              className="input4 resize-none"
              placeholder="Product details, quantity, destination country..."
            />

            {/* BUTTON */}
            <button className="w-full bg-[#A02D27] text-white py-3 rounded-md text-sm hover:opacity-90 transition">
              Send Inquiry
            </button>

          </form>

        </motion.div>

      </div>
    </div>
  );
}