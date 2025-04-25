"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Clients from "../components/Clients";
import Whoweare from "../components/Whoweare";
import Services from "../components/Services";
import Work from "../components/WorkWithUs";
import Footer from "../components/Footer";
import VideoPlayer2 from "../components/Video";
import Loader from "../components/Loader";
export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
    <Loader/>
      <Navbar />
      <main className="bg-black text-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="pt-24 pb-12">
          <br />
  <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative">
    {/* Video and Text Section */}
    <div className="relative mt-[-9px]">
      {/* Video Player */}
      <div className="relative w-full max-w-full aspect-video mx-auto rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://player.vimeo.com/video/1077985661?h=72bce8b399&autoplay=1&loop=1&muted=1&controls=0&background=1"
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="infinity-loop-slow-lines"
        />
      </div>

      {/* Top-Left Text Container */}
      <div className="absolute top-0 left-0 z-10 text-left p-6 md:p-8">
        
        <p className="text-3xl  text-[#F8F8F8] font-light drop-shadow-lg max-w-[530px]">
          This is our first step in what we hope <br /> to be a long-lasting <span className="font-bold">collaboration.</span>
        </p>
      </div>
    </div>

    {/* Subtext under video */}
    <p className="mt-10 text-[#F8F8F8] text-[16px] sm:text-[18px] leading-relaxed tracking-[-0.02em] max-w-[520px] font-light font-Gotham">
      Please feel free to explore who we are, the work we do, and the work we completed.
      Contact us — we’re eagerly waiting to get to know you!
    </p>
  </div>
</section>

<VideoPlayer2/>
        <Clients />
        <Whoweare />
        <Services />
        <Work />
        <Footer />
      </main>
    </>
  );
}



