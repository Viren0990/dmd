"use client";

import { motion } from "framer-motion";
import { Sparkles, ShoppingCart, Package, Wifi, FileText, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "All-in-One Platform for B2B & B2C",
    description:
      "One-window solution designed to manage both business-to-business and business-to-customer operations with ease.",
  },
  {
    icon: ShoppingCart,
    title: "Specialized E-commerce for Jewelry Businesses",
    description:
      "A dedicated e-commerce application built to meet the unique needs of the gold, diamond, and gemstone industry.",
  },
  {
    icon: Package,
    title: "Inventory Showcase Made Easy",
    description:
      "Upload and manage your product inventory online to showcase your latest designs and collections effortlessly.",
  },
  {
    icon: Wifi,
    title: "Dual Business Support – Online & Offline",
    description:
      "Integrated tools to manage sales and operations both digitally and at your physical store locations.",
  },
  {
    icon: FileText,
    title: "Advanced Billing & Invoicing System",
    description:
      "Generate professional bills and invoices with built-in support for jewelry-specific tax and pricing structures.",
  },
  {
    icon: BarChart3,
    title: "Comprehensive Business Reports",
    description:
      "Access real-time reports on sales, orders, inventory, and more – all from one centralized dashboard.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">
            Why Choose <span className="text-amber-700">DMD Gold Applications?</span>
          </h2>
          <p className="text-xl text-stone-600 font-light">
            Key Features & Benefits
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full p-8 bg-stone-50 rounded-2xl border border-stone-100 hover:border-amber-200 hover:bg-white transition-all duration-300 hover:shadow-lg">
                {/* Icon */}
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                  <benefit.icon className="w-7 h-7 text-amber-700" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-stone-900 mb-3 leading-snug">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-stone-600 font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
