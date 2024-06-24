// carouselPage.tsx
"use client"
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel" // Adjust the import path as necessary
import Image from 'next/image';

const CarouselPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: '/images/puspol.png', alt: 'Image 1' },
    { src: '/images/pusdok.png', alt: 'Image 2' },
    { src: '/images/puska.png', alt: 'Image 3' },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="m-28">
      <Carousel>
        <CarouselContent currentIndex={currentIndex}>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-64">
                <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={handlePrevious} />
        <CarouselNext onClick={handleNext} />
      </Carousel>
    </div>
  );
}

export default CarouselPage;
