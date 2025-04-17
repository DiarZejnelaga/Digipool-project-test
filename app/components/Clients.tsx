"use client";

import React from "react";


const clientLogos = [
  "/assets/Frame1.png",
  "/assets/Frame2.png",
  "/assets/Frame3.png",
  "/assets/Frame4.png",
  "/assets/Frame5.png",
  "/assets/Frame6.png",
  "/assets/Frame7.png",
  "/assets/Frame8.png",
  "/assets/Frame9.png",
  "/assets/Frame10.png",
  "/assets/Frame11.png",
  "/assets/Frame12.png",
  "/assets/Frame13.png",
  "/assets/Frame14.png",
  "/assets/Frame15.png",
  "/assets/Frame16.png",
  "/assets/Frame17.png",
  "/assets/Frame18.png",
  "/assets/Frame19.png",
];

export default function Clients() {
  return (
   
   
   <section className="bg-black text-white py-16 px-6">
      <h3 className="text-center text-lg text-pink-500 uppercase mb-2">
        - Our Clients
      </h3>
      <p className="text-center text-2xl font-light mb-10">
        Trusted by <span className="font-semibold">brands</span> to grow,
        engage, and succeed in the digital world.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {clientLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client logo ${index + 1}`}
            
          />
        ))}
      </div>
    </section>   

  );
}


