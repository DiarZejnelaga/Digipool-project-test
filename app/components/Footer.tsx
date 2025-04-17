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
    <div className="bg-black text-white p-10">
      <div className="mb-6">
        <br /><br />
        <h2 className="text-3xl font-bold">Let’s <span className="text-pink-500">talk</span></h2>
        <p className="mt-2">We want to hear about you, your business, and your challenges</p>
      </div>

      <div className="mb-6">
        <p>Str. Ali Ahmeti, Velani,</p>
        <p>10000 Prishtinë</p>
        <p>Kosovë</p>
        <p className="mt-2">+383 (0) 49 100 200</p>
        <p>info@digipool.com</p>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div>
          <h3 className="font-bold text-pink-500">Useful Links</h3>
          <ul className="mt-2 space-y-1">
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

        <div>
          <h3 className="font-bold text-pink-500">Legal</h3>
          <ul className="mt-2 space-y-1">
            <li><Link href="/imprint" className="hover:text-pink-500">Imprint</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-pink-500">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-pink-500">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      
  
      
      <div className="mt-10 flex items-center justify-between w-full">

  <div className="w-25 h-25">
    <img src="/assets/static.png" alt="Left Icon" className="w-full h-full object-contain" />
  </div>


  <p className="text-center flex-1">
    © 2025 Digipool Inc. All rights reserved.
  </p>

  <div className="flex space-x-6">

    <Link
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-6 h-6"
    >
      <img
        src="/assets/inst.png"
        alt="Instagram"
        className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0"
      />
      <img
        src="/assets/inst-pink.png"
        alt="Instagram Pink"
        className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
      />
    </Link>

    <Link
      href="https://www.facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-6 h-6"
    >
      <img
        src="/assets/face.png"
        alt="Facebook"
        className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0"
      />
      <img
        src="/assets/face-pink.png"
        alt="Facebook Pink"
        className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
      />
    </Link>

 
    <Link
      href="https://www.linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-6 h-6"
    >
      <img
        src="/assets/link.png"
        alt="LinkedIn"
        className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0"
      />
      <img
        src="/assets/link-pink.png"
        alt="LinkedIn Pink"
        className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
      />
    </Link>
  </div>
</div>


        
      </div>
    
  );
}
