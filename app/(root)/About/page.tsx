import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Bout() {
  return (
    <>
      <Navbar />
      <section className="bg-white text-black mb-12 p-6 p-12">
        <div className="min-h-screen font-semibold max-w-4xl mx-auto">
          <h3 className="text-pink-500 font-bold text-2xl">WHO WE ARE</h3>
          <br /><br />
          <p className="text-left">
            At Digipool, we are a collective of professionals with a deep-rooted
            background in communication and advertising, helping businesses grow
            through their online presence since 2013.
            <br /><br />
            Our journey began at Httpool’s Kosovo office, where we built years of
            expertise in digital marketing. In 2022, we evolved into a standalone
            entity, offering businesses tailored consultancy and implementation services
            for digital transformation, visual branding, online presence, and paid
            advertising management.
            <br /><br />
            With thousands of successful campaigns and hundreds of satisfied clients,
            we have the experience and know-how to transform your business strategy into
            tangible, measurable results.
          </p>

          <br /><br />
          <h3 className="text-pink-500 font-bold text-2xl">METHODOLOGY</h3>

         
          <div className="relative w-fit mx-auto mt-12">
            
            <Image
              src="/Groupdf.png"
              alt="Methodology Graphic"
              width={369}
              height={374}
              className="z-10"
            />

          
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full text-center text-sm font-semibold text-black">
              BUSINESS OBJECTIVES<br />
              <span className="font-normal">Clearly defined KPIs and ROI targets</span>
            </div>

           
            <div className="absolute top-6 left-0 -translate-x-full text-right text-sm font-semibold text-black max-w-[150px]">
              BID MANAGEMENT<br />
              <span className="font-normal">
                Budget optimization and reallocation based on performance and ROI
              </span>
            </div>

            <div className="absolute top-6 right-0 translate-x-full text-left text-sm font-semibold text-black max-w-[150px]">
              TRACKING<br />
              <span className="font-normal">
                Real-time tracking and optimization
              </span>
            </div>

           
            <div className="absolute bottom-6 left-0 -translate-x-full text-right text-sm font-semibold text-black max-w-[150px]">
              CREATIVE PERMUTATION<br />
              <span className="font-normal">
                Creative permutations, continuous A/B testing and automated campaign management
              </span>
            </div>

          
            <div className="absolute bottom-6 right-0 translate-x-full text-left text-sm font-semibold text-black max-w-[150px]">
              TARGETING<br />
              <span className="font-normal">
                Advanced setup and AI powered solution reach users with the highest accuracy
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
