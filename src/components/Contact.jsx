import React from 'react';

const Contact = () => {
  return (
    <div className="bg-[#121212] text-white py-12 px-4 sm:px-8 md:px-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Contact me</h2>
        <p className="text-center text-gray-400 mb-10">
          Cultivating Connections: Reach Out And Connect With Me
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Row 1 */}
          <input
            type="text"
            placeholder="Name"
            className="bg-[#2e2e2e] text-white px-4 py-3 rounded-md w-full outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-[#2e2e2e] text-white px-4 py-3 rounded-md w-full outline-none"
          />

          {/* Row 2 */}
          <input
            type="text"
            placeholder="Phone Number"
            className="bg-[#2e2e2e] text-white px-4 py-3 rounded-md w-full outline-none"
          />
          <select
            className="bg-[#2e2e2e] text-white px-4 py-3 rounded-md w-full outline-none"
          >
            <option>Service Of Interest</option>
            <option>Web Development</option>
            <option>App Design</option>
            <option>Branding</option>
          </select>

          {/* Row 3 */}
          <input
            type="text"
            placeholder="Timeline"
            className="bg-[#2e2e2e] text-white px-4 py-3 rounded-md w-full outline-none"
          />
          <textarea
            placeholder="Project Details..."
            rows={4}
            className="bg-[#2e2e2e] text-white px-4 py-3 rounded-md w-full outline-none"
          ></textarea>
        </form>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <button className="px-8 py-2 border border-gray-400 rounded-md hover:bg-gray-700 transition-all">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
