"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react"; // You can use any icon library you prefer

// Update the HamburgerMenuProps interface to accept menuItems as a single ReactNode
interface HamburgerMenuProps {
  isMenuOpen: boolean;
  setisMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuItems: React.ReactNode; // Change to React.ReactNode (not an array)
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isMenuOpen, setisMenuOpen, menuItems }) => {
  return (
    <>
      {/* Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setisMenuOpen(false)} />
      )}

      {/* Slide-in menu */}
      <div className={`fixed top-0 right-0 w-full h-full bg-[#0B0B11] text-white z-50 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6 flex flex-col h-full justify-between">
          {/* Header */}
          <div className="flex justify-between items-center">
            <Link href="/" onClick={() => setisMenuOpen(false)}>
              <img src="/Logo.png" alt="Logo" className="w-28" />
            </Link>
            <button onClick={() => setisMenuOpen(false)} className="text-pink-500 border-2 border-pink-500 rounded-full p-1">
              <X size={18} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col text-lg font-medium mt-10 space-y-6">
            {menuItems}  {/* Render passed menu items */}
          </nav>

         

          {/* Footer */}
          <div className="mt-auto text-center text-xs text-gray-400 space-y-4 pt-10">
            <div className="flex justify-center space-x-6 text-pink-500 text-xl">
              <a href="#"><i className="fab fa-facebook" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
              <a href="#"><i className="fab fa-linkedin" /></a>
            </div>
            <p>© 2025 Digipool Inc. All right reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
