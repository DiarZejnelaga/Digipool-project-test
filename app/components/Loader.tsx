"use client";

import React, { useEffect, useState } from "react";

const Loader = () => {
  const [isMounted, setIsMounted] = useState(true);
  const [animationPhase, setAnimationPhase] = useState<"enter" | "exit">("enter");

  useEffect(() => {
    const animationSequence = () => {
      // Grow animation duration (1.5s)
      setTimeout(() => {
        setAnimationPhase("exit");
      }, 1500);
      
      // Total time before unmount (3s)
      setTimeout(() => {
        setIsMounted(false);
      }, 3000);
    };

    animationSequence();
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-[9999] isolate bg-black">
      {/* Dark background layer */}
      <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ${
        animationPhase === "enter" ? "opacity-100" : "opacity-90"
      }`} />

      {/* Logo container */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
        animationPhase === "enter" 
          ? "animate-grow" 
          : "animate-slide-up-fade"
      }`}>
        <img
          src="/Logo.svg" // Replace with your logo path
          alt="Loading"
          className="w-40 h-40 origin-center"
        />
      </div>
    </div>
  );
};

export default Loader;