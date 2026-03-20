"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SahidTaniLogo from "../app/img/SahidTaniLogo.png";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulasi progress loading
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Hide loading screen setelah selesai
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-50 opacity-50" />
      
      {/* Content */}
      <div className="relative text-center">
        {/* Logo Area */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto relative">
            {/* Animated Ring */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
            
            {/* Logo Image */}
            <div className="relative w-full h-full rounded-full flex items-center justify-center shadow-2xl overflow-hidden bg-white">
              <Image
                src={SahidTaniLogo}
                alt="Sahid Tani Logo"
                width={120}
                height={120}
                className="object-contain p-2"
                priority
              />
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl font-headline font-bold mb-2 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
          Sahid Tani
        </h1>
        <p className="text-gray-500 mb-8">Kebun Bibit Tanaman Unggul</p>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-500">{progress}%</p>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
          <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
          <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </div>
  );
}