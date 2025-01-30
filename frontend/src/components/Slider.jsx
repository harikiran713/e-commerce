import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const ImageSlider = () => {
  const LargeSlides = [
    {
      url: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FbannerFile-1736145953866.jpg%3Fv%3D1736145958&w=1920&q=75",
    },
    {
      url: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FDENIM.jpg%3Fv%3D1737441940&w=1920&q=75",
    },
    {
      url: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FValentines_-_DESK_NEW.jpg%3Fv%3D1738065875&w=1920&q=75",
    },
  ];

  const SmallSlider = [
    {
      url: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FDENIM_MOB_1.jpg%3Fv%3D1737441940&w=640&q=75",
    },
    {
      url: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FHp_banners_-_Modern_Workwear_-_MOB.jpg%3Fv%3D1736854377&w=640&q=75",
    },
    {
      url: "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Ffiles%2FValentines_-MOB_NEW.jpg%3Fv%3D1738065875&w=640&q=75",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState(LargeSlides);

  // Detect screen size and set the correct image array
  useEffect(() => {
    const updateImages = () => {
      setImages(window.innerWidth < 768 ? SmallSlider : LargeSlides);
    };

    updateImages(); // Call initially
    window.addEventListener("resize", updateImages);

    return () => window.removeEventListener("resize", updateImages);
  }, []);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-96 sm:h-112 md:h-144 lg:w-[70vw] lg:h-[65vh] overflow-hidden rounded-lg mx-auto">
      <AnimatePresence>
        <motion.img
          key={currentImage}
          src={images[currentImage].url}
          alt={`Slide ${currentImage}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Left arrow button */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-4 rounded-full"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>

      {/* Right arrow button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-4 rounded-full"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ImageSlider;
