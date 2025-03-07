import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 px-6 md:px-20 lg:px-36 text-left w-full mt-10 ">
      <div className="flex flex-col md:flex-row items-start px-4 md:px-0 justify-between gap-8 md:gap-20 py-10 border-b border-white/30">
        <div className="flex flex-col md:items-start items-center w-full md:w-1/3 text-center md:text-left">
          <img src={assets.logo_dark} alt="logo" className="w-32" />
          <p className="mt-4 text-sm text-white/80 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eius animi quidem repellat delectus fugit illum iste vel molestiae officia.
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center w-full md:w-1/4">
          <h2 className="font-semibold text-white mb-4">Company</h2>
          <ul className="flex flex-col text-sm text-white/80 space-y-2">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">About us</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact us</a></li>
            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
          <h2 className="font-semibold text-white mb-4 text-center md:text-left">Subscribe to our Newsletter</h2>
          <p className="text-sm text-white/80 text-center md:text-left mb-3">
            Get the latest news, articles, and resources sent to your inbox weekly.
          </p>
          <div className="flex items-center gap-2 w-full max-w-md">
            <input 
              className="border border-gray-500 bg-gray-800 text-gray-300 placeholder-gray-500 outline-none w-full h-10 rounded-full px-4 text-sm" 
              type="email" 
              placeholder="Enter your e-mail" 
            />
            <button className="bg-blue-600 w-28 h-10 text-white rounded-full font-semibold hover:bg-blue-500 transition">Subscribe</button>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-white/80">
        Copyright {currentYear} © Chahat Shah
      </p>
    </footer>
  );
};

export default Footer;
