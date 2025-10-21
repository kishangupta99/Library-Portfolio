import React from 'react';
import Carousel from '../components/Carousel';
import FAQ from '../components/FAQ';
import { motion } from 'framer-motion';

// 1. Import your video files from the assets folder
import videoTour from '../assets/video1.mp4'; // Replace with your first video file name
import videoReviews from '../assets/video2.mp4'; // Replace with your second video file name

const Home = () => {
  return (
    <div>
      <Carousel />

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-16 bg-neutral-light"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-brand-dark">Take a Tour</h2>
          
          {/* 2. Create a responsive grid for the videos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

            {/* First Video */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-4">Our Peaceful Environment</h3>
              <div className="w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
                <video
                  src={videoTour}
                  controls
                  loop
                  muted
                  autoPlay // The video will start playing automatically but muted
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Second Video */}
            <div className="flex flex-col items-center">
               <h3 className="text-2xl font-semibold mb-4">Student Experiences</h3>
               <div className="w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
                <video
                  src={videoReviews}
                  controls
                  loop
                  muted
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      <FAQ />
    </div>
  );
};

export default Home;