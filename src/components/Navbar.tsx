
import Image from "next/image";
import logo from "@/components/ui/logo.png";

export default function Navbar() {



  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-200 
        bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex h-16 md:h-14 items-center justify-between px-4 md:px-8">
        
        {/* Logo Section */}
        <div className="flex gap-1 items-center">
          <div className="relative w-12 h-12">
            <Image
              src={logo}
              alt="DMD Gold Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="font-serif font-bold text-amber-700 md:text-lg tracking-tight">
           DMD GOLD <span className="hidden md:flex">SOFTWARE</span>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-stone-900 text-white text-xs md:text-sm font-medium rounded-full hover:bg-stone-800 transition-all hover:shadow-lg hover:shadow-stone-900/20 cursor-pointer">
            Book Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
