"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const CarouselPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: '/images/puspol.png', alt: 'Image 1' },
    { src: '/images/pusdok.png', alt: 'Image 2' },
    { src: '/images/puska.png', alt: 'Image 3' },
  ];

  useEffect(() => {
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const interval = setInterval(handleNext, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div className="relative overflow-hidden mt-20 md:mt-28">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full flex-shrink-0 flex justify-center items-center">
            <div className="w-full h-auto">
              <Image 
                src={image.src} 
                alt={image.alt} 
                layout="responsive" 
                width={1200} 
                height={800} 
                objectFit="cover" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselPage;
