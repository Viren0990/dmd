"use client";


import u from "@/components/ui/u.png"
import Image from "next/image";

export default function Page() {
    return(
        <div className="relative min-h-screen flex items-center pt-14">
        <div>
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
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/75 to-white/45"></div>
      </div>
    
      <div className="relative z-10 max-w-xl p-8">
      <div className="text-2xl">Rings</div>
      <div className="mt-4">
Elevate your personal style with our exquisite collection of 22 carat gold rings, each an embodiment of diverse influences spanning European, Western, Eastern, Indian, Pakistani, Bangladeshi, and Sri Lankan traditions. These meticulously crafted rings cater to a wide spectrum of tastes, offering a versatile array of choices. In European and Western fashion, gold rings often feature contemporary and minimalist designs, appealing to those who appreciate sleek elegance and modern aesthetics.
      </div>
        </div>
        </div>
        </div>
    )
}