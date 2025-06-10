import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavBtn = ({ name }) => {
    return (
      <button className="transition-colors duration-200 hover:text-[#FD6F00]">
        {name}
      </button>
    );
  };

  return (
    <nav className="w-full h-[12vh] text-white flex justify-between items-center pb-[0.5rem] px-4 md:px-[5rem]">
      {/* Hamburger Menu - Mobile Only */}
      <button
        className="lg:hidden text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>

      {/* Logo */}
      <div
        className="text-2xl font-bold"
        style={{
          fontFamily: "K2D",
          fontSize: "1.875rem",
          fontWeight: "700",
          lineHeight: "normal",
          letterSpacing: "0.05625rem",
          textTransform: "uppercase",
          background: "linear-gradient(90deg, #FA6E00 0%, #E60026 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "justify",
        }}
      >
        LOGO
      </div>

      {/* Desktop Navigation */}
      <div
        className="hidden lg:flex justify-center items-center gap-x-[3.75rem]"
        style={{
          color: "var(--foundation-white-dark-hover, #959595)",
          textAlign: "justify",
          fontFamily: "Lato",
          fontSize: "1.25rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
          letterSpacing: "0.0375rem",
        }}
      >
        <NavBtn name="Home" />
        <NavBtn name="Services" />
        <NavBtn name="About me" />
        <NavBtn name="Portfolio" />
        <NavBtn name="Contact me" />
      </div>

      {/* Hire Me Button */}
      <div>
        <button
          className="flex justify-center items-center px-[2.5rem] py-[0.75rem] text-[1rem] text-white"
          style={{
            borderRadius: "0.5rem",
            background: "linear-gradient(94deg, #FD6F00 3.1%, #E46400 94.54%)",
            textAlign: "justify",
            fontFamily: "Lato",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            letterSpacing: "0.03rem",
          }}
        >
          Hire me
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-[12vh] left-0 right-0 bg-[#1A1A1A] border-t border-[#2A2A2A] py-4 z-50">
          <div
            className="flex flex-col items-center gap-y-4"
            style={{
              color: "var(--foundation-white-dark-hover, #959595)",
              fontFamily: "Lato",
              fontSize: "1.25rem",
              fontWeight: "700",
              letterSpacing: "0.0375rem",
            }}
          >
            <NavBtn name="Home" />
            <NavBtn name="Services" />
            <NavBtn name="About me" />
            <NavBtn name="Portfolio" />
            <NavBtn name="Contact me" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
