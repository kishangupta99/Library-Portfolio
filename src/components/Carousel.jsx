import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// 1. Import your image files from the assets folder
import image1 from '../assets/img1.jpg'; // Replace with your first image file name
import image2 from '../assets/2.jpg'; // Replace with your second image file name
import image3 from '../assets/img2.jpg'; // Replace with your third image file name

const images = [
  image1,
  image2,
  image3,
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Auto-scroll every 5 seconds
    // Clear the interval when the component unmounts
    return () => clearInterval(slideInterval);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="relative w-full h-[60vh] max-h-[500px] overflow-hidden">
      {/* AnimatePresence for exit animations on images */}
      <AnimatePresence initial={false}> 
        <motion.img
          key={index} // Key is crucial for AnimatePresence to detect changes
          src={images[index]}
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
          animate={{ opacity: 1, x: 0 }}   // Animate to center
          exit={{ opacity: 0, x: -100 }}    // Exit off-screen to the left
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute top-0 left-0 w-full h-full object-cover" // Ensure image covers container
        />
      </AnimatePresence>
      
      {/* Overlay text */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center text-white p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Focus on Your Success</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            A serene and fully-equipped space designed for dedicated students.
          </p>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white transition z-10" // Added z-10
        aria-label="Previous slide"
      >
        <FiChevronLeft size={24} className="text-neutral-dark" />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white transition z-10" // Added z-10
        aria-label="Next slide"
      >
        <FiChevronRight size={24} className="text-neutral-dark" />
      </button>
    </div>
  );
};

export default Carousel;