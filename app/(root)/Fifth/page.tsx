
import React from "react";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
export default function Fifth() {
    return (
        <section className="bg-black min-h-screen font-semibold">
            <div className="flex flex-col items-center text-white px-4 py-8">
                <Navbar/>
                <br /><br />
                <Image
                    src="/assets/10.png"
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
