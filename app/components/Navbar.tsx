"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 50;
      const progress = Math.min(scrollY / threshold, 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToServices = () => {
    setisMenuOpen(false);
    if (pathname === "/") {
      const section = document.getElementById("services");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#services");
    }
  };

  const getNavbarStyle = () => ({
    width: `${70 + 19 * (1 - scrollProgress)}%`,
    height: "80px",
    padding: `${1.5 - 0.5 * scrollProgress}rem ${2 - 0.5 * scrollProgress}rem`,
    borderRadius: `${50 * scrollProgress}px`,
    marginTop: `${0.5 * scrollProgress}rem`,
    backgroundColor: scrollProgress > 0
      ? 'rgba(107, 114, 128, 0.5)'
      : 'transparent',
    backdropFilter: 'blur(8px)',
    border: scrollProgress > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none'
  });
  

  const getLogoSize = () => ({
    width: `${152.25 - (152.25 - 46.47) * scrollProgress}px`,
    height: `${24 - (24 - 22.48) * scrollProgress}px`,
    transition: "all 0.5s cubic-bezier(0.33, 1, 0.68, 1)"
  });

  const mobileMenuItems = (
    <>
      <Link href="/About" onClick={() => setisMenuOpen(false)}>
        <span className="hover:text-[#0652FD]">About Us</span>
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
      <Link href="/Contact" onClick={() => setisMenuOpen(false)}>
        <button className="w-full rounded-full border border-[#0652FD] text-white py-2 flex items-center justify-center space-x-2 hover:bg-[#0652FD] hover:text-white transition mt-6">
          <span>Get started</span>
          <span>→</span>
        </button>
      </Link>
    </>
  );

  return (
    <nav>
      <div
      style={getNavbarStyle()}
      className="fixed top-0 left-0 right-0 z-50 mx-auto flex items-center justify-between text-white transition-all duration-500 ease-out w-[87%] box-border"
      
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/">
            <img
              src={scrollProgress > 0.5 ? "/Vector.svg" : "/Logo.svg"}
              alt="Logo"
              style={getLogoSize()}
            />
          </a>
        </div>

        {/* Static mode links */}
        {scrollProgress === 0 && (
          <div className="hidden lg:flex items-center space-x-8 text-base font-semibold mx-auto">
            <Link href="/About">
              <button className="hover:text-[#0652FD] transition-colors duration-300">About Us</button>
            </Link>
            <button onClick={handleScrollToServices} className="hover:text-[#0652FD] transition-colors duration-300">
              Our Services
            </button>
            <Link href="/Our-work">
              <button className="hover:text-[#0652FD] transition-colors duration-300">Our Works</button>
            </Link>
            <Link href="/Contact">
              <button className="hover:text-[#0652FD] transition-colors duration-300">Contacts</button>
            </Link>
          </div>
        )}

        {/* Scrolled mode links */}
        {scrollProgress > 0 && (
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-base font-semibold">
            <Link href="/About">
              <button className="hover:text-[#0652FD] transition-colors duration-300">About Us</button>
            </Link>
            <button onClick={handleScrollToServices} className="hover:text-[#0652FD] transition-colors duration-300">
              Our Services
            </button>
            <Link href="/Our-work">
              <button className="hover:text-[#0652FD] transition-colors duration-300">Our Works</button>
            </Link>
            <Link href="/Contact">
              <button className="hover:text-[#0652FD] transition-colors duration-300">Contacts</button>
            </Link>
          </div>
        )}

        {/* Desktop: Get Started Button */}
<div className="hidden lg:flex items-center space-x-4">
  <Link href="/Contact">
    <button className={`rounded-full border border-[#0652FD] flex items-center justify-center transition-all duration-300 ${
      scrollProgress > 0.5
        ? "w-10 h-10 hover:bg-[#0652FD] hover:text-black"
        : "h-[40px] w-[150px] px-5 hover:bg-[#0652FD] hover:text-white font-bold"
    }`}>
      {scrollProgress > 0.5 ? "→" : "Get started→"}
    </button>
  </Link>
</div>

{/* Mobile: Centered Button + Right Hamburger */}
<div className="flex flex-1 items-center justify-center relative lg:hidden">
  {/* Centered Get Started */}
  <Link href="/Contact">
    <button className={`rounded-full border border-[#0652FD] flex items-center justify-center transition-all duration-300 ${
      scrollProgress > 0.5
        ? "w-10 h-10 hover:bg-[#0652FD] hover:text-black"
        : "h-[40px] w-[150px] px-5 hover:bg-[#0652FD] hover:text-white font-bold"
    }`}>
      {scrollProgress > 0.5 ? "→" : "Get started→"}
    </button>
  </Link>

  {/* Hamburger on the far right */}
  <div className="absolute right-0">
    <button
      onClick={() => setisMenuOpen(!isMenuOpen)}
      className="text-pink-500 focus:outline-none"
      aria-label="Toggle menu"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</div>

      </div>

      <HamburgerMenu isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} menuItems={mobileMenuItems} />
    </nav>
  );
};

export default Navbar;
