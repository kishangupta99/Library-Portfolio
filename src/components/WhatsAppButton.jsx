import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  // Replace with the owner's WhatsApp number
  const phoneNumber = '9118806156'; 
  const message = "Hello! I'm interested in Self Study Hall.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp size={30} />
    </motion.a>
  );
};


export default WhatsAppButton;
