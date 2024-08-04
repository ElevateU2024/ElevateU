import React from 'react';
import NavBarLogo from "../../assets/ELEVATE-LogoLight2.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function HomeFooter() {
  return (
    <footer className="bg-black text-white h-[50vh] flex  justify-between items-center p-10">
      <div className="flex flex-col items-center space-y-4">
        <img src={NavBarLogo} alt="Logo" className="w-auto h-40" />
        <p className="text-center text-sm md:text-base">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </div>
      <div className="flex space-x-6">
        <a href="#" className="text-white hover:text-blue-500">
          <FaFacebookSquare size={40}></FaFacebookSquare>
        </a>
        <a href="#" className="text-white hover:text-blue-500">
          <FaSquareXTwitter size={40}></FaSquareXTwitter>
        </a>
        <a href="#" className="text-white hover:text-blue-500">
          <FaInstagramSquare size={40}></FaInstagramSquare>
        </a>
        <a href="#" className="text-white hover:text-blue-500">
          <FaLinkedin size={40}></FaLinkedin>
        </a>
      </div>
    </footer>
  );
}

export default HomeFooter;
