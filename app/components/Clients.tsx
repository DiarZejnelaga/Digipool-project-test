"use client";

import React from "react";
import Image from "next/image";

const clients = [
  { src: "/assets/Frame1.svg", alt: "ipko" },
  { src: "/assets/coca.svg", alt: "Coca Cola" },
  { src: "/assets/redbull.svg", alt: "Red Bull" },
  { src: "/assets/raiffeisen.svg", alt: "Raiffeisen Bank" },
  { src: "/assets/peja.svg", alt: "Peja Beer" },
  { src: "/assets/Rinvest.svg", alt: "Rinvest" },
  { src: "/assets/sellma.svg", alt: "Sellmashop" },
  { src: "/assets/Albi.svg", alt: "AlbiMall" },
  { src: "/assets/neptune.svg", alt: "Neptune" },
  { src: "/assets/auk.svg", alt: "AUK" },
  { src: "/assets/air.svg", alt: "Air" },
  { src: "/assets/IO.svg", alt: "IOLINK" },
  { src: "/assets/devolli.svg", alt: "Devolli" },
  { src: "/assets/wizz.svg", alt: "W!ZZ" },
  { src: "/assets/ceed.svg", alt: "Ceed" },
  { src: "/assets/renault.svg", alt: "Renault" },
  { src: "/assets/Frame1.svg", alt: "ipko" },
  { src: "/assets/coca.svg", alt: "Coca Cola" },
  { src: "/assets/redbull.svg", alt: "Red Bull" },
  { src: "/assets/raiffeisen.svg", alt: "Raiffeisen Bank" },
  { src: "/assets/peja.svg", alt: "Peja Beer" },
  { src: "/assets/Rinvest.svg", alt: "Rinvest" },
  { src: "/assets/sellma.svg", alt: "Sellmashop" },
  { src: "/assets/Albi.svg", alt: "AlbiMall" },
  { src: "/assets/neptune.svg", alt: "Neptune" },
  { src: "/assets/auk.svg", alt: "AUK" },
  { src: "/assets/air.svg", alt: "Air" },
  { src: "/assets/IO.svg", alt: "IOLINK" },
  { src: "/assets/devolli.svg", alt: "Devolli" },
  { src: "/assets/wizz.svg", alt: "W!ZZ" },
  { src: "/assets/ceed.svg", alt: "Ceed" },
  { src: "/assets/renault.svg", alt: "Renault" },
];


export default function Clients() {
  return (
    <section className="bg-black text-white py-30 sm:py-50 px-8 sm:px-16 md:px-24 lg:px-32">


      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
        <div className="flex items-center mb-8">
            <span className="inline-block flex-shrink-0 w-12 h-px bg-pink-500 mr-4"></span>
            <span className="text-pink-500 uppercase tracking-widest font-semibold">
              Our Clients
            </span>
          </div>
          <br />
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight max-w-2xl">
            Trusted by brands to grow, engage, and succeed in the digital world.
          </h2>
          <br />
        </div>

        {/* Adjusted Logo Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-3 sm:gap-4">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group relative h-24 w-full aspect-square"
            >
              <Image
                src={client.src}
                alt={client.alt}
                fill
                className="object-contain object-center p-1"
                sizes="(max-width: 640px) 96px, 128px"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}