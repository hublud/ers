"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-5 right-5 z-40 p-2.5 rounded-sm bg-[#0070e0] hover:bg-[#005bb5] text-white shadow-lg transition-all duration-200 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-[#0070e0]"
    >
      <ChevronUp className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
}
