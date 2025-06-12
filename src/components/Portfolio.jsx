import React, { useState } from 'react';
import img1 from '../assets/Rectangle 21.png';
import img2 from '../assets/Rectangle 22.png';
import img3 from '../assets/Rectangle 26.png';
import img4 from '../assets/Rectangle 21.png';
import img5 from '../assets/Rectangle 22.png';
import img6 from '../assets/Rectangle 26.png';
import img7 from '../assets/Rectangle 21.png';
import img8 from '../assets/Rectangle 22.png';
import img9 from '../assets/Rectangle 26.png';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Website Design', 'App Mobile Design', 'App Desktop', 'Branding'];
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const projects = images.map((img, index) => ({
    title: 'Name Project',
    category: 'Categories',
    img,
  }));

  return (
    <div className="bg-[#121212] text-white min-h-screen px-4 py-10 sm:px-6 lg:px-20 xl:px-28">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">
        Portfolio
      </h1>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-3 sm:gap-4 md:gap-6 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-md text-sm sm:text-base transition-colors duration-200 ${
              activeTab === tab
                ? 'bg-orange-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl p-4 shadow-md"
            style={{ background: "rgba(255, 255, 255, 0.04)" }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg mb-4"
            />
            <div className="flex justify-between items-center mt-2 text-sm sm:text-base">
              <h5 className="font-semibold text-white">{project.title}</h5>
              <p className="text-gray-400">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
