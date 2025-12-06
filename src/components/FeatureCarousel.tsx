"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag, Gem, Users2, Award, FileText } from "lucide-react";
import Image from "next/image";
import slider1 from "@/components/ui/slider1.webp"
import slider2 from "@/components/ui/slider2.webp"
import slider3 from "@/components/ui/slider3.webp"
import slider4 from "@/components/ui/slider4.webp"
import slider5 from "@/components/ui/slider5.webp"

const carouselFeatures = [
  {
    icon: ShoppingBag,
    title: "B2B Bulk Order Management",
    description: "Efficiently streamline your business-to-business bulk order process with our robust management solution. Designed to handle large-scale orders seamlessly.",
    highlights: [
      "Centralized Order Processing",
      "Custom Pricing & Discounts",
      "Real-Time Inventory Sync",
      "Order Tracking & Transparency",
      "Secure Payment Processing",
      "Advanced Analytics",
    ],
    image: slider1,
  },
  {
    icon: Gem,
    title: "Certified Diamond Details",
    description: "Complete transparency and reliability with comprehensive details for certified diamonds. Access certification information from recognized authorities.",
    highlights: [
      "Access Certification Information",
      "Track Detailed Specifications",
      "Verify Origin & Traceability",
      "Streamlined Management",
      "Carat, Cut, Clarity, Color Details",
    ],
    image: slider2
  },
  {
    icon: Users2,
    title: "Customer Relationship Management",
    description: "Revolutionize how you manage and enhance customer interactions with our comprehensive CRM module designed for jewelry businesses.",
    highlights: [
      "Centralized Customer Database",
      "Lead & Opportunity Management",
      "Personalized Communication",
      "Sales Pipeline Tracking",
      "Task & Activity Management",
      "Analytics and Reporting",
      "Mobile-Friendly Access",
    ],
    image: slider3
  },
  {
    icon: Award,
    title: "HUID/Hallmark Management",
    description: "Seamlessly manage hallmarking and HUID compliance for your jewelry inventory. Ensure all pieces meet regulatory standards.",
    highlights: [
      "HUID Registration & Tracking",
      "Hallmark Certification Management",
      "Compliance Monitoring",
      "Automated Documentation",
      "BIS Standards Integration",
    ],
    image: slider4
  },
  {
    icon: FileText,
    title: "Invoicing & Billing Software",
    description: "Boost accuracy, save time, and provide a seamless billing experience with our advanced jewelry invoicing software.",
    highlights: [
      "Customized Professional Invoices",
      "GST and Tax Compliance",
      "Integrated Bulk & Retail Billing",
      "Real-Time Payment Tracking",
      "User-Friendly Interface",
      "Multi-Device Access",
    ],
    image: slider5
  },
];

export default function FeaturesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselFeatures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselFeatures.length) % carouselFeatures.length);
  };

  const currentFeature = carouselFeatures[currentIndex];

  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">
            Advanced <span className="text-amber-700">Capabilities</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light">
            Explore additional powerful features designed to elevate your jewelry business operations.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid lg:grid-cols-2 gap-0"
            >
              {/* Image Side */}
              <div className="relative h-[400px] lg:h-[600px]">
                <Image
                  src={currentFeature.image}
                  alt={currentFeature.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-stone-900/60 via-stone-900/20 to-transparent"></div>
                
                {/* Icon Badge on Image */}
                <div className="absolute top-8 left-8">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                    <currentFeature.icon className="w-8 h-8 text-amber-700" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center pb-24 lg:pb-16">
                {/* Title */}
                <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">
                  {currentFeature.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-stone-600 font-light leading-relaxed mb-8">
                  {currentFeature.description}
                </p>

                {/* Highlights Grid */}
                <div className="space-y-3">
                  {currentFeature.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 shrink-0"></span>
                      <span className="text-stone-700 font-light">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Overlay - Only absolute on desktop */}
          <div className="lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:bg-linear-to-t p-6 lg:p-8 border-t border-stone-100 lg:border-0">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:bg-stone-50 hover:border-stone-300 hover:shadow-lg transition-all"
                aria-label="Previous feature"
              >
                <ChevronLeft className="w-5 h-5 text-stone-700" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {carouselFeatures.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex
                        ? "w-8 bg-amber-600"
                        : "w-2 bg-stone-300 hover:bg-stone-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:bg-stone-50 hover:border-stone-300 hover:shadow-lg transition-all cursor-pointer"
                aria-label="Next feature"
              >
                <ChevronRight className="w-5 h-5 text-stone-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="text-center mt-8">
          <span className="text-sm text-stone-400 font-light">
            {currentIndex + 1} / {carouselFeatures.length}
          </span>
        </div>
      </div>
    </section>
  );
}
