"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Package, Users, FileCheck, Briefcase } from "lucide-react";
import f1 from "@/components/ui/f1.webp"
import f2 from "@/components/ui/f2.webp"
import f3 from "@/components/ui/f3.webp"
import f4 from "@/components/ui/f4.webp"



const features = [
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Tracking your jewelry stock can be a challenging task, but with the DMD Gold application, you can easily manage and monitor inventory using visually appealing barcode and QR code tags. Additionally, you can efficiently manage stock with RFID tags for enhanced accuracy and control.",
    image: f1,
    reverse: false,
  },
  {
    icon: Briefcase,
    title: "Wholesaler B2B Order Management",
    description:
      "Managing your B2B jewelry order can be a complex task, but with the DMD Gold application, you can easily track and manage your orders using barcode and QR code tags. The system also supports RFID tags for seamless stock management, ensuring efficient tracking and organization of your B2B jewelry orders.",
    features: [
      "Business Operations",
      "Marketing & Sales",
      "Raw Materials Tracking",
      "Sales Management",
      "Supply Chain Control",
    ],
    image:f2,
    reverse: true,
  },
  {
    icon: Users,
    title: "Karigar-Manufacturer-Wholesaler Management",
    description:
      "Use our all-inclusive Karigar-Manufacturer-Wholesaler Management system to streamline the operations of your jewelry business. This system, which was created to address the particular requirements of the jewelry business, connects producers, distributors, and craftspeople, guaranteeing smooth cooperation and effectiveness.",
    features: [
      "Monitor raw materials issuance and returns",
      "Accurately manage labor costs, waste, and deadlines",
      "For transparency, automate costs and billing",
      "Maintain records of large orders and payments",
      "Create and handle bills effortlessly",
    ],
    image: f3,
    reverse: false,
  },
  {
    icon: FileCheck,
    title: "Vendor Registration Data Compliance Always ON!",
    description:
      "DMD Gold provides real-time verification for various statutory compliances such as GST, MSME, and PAN, among others. With digital approvals and scheduled checks, it ensures your vendor data is always accurate and up-to-date.",
    features: [
      "Continuous Compliance Monitoring",
      "Secure Data Handling",
      "Audit-Ready Documentation",
      "Instant Red Flags for Non-Compliance",
      "Integrated with Government Databases",
    ],
    image: f4,
    reverse: true,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">
            Key Features of <span className="text-amber-700">Jewellery Billing Software</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive tools designed to manage every aspect of your jewelry business with precision and ease.
          </p>
        </motion.div>

        {/* Feature Sections */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                feature.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div
                className={`relative ${feature.reverse ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-stone-900/30 to-transparent"></div>
                </div>
                {/* Decorative Element */}
                <div
                  className={`absolute -z-10 w-full h-full bg-amber-50 rounded-2xl ${
                    feature.reverse ? "-right-6 -bottom-6" : "-left-6 -top-6"
                  }`}
                ></div>
              </div>

              {/* Content Side */}
              <div className={feature.reverse ? "lg:order-1" : "lg:order-2"}>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-amber-700" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-3xl text-stone-900">{feature.title}</h3>
                </div>

                <p className="text-lg text-stone-600 font-light leading-relaxed mb-8">
                  {feature.description}
                </p>

                {/* Feature List (if exists) */}
                {feature.features && (
                  <ul className="grid grid-cols-1 gap-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 shrink-0"></span>
                        <span className="text-stone-700 font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
