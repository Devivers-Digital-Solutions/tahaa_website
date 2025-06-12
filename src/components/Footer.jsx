// import React from 'react';
// import { FaInstagram, FaLinkedinIn, FaDribbble, FaBehance, FaTelegramPlane } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';

// const Footer = () => {
//   return (
//     <footer className="bg-[#1A1A1A] text-white py-10 px-4 sm:px-8 md:px-16 mt-10">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Logo */}
//         <h1 className="text-orange-500 font-bold text-2xl mb-4">LOGO</h1>

//         {/* Navigation Links */}
//         <ul className="flex flex-wrap justify-center gap-6 text-sm sm:text-base text-gray-300 mb-6">
//           <li className="hover:text-white cursor-pointer">Home</li>
//           <li className="hover:text-white cursor-pointer">Services</li>
//           <li className="hover:text-white cursor-pointer">About me</li>
//           <li className="hover:text-white cursor-pointer">Portfolio</li>
//           <li className="hover:text-white cursor-pointer">Contact me</li>
//         </ul>

//         {/* Social Icons */}
//         <div className="flex justify-center gap-5 text-xl text-gray-400 mb-6">
//           <FaInstagram className="hover:text-white cursor-pointer" />
//           <FaLinkedinIn className="hover:text-white cursor-pointer" />
//           <FaDribbble className="hover:text-white cursor-pointer" />
//           <FaBehance className="hover:text-white cursor-pointer" />
//         </div>

//         {/* Email */}
//         <div className="flex justify-center items-center gap-2 text-gray-300 mb-4 text-sm sm:text-base">
//           <HiOutlineMail />
//           <span>contact@tahaatambe.com</span>
//         </div>

//         {/* Bottom Text */}
//         <hr className="border-gray-700 mb-4 w-3/4 mx-auto" />
//         <p className="text-xs text-gray-500">Designed by Devlvers Digital Solutions</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import {
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-10 px-4 sm:px-8 md:px-16 mt-10 w-full">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <h1 className="text-orange-500 font-bold text-2xl mb-4">LOGO</h1>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-300 mb-6 px-2">
          {['Home', 'Services', 'About me', 'Portfolio', 'Contact me'].map((item, idx) => (
            <li key={idx} className="hover:text-white cursor-pointer whitespace-nowrap">
              {item}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center flex-wrap gap-5 text-xl text-gray-400 mb-6 px-2">
          <FaInstagram className="hover:text-white cursor-pointer" />
          <FaLinkedinIn className="hover:text-white cursor-pointer" />
          <FaDribbble className="hover:text-white cursor-pointer" />
          <FaBehance className="hover:text-white cursor-pointer" />
        </div>

        {/* Email */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-gray-300 mb-4 text-sm sm:text-base px-2">
          <HiOutlineMail />
          <span className="break-all">contact@tahaatambe.com</span>
        </div>

        {/* Bottom Text */}
        <hr className="border-gray-700 mb-4 w-3/4 mx-auto" />
        <p className="text-xs text-gray-500 px-2">Designed by Devlvers Digital Solutions</p>
      </div>
    </footer>
  );
};

export default Footer;
