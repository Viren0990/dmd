"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import u from "@/components/ui/u.png"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-14">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={u} // Pass the imported object directly
          alt="Jewelry background"
          fill // Replaces w-full h-full object-cover
          className="object-cover"
           priority        // ✅ Already have this
  quality={85}    // ✅ Add: Reduce from 90 to 85
  sizes="100vw"   // ✅ Add: Tell Next.js the image is full-width
  placeholder="blur"  // ✅ Add: Show blur while loading (if using static import)
/>
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/75 to-white/65"></div>
      </div>
      <div className="text-center md:text-left relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <div>
            {/* Eyebrow */}
            <p className="text-amber-700 font-medium tracking-wide text-sm mb-4">
              TRUSTED BY 500+ JEWELERS ACROSS INDIA
            </p>

            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-stone-900 leading-[1.1] mb-6">
              Elevate Your
              <br />
              <span className="text-amber-700">Jewelry Business</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-10 max-w-lg">
              Streamline inventory management, billing, and operations with 
              India&apos;s most trusted jewelry software solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 cursor-pointer">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-stone-900 text-white font-medium rounded-full hover:bg-stone-800 transition-all hover:gap-3"
              >
                Get Started
                <ArrowRight size={18} />
              </a>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-stone-700 font-medium rounded-full border border-amber-600  hover:bg-stone-50 transition-all cursor-pointer">
                <Play size={18} className="text-amber-600" />
                Watch Demo
              </button>
            </div>
          </div>

        
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
          <motion.div 
            className="h-1 bg-linear-to-r from-amber-600 via-amber-700 to-amber-600"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0 }}
          />
          
        </div>
    </section>
  );
}
