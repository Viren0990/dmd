import Image from "next/image";
import logo from "@/components/ui/logo.png";
import { FaFacebook,  FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src={logo}
                  alt="DMD Gold Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="font-serif font-bold text-white text-lg">
                DMD <span className="text-amber-400">GOLD</span>
              </div>
            </div>
            <p className="text-stone-400 font-light leading-relaxed text-sm">
              Enterprise jewelry management software trusted by businesses across India. 
              Streamline your operations with precision and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#features" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#why-choose" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
              
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-stone-400">Inventory Management</li>
              <li className="text-stone-400">B2B Order Management</li>
              <li className="text-stone-400">Karigar Management</li>
              <li className="text-stone-400">Billing & Invoicing</li>
              <li className="text-stone-400">CRM System</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <div>
                  <a href="tel:+919075010115" className="text-stone-400 hover:text-amber-400 transition-colors">
                    +91 90750 10115
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <div>
                  <a href="mailto:demo@dmdgold.com" className="text-stone-400 hover:text-amber-400 transition-colors">
                    demo@dmdgold.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <div className="text-stone-400">
                  Pune, Maharashtra<br />India
                </div>
              </li>
            </ul>

            {/* Social Links */}
             {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://dmdgold.com/"
                className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://dmdgold.com/"
                className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Twitter"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href="https://dmdgold.com/"
                className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://dmdgold.com/"
                className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} DMD Gold Prosperity. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <span className="text-stone-500 hover:text-amber-400 transition-colors">
              Privacy Policy
            </span>
            <span className="text-stone-500 hover:text-amber-400 transition-colors">
              Terms of Service
            </span>
            <span className="text-stone-500 hover:text-amber-400 transition-colors">
              Support
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
