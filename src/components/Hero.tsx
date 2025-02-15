'use client';  // Add this for client-side interactivity

import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="mt-24">
      <div className="relative w-full h-[80vh]">
        <Image
          src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1920&h=1080"
          alt="Professional Cleaning Service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Life's Busy we can help
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Your Trusted Partner in Cleaning
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 