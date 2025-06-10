import React from "react";
import heroImg from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section className="w-full h-[88vh] grid grid-cols-2 px-[5rem]">
      {/* left-section */}
      <div className="h-full flex flex-col">
        {/* intro */}
        <div className="pb-[3.8125rem] pt-[2rem]">
          <p
            className="pb-[0.62rem]"
            style={{
              color: "var(--foundation-white-dark-active, #707070)",
              fontFamily: "Lato",
              fontSize: "1.5rem",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
              letterSpacing: "0.045rem",
            }}
          >
            Hi I am
          </p>
          <p
            className="pb-[1.5rem]"
            style={{
              color: "var(--foundation-white-dark-hover, #959595)",
              fontFamily: "Lato",
              fontSize: "1.75rem",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              letterSpacing: "0.0525rem",
            }}
          >
            Mohmood Fazile
          </p>
          <p
            className="pb-[1.06rem]"
            style={{
              fontFamily: "Lato",
              fontSize: "4.375rem",
              fontStyle: "normal",
              fontWeight: "900",
              lineHeight: "normal",
              letterSpacing: "0.13125rem",
              background:
                "linear-gradient(90deg, #984300 0.34%, #FD6F00 42.06%, #CA5900 90.34%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            UI/UX Designer
          </p>
          <div className="flex gap-[1.25rem] text-[#959595] text-[1.75rem] cursor-pointer">
            <div className="rounded-full border-2 border-[#959595] px-[0.5rem]">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="rounded-full border-2 border-[#959595] px-[0.5rem]">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="rounded-full border-2 border-[#959595] px-[0.5rem]">
              <i className="fa-brands fa-dribbble"></i>
            </div>
            <div className="rounded-full border-2 border-[#959595] px-[0.5rem]">
              <i className="fa-brands fa-behance fa-sm"></i>
            </div>
          </div>
        </div>
        {/* buttons */}
        <div className="flex gap-[1.5rem] pb-[5rem]">
          <button
            className="flex justify-center items-center px-[2.5rem] py-[0.75rem] text-[1rem] text-white cursor-pointer"
            style={{
              borderRadius: "0.5rem",
              background:
                "linear-gradient(94deg, #FD6F00 3.1%, #E46400 94.54%)",
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
          <button
            className="flex justify-center items-center px-[2.5rem] py-[0.75rem] text-[1rem] text-white cursor-pointer"
            style={{
              borderRadius: "0.5rem",
              border: "2px solid var(--foundation-white-dark-hover, #959595)",
              textAlign: "justify",
              fontFamily: "Lato",
              fontSize: "1rem",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              letterSpacing: "0.03rem",
            }}
          >
            Download CV
          </button>
        </div>
        {/* experience */}
        <div
          className="text-white flex gap-[1.5rem] max-w-max p-[1.5rem] text-[1.5rem] font-bold"
          style={{
            borderRadius: "0.5rem",
            background: "rgba(255, 255, 255, 0.04)",
            color: "var(--foundation-white-normal-hover, #DFDFDF)",
            textAlign: "justify",
            fontFamily: "Lato",
            fontSize: "1.25rem",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            letterSpacing: "0.0375rem",
          }}
        >
          <div
            className="flex flex-col"
            style={{
              borderRight:
                "1px solid var(--foundation-white-dark-hover, #959595)",
              padding: "0.375rem 1.875rem 0.375rem 0rem",
            }}
          >
            <span className="text-[#FD6F00] pb-[0.75rem]">5+</span>
            <span>Experiences</span>
          </div>
          <div
            className="flex flex-col"
            style={{
              borderRight:
                "1px solid var(--foundation-white-dark-hover, #959595)",
              padding: "0.375rem 1.875rem 0.375rem 0rem",
            }}
          >
            <span className="text-[#FD6F00] pb-[0.75rem]">20+</span>
            <span>Project done</span>
          </div>
          <div
            className="flex flex-col"
            style={{
              padding: "0.375rem 0rem",
            }}
          >
            <span className="text-[#FD6F00] pb-[0.75rem]">80+</span>
            <span>Happy Clients</span>
          </div>
        </div>
      </div>
      {/* right-section */}
      <div className="h-full relative">
        {/* Circle background */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[13rem]"
          style={{
            width: "33rem",
            height: "33rem",
            borderRadius: "38.625rem",
            background: "rgba(255, 255, 255, 0.04)",
            zIndex: 1,
          }}
        />
        {/* Hero image */}
        <img
          src={heroImg}
          alt="hero-image"
          className="w-auto h-[88vh] relative z-10"
          style={{
            position: "absolute",
            right: "8rem",
            bottom: "0",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
