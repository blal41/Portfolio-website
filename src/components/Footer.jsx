import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Babulal. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="mailto:babulalseervi2003@gmail.com"
              className="text-gray-400 hover:text-white"
              aria-label="Email"
            >
              <IoMdMail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/babulal-seervi-7361aa24b/"
              className="text-gray-400 hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/blal41"
              className="text-gray-400 hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://leetcode.com/u/BLSeervi/"
              className="text-gray-400 hover:text-white"
              aria-label="LeetCode"
            >
              <SiLeetcode size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
