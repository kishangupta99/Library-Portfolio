import React from 'react';
import { FaWhatsapp, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const owners = [
    { 
      name: "Kishan Kumar Gupta", 
      links: { 
        whatsapp: '#', 
        // 👇 Replace '#' with your Instagram link here
        instagram: 'https://www.instagram.com/kishangupta8292/', 
        twitter: 'https://x.com/Kishan12345g', 
        linkedin: 'https://www.linkedin.com/in/kishan-kumar-gupta-423793295/' 
      } 
    },
    { 
      name: "Gopi Gupta", 
      links: { 
        whatsapp: '#', 
        instagram: '#', 
        twitter: '#', 
        linkedin: '#' 
      } 
    },
];

const SocialIcon = ({ href, icon: Icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-light transition-colors duration-300">
        <Icon size={24} />
    </a>
);

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white pt-12 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location Section */}
            <div className="md:col-span-1">
                <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.626574994273!2d80.9433993150435!3d26.8515059831535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd09c8cfa0b3%3A0x8613764369528f95!2sHazratganj%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1668586937554!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map of Self Study Hall"
                    ></iframe>
                </div>
                 <p className="mt-4 text-gray-400">
                    Visheshar Ganj, Basantpur <br />
                    Basti, Uttar Pradesh - 272128
                </p>
            </div>

            {/* Owners Socials Section */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {owners.map(owner => (
                    <div key={owner.name}>
                        <h4 className="text-lg font-semibold mb-4">{owner.name}</h4>
                        <div className="flex space-x-4">
                            <SocialIcon href={owner.links.instagram} icon={FaInstagram} />
                            <SocialIcon href={owner.links.twitter} icon={FaTwitter} />
                            <SocialIcon href={owner.links.linkedin} icon={FaLinkedin} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-500">
            <p>© {new Date().getFullYear()} GOPI DIGITAL LIBRARY. All Rights Reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;