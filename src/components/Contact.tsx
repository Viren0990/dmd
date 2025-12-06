"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import bg from "@/components/ui/bg.webp";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-stone-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">
            Easy to use. Easy to Access. <br />
            <span className="text-amber-700">Easy to Manage.</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
            User-friendly, feature-packed, and highly efficient—manage your inventory and accounts
            effortlessly with just a few clicks. Maximize profitability and streamline operations
            for your jewelry business.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          {/* Left: Image */}
          <div className="relative min-h-[500px] lg:min-h-[500px]">
            <Image src={bg} alt="Luxury gold jewelry" fill className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-r from-stone-900/20 to-transparent"></div>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-6 lg:p-8 flex flex-col justify-center">
            <div>
              <h3 className="font-serif text-3xl text-stone-900 mb-3">Let&apos;s Connect</h3>
              <p className="text-stone-500 mb-10 font-light">
                Book a personalized demo and see how we transform jewelry businesses.
              </p>

              <form className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                    />
                  </div>
                </div>

                {/* Contact Number */}
                <div>
                  <label className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-2">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business needs..."
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-stone-900 text-white font-medium rounded-full hover:bg-stone-800 transition-all hover:shadow-lg hover:shadow-stone-900/25 cursor-pointer"
                >
                  Submit Request
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="mt-14 text-center max-w-4xl mx-auto px-6">
          <p className="text-lg text-stone-600 font-light leading-relaxed">
            Our Jewellery Billing Software efficiently manages multi-location showrooms and
            manufacturing units with advanced stock control and staff access features. It streamlines
            your entire business by simplifying billing and order tracking while providing clear
            insights into cash flow and profitability.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
