"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
    { id: 1, image: "/assets/Hero.png" },
    { id: 2, image: "/assets/Home.png" }
];

export default function Work() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); 
        return () => clearInterval(interval); 
    }, []);

    return (
        <section className="bg-black text-white px-6 md:px-16 py-12">
            <p className="text-pink-500 font-semibold mb-4">WORK WITH US</p>
            <h2 className="text-3xl md:text-4xl font-light">
                Why say <span className="font-bold">YES</span> to Digipool?
            </h2>
            <p className="mt-4 text-sm md:text-base max-w-xl">
                Whatever your challenge, we combine the best of world-class marketing strategy,
                creative and technology for maximum business impact.
            </p>
            <div className="mt-6">
                <Link href="/InsideWork">
                <button className="border border-white text-white hover:border-blue-500 hover:text-blue-500 px-6 py-2 rounded transition">
                    See all case Studies→
                </button>
                </Link>
            </div>

            
            <div className="relative mt-10 max-w-full overflow-hidden rounded-xl">
                
                <motion.div
                    className="flex w-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    
                    <div className="w-full relative flex-shrink-0">
                        <Image
                            src={slides[0].image}
                            alt="Slide Image 1"
                            layout="intrinsic" 
                            width={1920}      
                            height={1080}
                            className="object-contain rounded-xl" 
                        />
                    </div>

                 
                    <div className="w-full relative flex-shrink-0">
                        <Image
                            src={slides[1].image}
                            alt="Slide Image 2"
                            layout="intrinsic"
                            width={1920}
                            height={1080}
                            className="object-contain rounded-xl"
                        />
                    </div>
                </motion.div>

               
                <div className="absolute left-4 top-1/2 text-white cursor-pointer" onClick={prevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path d="M11.293 12.293a1 1 0 0 1-1.414 0L7 9.414l-2.879 2.879a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414z" />
                    </svg>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer" onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path d="M4.707 3.707a1 1 0 0 1 1.414 0L9 6.586l2.879-2.879a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
