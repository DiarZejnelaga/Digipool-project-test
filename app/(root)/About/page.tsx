"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Bout() {
  return (
    <>
      <div className="bg-white text-black mx-auto overflow-hidden min-h-screen">
        <Navbar />

        <div className="bg-black w-full h-20"></div>

        <section className="px-4 sm:px-6 lg:px-16 py-12">
          <div className="font-semibold max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <span className="inline-block flex-shrink-0 w-12 h-px bg-pink-500 mr-4"></span>
            <span className="text-pink-500 uppercase tracking-widest font-semibold">
              Who We Are
            </span>
          </div>
            <p className="mt-6 text-left text-base sm:text-lg lg:text-xl font-light leading-relaxed tracking-wide">
              At Digipool, we are a collective of professionals with a deep-rooted
              background in communication and advertising, helping businesses grow
              through their online presence since 2013.
              <br /><br /><br />
              Our journey began at Httpool’s Kosovo office, where we built years of
              expertise in digital marketing. In 2022, we evolved into a standalone
              entity, offering businesses tailored consultancy and implementation services
              for digital transformation, visual branding, online presence, and paid
              advertising management.
              <br /><br /><br />
              With thousands of successful campaigns and hundreds of satisfied clients,
              we have the experience and know-how to transform your business strategy into
              tangible, measurable results.
            </p>

            <h3 className="text-pink-500 font-bold text-2xl sm:text-3xl mt-8 md:mt-16">METHODOLOGY</h3>

            {/* Desktop Methodology */}
            <div className="hidden md:block relative w-fit mx-auto mt-8 md:mt-16">
              <Image
                src="/Group.svg"
                alt="Methodology Graphic"
                width={369}
                height={374}
                className="z-10"
              />

              {/* Floating Texts */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full text-center text-xs sm:text-sm font-semibold text-black">
                BUSINESS OBJECTIVES<br />
                <span className="font-normal">Clearly defined KPIs and ROI targets</span>
              </div>

              <div className="absolute top-6 left-0 -translate-x-full text-right text-xs sm:text-sm font-semibold text-black max-w-[140px] sm:max-w-[160px]">
                BID MANAGEMENT<br />
                <span className="font-normal">
                  Budget optimization and reallocation based on performance and ROI
                </span>
              </div>

              <div className="absolute top-6 right-0 translate-x-full text-left text-xs sm:text-sm font-semibold text-black max-w-[140px] sm:max-w-[160px]">
                TRACKING<br />
                <span className="font-normal">
                  Real-time tracking and optimization
                </span>
              </div>

              <div className="absolute bottom-6 left-0 -translate-x-full text-right text-xs sm:text-sm font-semibold text-black max-w-[140px] sm:max-w-[160px]">
                CREATIVE PERMUTATION<br />
                <span className="font-normal">
                  Creative permutations, continuous A/B testing and automated campaign management
                </span>
              </div>

              <div className="absolute bottom-6 right-0 translate-x-full text-left text-xs sm:text-sm font-semibold text-black max-w-[140px] sm:max-w-[160px]">
                TARGETING<br />
                <span className="font-normal">
                  Advanced setup and AI powered solution reach users with the highest accuracy
                </span>
              </div>
            </div>

            {/* Mobile Methodology */}
            <div className="md:hidden mt-8 space-y-8">
              <div className="text-black">
                <h4 className="font-semibold text-lg">BUSINESS OBJECTIVES</h4>
                <p className="font-normal mt-2 text-base">
                  Clearly defined KPIs and ROI targets
                </p>
              </div>

              <div className="text-black">
                <h4 className="font-semibold text-lg">TRACKING</h4>
                <p className="font-normal mt-2 text-base">
                  Real-time tracking and optimization
                </p>
              </div>

              <div className="text-black">
                <h4 className="font-semibold text-lg">TARGETING</h4>
                <p className="font-normal mt-2 text-base">
                  Advanced setup and AI powered solution reach users with highest accuracy
                </p>
              </div>

              <div className="text-black">
                <h4 className="font-semibold text-lg">CREATIVE PERMUTATION</h4>
                <p className="font-normal mt-2 text-base">
                  Creative permutations, continuous A/B testing and automated campaign management
                </p>
              </div>

              <div className="text-black">
                <h4 className="font-semibold text-lg">BID MANAGEMENT</h4>
                <p className="font-normal mt-2 text-base">
                  Budget optimization and reallocation based on performance and ROI
                </p>
                <Image
                src="/Group.svg"
                alt="Methodology Graphic"
                width={369}
                height={374}
                className="z-10"
              />

              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}