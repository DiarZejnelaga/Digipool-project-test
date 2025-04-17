"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Pro() {
    return (
        <>
            <Navbar />
            <section className="bg-black text-white p-6 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <br /><br /><br />
                    <h3 className="text-left text-4xl mb-12 border-b border-gray-700 pb-4 text-pink-500">Our Work</h3>

                   
                    <div>
                        <Link href="/First">
                            <div className="relative group overflow-hidden rounded-lg">
                                <Image
                                    src="/assets/Hero.png"
                                    alt="Hero Project"
                                    width={1200}
                                    height={600}
                                    className="w-full"
                                />
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] backdrop-blur-md bg-white/30 text-black text-left px-6 py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-base font-bold">Panasonic</p>
                                    <p className="text-xs font-normal">Branding for a market leader</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                 
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <Link href="/Second">
                            <div className="relative group overflow-hidden rounded-lg">
                                <Image
                                    src="/assets/Home.png"
                                    alt="Home Page"
                                    width={600}
                                    height={400}
                                    className="w-full"
                                />
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] backdrop-blur-md bg-white/30 text-black text-left px-6 py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-base font-bold">Panasonic</p>
                                    <p className="text-xs font-normal">Branding for a market leader</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="/Third">
                            <div className="relative group overflow-hidden rounded-lg">
                                <Image
                                    src="/assets/3.png"
                                    alt="Project 3"
                                    width={600}
                                    height={400}
                                    className="w-full"
                                />
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] backdrop-blur-md bg-white/30 text-black text-left px-6 py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-base font-bold">Panasonic</p>
                                    <p className="text-xs font-normal">Branding for a market leader</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                  
                    <div className="mt-16">
                        <Link href="/Fourth">
                            <div className="relative group overflow-hidden rounded-lg">
                                <Image
                                    src="/assets/12.png"
                                    alt="Project 12"
                                    width={1200}
                                    height={600}
                                    className="w-full"
                                />
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] backdrop-blur-md bg-white/30 text-black text-left px-6 py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-base font-bold">Panasonic</p>
                                    <p className="text-xs font-normal">Branding for a market leader</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <Link href="/Fifth">
                            <div className="relative group overflow-hidden rounded-lg">
                                <Image
                                    src="/assets/10.png"
                                    alt="Project 10"
                                    width={600}
                                    height={400}
                                    className="w-full"
                                />
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] backdrop-blur-md bg-white/30 text-black text-left px-6 py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-base font-bold">Panasonic</p>
                                    <p className="text-xs font-normal">Branding for a market leader</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="/Sixth">
                            <div className="relative group overflow-hidden rounded-lg">
                                <Image
                                    src="/assets/11.png"
                                    alt="Project 11"
                                    width={600}
                                    height={400}
                                    className="w-full"
                                />
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] backdrop-blur-md bg-white/30 text-black text-left px-6 py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-base font-bold">Panasonic</p>
                                    <p className="text-xs font-normal">Branding for a market leader</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
