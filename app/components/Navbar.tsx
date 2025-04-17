"use client";

import Services from "./Services";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToServices = () => {
    setisMenuOpen(false);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${scrolled
          ? "bg-[#111] rounded-full w-[90%] mx-auto mt-4 px-6 py-3 shadow-md"
          : "bg-black px-6 py-4"
        } flex items-center text-white`}
    >
      
      <div className="flex-shrink-0">
        <a href="/">
          <img
            src={scrolled ? "/Inf.png" : "/Logo.png"}
            alt="Logo"
            width={scrolled ? 32 : 152.25}
            height={scrolled ? 32 : 24}
          />
        </a>
      </div>

     
      <ul className="hidden lg:flex items-center text-sm font-semibold space-x-6 flex-1 justify-center">
        <li>
          <Link href="/About">
            <button className="hover:scale-110 transition-transform duration-300 ease-in-out">
              About Us
            </button>
          </Link>
        </li>
        <li>
          <button onClick={handleScrollToServices} className="hover:scale-110 transition-transform duration-300 ease-in-out">
            Our Services
          </button>
        </li>
        <li>
          <Link href="/Our-work">
            <button className="hover:scale-110 transition-transform duration-300 ease-in-out">
              Our Works
            </button>
          </Link>
        </li>
        <li>
          <Link href="/Contact">
            <button className="hover:scale-110 transition-transform duration-300 ease-in-out">
              Contacts
            </button>
          </Link>
        </li>
      </ul>

    
      <div
        className={`flex items-center ${scrolled ? "lg:absolute lg:right-6" : "lg:static"} ${scrolled ? "" : "mt-2"} ${scrolled ? "lg:ml-auto" : ""} w-full lg:w-auto justify-center lg:justify-end`}
      >
        <div className={`absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none`}>
          <Link href="/Contact">
            <button
              className={`rounded-full border transition-all duration-300 ease-in-out flex items-center justify-center
                ${scrolled
                  ? "w-10 h-10 border-[#0652FD] text-xl hover:bg-[#0652FD] hover:text-black"
                  : "w-[151px] h-[40px] border-[#0652FD] bg-transparent text-white px-4 hover:bg-[#0652FD] hover:text-white hover:scale-105"
                }`}
            >
              {scrolled ? "→" : "Get started→"}
            </button>
          </Link>
        </div>
      </div>

      
      <div className="lg:hidden ml-4 z-[60]">
        <button
          onClick={() => setisMenuOpen(!isMenuOpen)}
          className="flex flex-col justify-between w-6 h-6 focus:outline-none"
        >
          <span
            className={`h-0.5 w-full bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`h-0.5 w-full bg-white transition-opacity duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-0.5 w-full bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setisMenuOpen(false)}
        />
      )}

      
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0B0B11] text-white z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full justify-between">
          {/* Top */}
          <div className="flex justify-between items-center">
            <Link href="/" onClick={() => setisMenuOpen(false)}>
              <img src="/Logo.png" alt="Logo" className="w-28" />
            </Link>
            <button
              onClick={() => setisMenuOpen(false)}
              className="w-6 h-6 text-pink-500 border-2 border-pink-500 rounded-full flex items-center justify-center"
            >
              
            </button>
          </div>

          <div className="flex flex-col space-y-6 text-lg font-medium mt-8">
            <Link href="/About" onClick={() => setisMenuOpen(false)}>
              <span className="underline underline-offset-4 hover:text-[#0652FD]">About Us</span>
            </Link>
            <button onClick={handleScrollToServices} className="text-left hover:text-[#0652FD]">
              Our Services
            </button>
            <Link href="/Our-work" onClick={() => setisMenuOpen(false)}>
              <span className="hover:text-[#0652FD]">Our Works</span>
            </Link>
            <Link href="/Contact" onClick={() => setisMenuOpen(false)}>
              <span className="hover:text-[#0652FD]">Contacts</span>
            </Link>
          </div>

          <div className="mt-8">
            <Link href="/Contact" onClick={() => setisMenuOpen(false)}>
              <button className="w-full rounded-full border border-[#0652FD] text-white py-2 flex items-center justify-center space-x-2 hover:bg-[#0652FD] hover:text-white transition">
                <span>Get started</span>
                <span>→</span>
              </button>
            </Link>
          </div>

          
          <div className="mt-auto text-center text-xs text-gray-400 space-y-4">
            <div className="flex justify-center space-x-6 text-pink-500 text-xl">
              <a href="#"><i className="fab fa-facebook" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
              <a href="#"><i className="fab fa-linkedin" /></a>
            </div>
            <p>© 2025 Digipool Inc. All right reserved.</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
