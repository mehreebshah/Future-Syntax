import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-wrap justify-between items-center">
          {/* Branding and Copyright */}
          <div className="w-full sm:w-auto text-center sm:text-left mb-6 sm:mb-0">
            <h1 className="text-xl font-semibold">Future Syntax</h1>
            <p className="text-sm text-gray-400 mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full sm:w-auto flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
            <a href="/" className="hover:text-indigo-400 transition">
              Home
            </a>
            <a href="/About" className="hover:text-indigo-400 transition">
              About
            </a>
            <a href="/Contact" className="hover:text-indigo-400 transition">
              Contact
            </a>
            <a
              href="/privacy-policy"
              className="hover:text-indigo-400 transition"
            >
              Privacy Policy
            </a>
          </div>

          {/* Social Links */}
          <div className="w-full sm:w-auto text-center sm:text-right mt-6 sm:mt-0">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-indigo-400 transition"
            >
              Twitter
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-sm hover:text-indigo-400 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-700 pt-6">
          <p className="text-center text-gray-500 text-sm">
            Designed with ❤️ by Future Syntax Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
