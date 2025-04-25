"use client";

import React from "react";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
export default function Third() {
    return (
        <section className="bg-black min-h-screen font-semibold">
            <div className="bg-black width-[1280px] height-[80px]"> </div>
            <div className="flex flex-col items-center text-white px-4 py-8">
                <Navbar />
                <br /><br />
                <Image
                    src="/assets/3.png"
                    alt="Panasonic Hero Image"
                    width={525}
                    height={348}
                />

                
                <div className="w-full max-w-2xl text-left mt-6">
                    <h3 className="text-pink-500">Panasonic</h3>
                    <h3 className="text-white">Client</h3>
                    <p className="text-2xl text-white">Panasonic</p>
                </div>
            </div>

            <Footer />
        </section>
    );
}
