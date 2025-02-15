'use client';

import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

interface VideoReel {
  id: string;
  title: string;
  url: string;
}

const videoReels: VideoReel[] = [
  {
    id: '8HYZ8t9GO2Q',
    title: 'Deep Cleaning Service',
    url: 'https://youtube.com/shorts/8HYZ8t9GO2Q'
  },
  {
    id: 'mpy8EqHFBG0',
    title: 'Kitchen Cleaning',
    url: 'https://youtube.com/shorts/mpy8EqHFBG0'
  },
  {
    id: 'hR9GeV5cRbU',
    title: 'Professional Cleaning',
    url: 'https://youtube.com/shorts/hR9GeV5cRbU'
  }
];

export const VideoReels = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Cleaning Services in Action
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {videoReels.map((reel) => (
            <div key={reel.id}>
              <div className="aspect-[9/16] w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${reel.id}`}
                  title={reel.title}
                  className="w-full h-full rounded-lg shadow-md"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                {reel.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 