"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoPlayer2() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  
  useEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
        },
      });

      tl.fromTo(
        wrapperRef.current,
        { scale: 0.7, opacity: 0.5, borderRadius: "60px" },
        {
          scale: 1,
          opacity: 1,
          borderRadius: "0px",
          ease: "power2.out",
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    vid.addEventListener("play", onPlay);
    vid.addEventListener("pause", onPause);

    return () => {
      vid.removeEventListener("play", onPlay);
      vid.removeEventListener("pause", onPause);
    };
  }, []);

  
  const handleVideoClick = () => {
    const vid = videoRef.current;
    if (!vid) return;

    if (vid.paused) {
      vid.play();
    } else {
      vid.pause();
    }
  };

  return (
    <div className="flex justify-center items-center py-16">
      <div
        ref={wrapperRef}
        className="relative overflow-hidden w-full max-w-6xl aspect-video transition-all duration-700"
        style={{ transformOrigin: "center center" }}
      >
        <video
          ref={videoRef}
          src="/homepage.mp4"
          loop
          muted
          controls={false} 
          onClick={handleVideoClick}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
          style={{
            cursor: `url(/cursors/${isPlaying ? "Pause.svg" : "Play.svg"}), pointer`,
          }}
        />
      </div>
    </div>
  );
}
