"use client";

import React, { useRef, useEffect, useState } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

interface ExperienceProps {
  videoUrl?: string;
  posterUrl?: string;
}

export default function Experience({
  videoUrl = "/videos/hero-background.mp4#t=4,20",
  posterUrl = "/uploads/2026/06/IMG_20260623_153038-scaled.jpg",
}: ExperienceProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Autoplay muted as required by modern browsers
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, [videoUrl]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: Heading, Bar, and Text Copy */}
          <div className="flex flex-col justify-center">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Our Experience
            </h2>

            {/* Thick Dark Underline Bar matching screenshot */}
            <div className="w-20 sm:w-24 h-1 bg-slate-900 mt-3 sm:mt-4 mb-6 sm:mb-8 rounded-full" />

            {/* Content Paragraphs */}
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-xl">
              <p>
                Our portfolio spans projects of all sizes from several thousand square feet to{" "}
                <strong className="font-bold text-slate-900">well over 300,000 square feet.</strong>{" "}
                We bring deep expertise across diverse sectors, including:
              </p>
              <p>
                No matter the complexity, we deliver solutions tailored to each client&apos;s vision and goals.
              </p>
            </div>
          </div>

          {/* Right Column: Video Player matching reference site */}
          <div className="w-full">
            <div className="relative w-full aspect-video bg-black rounded-lg sm:rounded-xl overflow-hidden shadow-xl border border-slate-200/50 group">
              <video
                ref={videoRef}
                autoPlay
                controls
                muted
                loop
                playsInline
                poster={posterUrl}
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onVolumeChange={() => {
                  if (videoRef.current) {
                    setIsMuted(videoRef.current.muted || videoRef.current.volume === 0);
                  }
                }}
              >
                <source src={videoUrl} type="video/mp4" />
                <source
                  src="https://res.cloudinary.com/datbno9up/video/upload/v1784654815/Nic_at_Ardmore_07172026_1_z3csef.mp4#t=4,20"
                  type="video/mp4"
                />
              </video>

              {/* Quick Audio Mute / Unmute Overlay Button */}
              <button
                type="button"
                onClick={toggleMute}
                className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-all opacity-80 group-hover:opacity-100 cursor-pointer shadow-md"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                title={isMuted ? "Unmute audio" : "Mute audio"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-white" />
                ) : (
                  <Volume2 className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
