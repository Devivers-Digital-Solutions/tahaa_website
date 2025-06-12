// import React from "react";
// import { FaFigma, FaAdobe, FaBehance } from "react-icons/fa";
// import { SiAdobephotoshop, SiAdobexd, SiAdobeillustrator, SiAdobepremierepro } from "react-icons/si";
// import aboutImg from "../assets/hero-image.png"; // replace with your actual image path

// const About = () => {
//   return (
//     <div className="bg-[#121212] text-white py-16 px-4 sm:px-8 md:px-16">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         {/* Left: Image */}
//         <div className="flex justify-center">
//           <img
//             src={aboutImg}
//             alt="about"
//             className="w-[300px] sm:w-[350px] md:w-[400px] object-contain"
//           />
//         </div>

//         {/* Right: Content */}
//         <div>
//           <h2 className="text-3xl sm:text-4xl font-bold mb-2">About Me</h2>
//           <p className="text-gray-400 mb-6">
//             User Interface And User Experience And Also Video Editing
//           </p>

//           <p className="text-sm sm:text-base leading-6 text-gray-300 mb-6">
//             A software engineer, the modern-day architect of digital realms,
//             navigates the ethereal landscapes of code, sculpting intangible
//             structures that shape our technological world. With fingers poised
//             over keyboards like virtuoso pianists, they compose symphonies of
//             logic, their minds a labyrinth of algorithms and solutions.
//             Their canvas is a screen, a vast expanse where lines of code dance
//             in intricate patterns, weaving the fabric of programs and applications.
//             Each keystroke is a brushstroke, crafting intricate architectures and
//             breathing life into innovative designs.
//             In this digital atelier, they don the mantle of problem solvers,
//             confronting bugs and <span className="text-red-400">glitches</span> like valiant knights in an
//             ever-evolving quest for perfection. Debugging becomes a noble pursuit,
//             unraveling the mysteries hidden within the tangled webs of code.
//             In this digital atelier.
//           </p>

//           <a
//             href="/path-to-cv.pdf"
//             className="inline-block bg-orange-500 hover:bg-orange-600 transition-colors text-white px-5 py-2 rounded-md text-sm font-medium"
//             download
//           >
//             📄 Download CV
//           </a>
//         </div>
//       </div>

//       {/* Skills Section */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-16 text-center">
//         <Skill icon={<FaFigma size={32} />} label="Figma" percent={100} />
//         <Skill icon={<SiAdobexd size={32} />} label="Adobe XD" percent={100} />
//         <Skill icon={<SiAdobephotoshop size={32} />} label="Adobe Photoshop" percent={85} />
//         <Skill icon={<SiAdobeillustrator size={32} />} label="Adobe Illustrator" percent={60} />
//         <Skill icon={<SiAdobepremierepro size={32} />} label="Adobe Premiere" percent={70} />
//       </div>
//     </div>
//   );
// };

// // Skill Subcomponent
// const Skill = ({ icon, label, percent }) => {
//   return (
//     <div className="flex flex-col items-center">
//       <div className="text-yellow-400 mb-2">{icon}</div>
//       <p className="text-lg font-semibold text-white">{percent}%</p>
//       <p className="text-sm text-gray-400">{label}</p>
//     </div>
//   );
// };

// export default About;


import React from "react";
import { FaFigma, FaBehance } from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiAdobeillustrator,
  SiAdobepremierepro
} from "react-icons/si";
import aboutImg from "../assets/hero-image.png"; // make sure this image file exists

const About = () => {
  return (
    <div className="bg-[#121212] text-white py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="about"
            className="w-[300px] sm:w-[350px] md:w-[400px] object-contain"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">About Me</h2>
          <p className="text-gray-400 mb-6">
            User Interface And User Experience And Also Video Editing
          </p>

          <p className="text-sm sm:text-base leading-6 text-gray-300 mb-6">
            A software engineer, the modern-day architect of digital realms,
            navigates the ethereal landscapes of code, sculpting intangible
            structures that shape our technological world. With fingers poised
            over keyboards like virtuoso pianists, they compose symphonies of
            logic, their minds a labyrinth of algorithms and solutions.
            Their canvas is a screen, a vast expanse where lines of code dance
            in intricate patterns, weaving the fabric of programs and applications.
            Each keystroke is a brushstroke, crafting intricate architectures and
            breathing life into innovative designs.
            In this digital atelier, they don the mantle of problem solvers,
            confronting bugs and <span className="text-red-400">glitches</span> like valiant knights in an
            ever-evolving quest for perfection. Debugging becomes a noble pursuit,
            unraveling the mysteries hidden within the tangled webs of code.
          </p>

          <a
            href="/path-to-cv.pdf"
            className="inline-block bg-orange-500 hover:bg-orange-600 transition-colors text-white px-5 py-2 rounded-md text-sm font-medium"
            download
          >
            📄 Download CV
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-16 text-center">
        <Skill icon={<FaFigma size={32} />} label="Figma" percent={100} />
        <Skill icon={<SiAdobexd size={32} />} label="Adobe XD" percent={100} />
        <Skill icon={<SiAdobephotoshop size={32} />} label="Adobe Photoshop" percent={85} />
        <Skill icon={<SiAdobeillustrator size={32} />} label="Adobe Illustrator" percent={60} />
        <Skill icon={<SiAdobepremierepro size={32} />} label="Adobe Premiere" percent={70} />
      </div>
    </div>
  );
};

// Skill Subcomponent
const Skill = ({ icon, label, percent }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-yellow-400 mb-2">{icon}</div>
      <p className="text-lg font-semibold text-white">{percent}%</p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
};

export default About;
