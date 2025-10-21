import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const owners = [
  {
    name: "Kishan Kumar Gupta",
    links: { instagram: 'https://www.instagram.com/kishangupta8292/', 
        twitter: 'https://x.com/Kishan12345g', 
        linkedin: 'https://www.linkedin.com/in/kishan-kumar-gupta-423793295/'  }
  },
  {
    name: "Gopi Gupta",
    links: { whatsapp: '#', instagram: '#', twitter: '#', linkedin: '#' }
  },
];

const SocialIcon = ({ href, icon: Icon }) => (
  <motion.a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-dark" whileHover={{ y: -2 }}>
    <Icon size={28} />
  </motion.a>
);

const Contact = () => {
  return (
    <div className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">Get In Touch</h1>
          <p className="text-lg text-gray-600 mt-2">We're here to help you succeed. Contact us anytime!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form & Owners */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-brand-dark">Send us a Message</h2>
              <form>
                <div className="mb-4">
                  <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-light" />
                </div>
                <div className="mb-4">
                  <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-light" />
                </div>
                <div className="mb-4">
                  <input type="tel" placeholder="Your Phone" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-light" />
                </div>
                <div className="mb-6">
                  <textarea placeholder="Your Message" rows="5" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-light"></textarea>
                </div>
                <motion.button type="submit" className="w-full bg-brand-dark text-white font-bold py-3 px-6 rounded-md" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Send Message
                </motion.button>
              </form>
            </div>
            <div className="mt-8 bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-brand-dark">Meet the Owners</h3>
              <div className="space-y-6">
                {owners.map(owner => (
                  <div key={owner.name}>
                    <h4 className="font-semibold text-lg">{owner.name}</h4>
                    <div className="flex space-x-5 mt-2">
                      <SocialIcon href={owner.links.instagram} icon={FaInstagram} />
                      <SocialIcon href={owner.links.twitter} icon={FaTwitter} />
                      <SocialIcon href={owner.links.linkedin} icon={FaLinkedin} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map and Address */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="bg-white p-8 rounded-lg shadow-xl h-full">
              <h2 className="text-2xl font-bold mb-6 text-brand-dark">Visit Us</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.626574994273!2d80.9433993150435!3d26.8515059831535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd09c8cfa0b3%3A0x8613764369528f95!2sHazratganj%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1668586937554!5m2!1sen!2sin"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map">
                </iframe>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start"><FaMapMarkerAlt className="mt-1 mr-3 text-brand-dark" size={20} /><span>Basantpur Dubaulia,<br />Basti, Uttar Pradesh - 272128</span></p>
                <p className="flex items-center"><FaPhone className="mr-3 text-brand-dark" /><span>+91 8318627869</span></p>
                <p className="flex items-center"><FaEnvelope className="mr-3 text-brand-dark" /><span>acpkishankumar@gmail.com</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;