"use client";
import Image from "next/image";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white text-black px-4 sm:px-6 py-12 sm:py-28">
      <div className="max-w-[1280px] mx-auto">
        {/* Desktop Layout (unchanged) */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text & Button */}
          <div className="pl-12">
            <h3 className="font-semibold mb-6 text-lg">
              ──── WHO WE ARE
            </h3><br />
            <p className="text-lg text-gray-800 font-light leading-loose tracking-wide mb-4">
              At Digipool, we are a collective of professionals with a deep-rooted
              background in communication and advertising, helping businesses grow
              through their online presence since 2013.
            </p><br />
            <p className="text-lg text-gray-800 font-light leading-loose tracking-wide">
              Our journey began at Httpool&apos;s Kosovo office, where we built years of
              expertise in digital marketing. In 2022...
            </p><br />
            <div className="mt-8">
              <Link href="/About">
                <button className="flex items-center justify-center w-[200px] h-[50px] rounded-full border-2 border-[#0652FD] px-6 text-[#0652FD] bg-white font-bold hover:bg-[#0652FD] hover:text-white transition-all duration-300">
                  Learn More... →
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center">
            <Image
              src="/Group.svg"
              alt="Digipool Team"
              width={600}
              height={500}
              className="w-full max-w-[500px] h-auto"
            />
          </div>
        </div>

        {/* Mobile Layout (updated) */}
        <div className="md:hidden flex flex-col gap-8 text-center">
          {/* Text Content - Centered */}
          <div className="order-1">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              WHO WE ARE
            </h3>
            <br />
            <p className="text-base text-gray-600 leading-relaxed tracking-wide mb-6 mx-auto max-w-[90%]">
              At Digipool, we are a collective of professionals with a deep-rooted
              background in communication and advertising, helping businesses grow
              through their online presence since 2013.
            </p>
            <br />
            {/* Centered Button with Blue Border */}
            <div className="flex justify-center">
              <Link href="/About">
                <button className="border-2 border-[#0652FD] rounded-full px-6 py-2 text-[#0652FD] font-medium hover:bg-[#0652FD] hover:text-white transition-all duration-300">
                  Learn more
                </button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-2 flex justify-center">
            <Image
              src="/Group.svg"
              alt="Digipool Team"
              width={400}
              height={300}
              className="w-full max-w-[300px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}