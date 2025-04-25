"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";


const slides = [
  { 
    id: 1, 
    image: "/assets/Hero.png", 
    link: "/First", 
    title: "Tutorial", 
    description: "Personal business, private business, and private business." 
  },
  { 
    id: 2, 
    image: "/assets/Home.png", 
    link: "/Second", 
    title: "Panasonic", 
    description: "Branding for a market leader" 
  },
  { 
    id: 3, 
    image: "/assets/3.png", 
    link: "/Third", 
    title: "Panasonic", 
    description: "Branding for a market leader" 
  },
  { 
    id: 4, 
    image: "/assets/12.png", 
    link: "/Fourth", 
    title: "Panasonic", 
    description: "Branding for a market leader" 
  },
  { 
    id: 5, 
    image: "/assets/10.png", 
    link: "/Fifth", 
    title: "Panasonic", 
    description: "Branding for a market leader" 
  },
];

export default function Work() {
  const sliderRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = sliderRef.current?.scrollLeft || 0;
    document.body.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    isDown = false;
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  };

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:block bg-black text-white px-6 py-16">
        <div className="px-6 md:px-12 pt-12 max-w-screen-xl mx-auto">
          <h3 className="text-pink-500 uppercase text-sm font-semibold tracking-wide mb-4">
            ─── Work with us
          </h3>
          <br /><br />
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-left">
                Why say <span className="font-bold">YES</span> to Digipool?
              </h2>
              <p className="mt-4 text-base text-left max-w-2xl">
                Whatever your challenge, we combine the best of world-class marketing strategy,
                creative and technology for maximum business impact.
              </p>
              <br /><br />
            </div>

            <Link
              href="/case-studies"
              className="text-sm font-semibold underline underline-offset-4 hover:opacity-80 transition whitespace-nowrap"
            >
              See all case studies →
            </Link>
          </div>
        </div>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {slides.map((slide) => (
              <Link 
                href={slide.link}
                key={slide.id}
                className="relative flex-shrink-0 w-[33.33%] max-w-[33.33%] overflow-hidden group"  
              >
                <div className="relative h-[270px]"> {/* Adjust height */}
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full backdrop-blur-md bg-white/30 text-black text-left px-6 py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-base font-bold">{slide.title}</p>
                  <p className="text-xs font-normal">{slide.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="md:hidden bg-black text-white px-6 py-12">
        <h2 className="text-4xl font-bold mb-12">Our work</h2>

        <div className="space-y-12">
          {slides.map((slide) => (
            <div key={slide.id} className="border-b border-white/20 pb-12 last:border-0">
              <Link href={slide.link}>
                <div className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={600}
                    height={400}
                    className="w-full"
                  />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full backdrop-blur-md bg-white/30 text-black text-left px-6 py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-base font-bold">{slide.title}</p>
                    <p className="text-xs font-normal">{slide.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
      </section>
    </>
  );
}
