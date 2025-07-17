import React from 'react';
import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // For the new "X" icon

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Text */}
        <p className="text-lg font-semibold mb-4 md:mb-0 mr-auto">
          &copy; {new Date().getFullYear()} Zenith Valuation. All rights reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/company/zenith-valuation/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/zenithval"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition"
          >
            <FaFacebookSquare className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/zvaluation"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition"
          >
            <FaXTwitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
