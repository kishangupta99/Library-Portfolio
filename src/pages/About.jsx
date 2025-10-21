import React from 'react';
import { motion } from 'framer-motion';
import { FaWifi, FaRegSnowflake, FaUserLock, FaPlug, FaBookOpen } from 'react-icons/fa';
import { RiRestTimeLine } from 'react-icons/ri';

// 1. Import your local images from the assets folder
import hallImage1 from '../assets/img1.jpg'; // Replace with your image file name
import hallImage2 from '../assets/img2.jpg'; // Replace with your image file name
import hallImage3 from '../assets/3.jpg'; // Replace with your image file name
import hallImage4 from '../assets/img4.jpg'; // Replace with your image file name
import hallImage5 from '../assets/img5.jpg'; // Replace with your image file name
import hallImage6 from '../assets/img6.jpg'; // Replace with your image file name

const facilities = [
  { icon: <RiRestTimeLine size={40} />, title: "Peaceful Environment" },
  { icon: <FaRegSnowflake size={40} />, title: "AC Rooms" },
  { icon: <FaWifi size={40} />, title: "High-speed Wi-Fi" },
  { icon: <FaUserLock size={40} />, title: "Separate Seating" },
  { icon: <FaPlug size={40} />, title: "Power Backup" },
  { icon: <FaBookOpen size={40} />, title: "Library Access" },
];

// 2. Create an array with the imported images
const galleryImages = [
    { src: hallImage1, alt: 'View of the main study hall' },
    { src: hallImage2, alt: 'Comfortable individual seating arrangements' },
    { src: hallImage3, alt: 'Bright and modern library interior' },
    { src: hallImage4, alt: 'Bright and modern library interior' },
    { src: hallImage5, alt: 'Bright and modern library interior' },
    { src: hallImage6, alt: 'Bright and modern library interior' },
];

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Our Mission</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            To provide a tranquil, motivating, and fully-equipped environment where students can achieve their academic goals without distractions. We believe in fostering a community of focused learners.
          </p>
        </motion.div>
        
        {/* Facilities Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-brand-dark">Our Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-neutral-light rounded-lg shadow-md"
              >
                <div className="text-brand-light mb-4">{facility.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{facility.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-brand-dark">Glimpses of Our Hall</h2>
          {/* 3. Map over the new galleryImages array */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover"/>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;