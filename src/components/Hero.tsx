'use client';  // Add this for client-side interactivity

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles - make sure all required styles are imported
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export const Hero = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&h=1080",
      title: 'Quality Hardware Solutions',
      subtitle: 'Your Trusted Partner in Hardware and Tools',
      ctaText: 'Explore Products',
    },
    {
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1920&h=1080",
      title: 'Professional Tools',
      subtitle: 'For Every Project Need',
      ctaText: 'Shop Now',
    },
  ];

  return (
    <div className="mt-24">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-[80vh] group"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-xl text-left text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200">
                      {slide.subtitle}
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-colors duration-200">
                      {slide.ctaText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 48px !important;
          height: 48px !important;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
          border-radius: 50%;
          opacity: 0;
          transition: all 0.2s ease;
        }

        .swiper:hover .swiper-button-next,
        .swiper:hover .swiper-button-prev {
          opacity: 1;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px !important;
          color: white;
        }
      `}</style>
    </div>
  );
}; 