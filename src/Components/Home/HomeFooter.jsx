import React from 'react';
import NavBarLogo from "../../assets/ELEVATE-LogoLight2.png";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

function HomeFooter() {
  return (
    <footer className="bg-black/95 text-white flex flex-col justify-between items-center p-6 md:p-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full md:space-x-10 space-y-6 md:space-y-0">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img src={NavBarLogo} alt="Logo" className="w-auto h-20 md:h-40" />
          <p className="text-center text-sm md:text-base">
            &copy; {new Date().getFullYear()} ElevateU. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm flex flex-col items-center md:items-start">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm">1234 Street Name, City, Country</p>
          <p className="text-sm">Email: contact@yourcompany.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-4 mt-6">
        <a href="#" className="text-white hover:text-blue-500">
          <FaFacebookSquare size={30} />
        </a>
        <a href="#" className="text-white hover:text-blue-500">
          <FaTwitterSquare size={30} />
        </a>
        <a href="#" className="text-white hover:text-blue-500">
          <FaInstagramSquare size={30} />
        </a>
        <a href="#" className="text-white hover:text-blue-500">
          <FaLinkedin size={30} />
        </a>
      </div>
    </footer>
  );
}

export default HomeFooter;
