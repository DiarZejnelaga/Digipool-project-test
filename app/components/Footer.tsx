"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleScrollToServices = () => {
    if (pathname === "/") {
      const section = document.getElementById("services");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#services");
    }
  };

  return (
    <div className="bg-black text-white px-6 sm:px-12 py-12 sm:py-16">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-20">
        {/* Contact Info */}
        <div className="lg:w-2/5">
        <div className="flex items-center mb-8">
            <span className="inline-block flex-shrink-0 w-12 h-px bg-pink-500 mr-4"></span>
            <span className="text-pink-500 uppercase tracking-widest font-semibold">
              Contact us
            </span>
          </div>
          <br />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 mt-2">
          Let&apos;s <span className="text-pink-500">talk</span>
          </h2>
          <p className="text-base sm:text-lg mb-10 max-w-md">
            We want to hear about you, your business, and your challenges
          </p>

          <div className="space-y-2 text-base sm:text-lg">
            <p>Str. All Ahmeti, Velani,</p>
            <p>10000 Prishaine</p>
            <p>Kosove</p>
            <p className="mt-4">+363 (0) 49 100 200</p>
            <p>info@digipool.com</p>
          </div>
        </div>

        {/* Useful Links */}
        <div className="lg:w-1/5">
        <br /><br /><br /><br />
          <h3 className="font-bold text-pink-500 text-xl mb-6">Useful Links</h3>
          <ul className="space-y-4 text-base sm:text-lg">
            <li><Link href="/About" className="hover:text-pink-500">About Us</Link></li>
            <li>
              <button
                onClick={handleScrollToServices}
                className="hover:text-pink-500 text-left"
              >
                Our Services
              </button>
            </li>
            <li><Link href="/Our-work" className="hover:text-pink-500">Our Works</Link></li>
            <li><Link href="/Contact" className="hover:text-pink-500">Contacts</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="lg:w-1/5">
        <br /><br /><br /><br />
          <h3 className="font-bold text-pink-500 text-xl mb-6">Legal</h3>
          <ul className="space-y-4 text-base sm:text-lg">
            <li><Link href="/imprint" className="hover:text-pink-500">Imprint</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-pink-500">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-pink-500">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-gray-700 gap-6">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <img src="./Logo.svg" alt="Logo" />
          <p className="text-[10px] leading-[12px] mt-2">your digital pool partner</p>
        </div>

        {/* Copyright */}
        <p className="text-center md:text-left text-sm">
          © 2025 Digipool Inc. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <Link href="#" className="group">
            <img 
              src="/assets/ins.svg" 
              alt="Instagram"
              className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
            />
          </Link>
          <Link href="#" className="group">
            <img 
              src="/assets/Fac.svg" 
              alt="Facebook"
              className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
            />
          </Link>
          <Link href="#" className="group">
            <img 
              src="/assets/lin.svg" 
              alt="LinkedIn"
              className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
