/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-950 via-gray-900 to-black text-white h-16 px-2 md:px-1 text-center flex flex-row items-center justify-between"> {/* Dark red to black gradient */}
      <p className="font-semibold text-3xl md:text-base">Made by Ayush</p>
      <div className="flex flex-row text-lg md:text-2xl gap-3 md:gap-5">
        <a href={"https://github.com/Ayush110403"} target="_blank" rel="noopener noreferrer" className="hover:text-red-300">
          <FaGithub />
        </a>
        <a href={"https://www.linkedin.com/in/ayush110403/"} target="_blank" rel="noopener noreferrer" className="hover:text-red-300">
          <FaLinkedinIn />
        </a>
        <a href={"https://x.com/PrimeX077?t=wrp3AOyURYLGk3XlcnOwHQ&s=09"} target="_blank" rel="noopener noreferrer" className="hover:text-red-300">
          <FaXTwitter />
        </a>
        <a href={"https://www.instagram.com/_ayush1104_/"} target="_blank" rel="noopener noreferrer" className="hover:text-red-300">
          <FaInstagram />     
        </a>
      </div>
    </footer>
  );
};

export default Footer;
