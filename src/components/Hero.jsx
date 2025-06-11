import React from "react";
import heroImg from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section className="w-full h-[88vh] grid grid-cols-1 lg:grid-cols-2 gap-y-[8rem] lg:px-[5rem]">
      {/* left-section */}
      <div className="h-full flex flex-col items-center lg:items-start">
        {/* intro */}
        <div className="pb-[3.8125rem] pt-[2rem] text-center lg:text-left">
          <p
            className="pb-[0.62rem] text-[1rem] lg:text-[1.5rem]"
            style={{
              color: "var(--foundation-white-dark-active, #707070)",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
              letterSpacing: "0.045rem",
            }}
          >
            Hi I am
          </p>
          <p
            className="pb-[1.25rem] lg:pb-[1.5rem] text-[1.25rem] lg:text-[1.75rem]"
            style={{
              color: "var(--foundation-white-dark-hover, #959595)",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              letterSpacing: "0.0525rem",
            }}
          >
            Mohmood Fazile
          </p>
          <p
            className="pb-[1.5rem] lg:pb-[1.06rem] text-[3.125rem] lg:text-[4.375rem]"
            style={{
              fontFamily: "Lato",
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
          <div className="flex justify-center lg:justify-start gap-[1.25rem] text-[#959595] text-[1.5rem] lg:text-[1.75rem] cursor-pointer">
            <div className="rounded-full border-2 border-[#959595] px-[0.4rem] lg:px-[0.5rem]">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="rounded-full border-2 border-[#959595] px-[0.4rem] lg:px-[0.5rem]">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="rounded-full border-2 border-[#959595] px-[0.4rem] lg:px-[0.5rem]">
              <i className="fa-brands fa-dribbble"></i>
            </div>
            <div className="rounded-full border-2 border-[#959595] px-[0.4rem] lg:px-[0.5rem]">
              <i className="fa-brands fa-behance fa-sm"></i>
            </div>
          </div>
        </div>
        {/* buttons */}
        <div className="flex justify-center lg:justify-start gap-[1.5rem] pb-[4rem] lg:pb-[5rem]">
          <button
            className="flex justify-center items-center px-[1.5rem] py-[0.5rem] lg:px-[2.5rem] lg:py-[0.75rem] text-[1rem] text-white cursor-pointer"
            style={{
              borderRadius: "0.5rem",
              background:
                "linear-gradient(94deg, #FD6F00 3.1%, #E46400 94.54%)",
              textAlign: "justify",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              letterSpacing: "0.03rem",
            }}
          >
            Hire me
          </button>
          <button
            className="flex justify-center items-center px-[1.5rem] py-[0.5rem] lg:px-[2.5rem] lg:py-[0.75rem] text-[0.875rem] lg:text-[1rem] text-white cursor-pointer"
            style={{
              borderRadius: "0.5rem",
              border: "2px solid var(--foundation-white-dark-hover, #959595)",
              textAlign: "justify",
              fontFamily: "Lato",
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
          className="text-white flex gap-[1.5rem] max-w-max p-[1rem] lg:p-[1.5rem] font-bold mx-[2rem] lg:mx-0"
          style={{
            borderRadius: "0.5rem",
            background: "rgba(255, 255, 255, 0.04)",
            color: "var(--foundation-white-normal-hover, #DFDFDF)",
            textAlign: "justify",
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            letterSpacing: "0.0375rem",
          }}
        >
          <div
            className="flex flex-col py-[0.25rem] lg:py-[0.375rem] pr-[1.25rem] lg:pr-[1.875rem]"
            style={{
              borderRight:
                "1px solid var(--foundation-white-dark-hover, #959595)",
            }}
          >
            <span className="text-[#FD6F00] pb-[0.75rem] text-[1.25rem]">
              5+
            </span>
            <span className="text-[1rem] lg:text-[1.25rem]">Experiences</span>
          </div>
          <div
            className="flex flex-col py-[0.25rem] lg:py-[0.375rem] pr-[1.25rem] lg:pr-[1.875rem]"
            style={{
              borderRight:
                "1px solid var(--foundation-white-dark-hover, #959595)",
            }}
          >
            <span className="text-[#FD6F00] pb-[0.75rem] text-[1.25rem]">
              20+
            </span>
            <span className="text-[1rem] lg:text-[1.25rem]">Project done</span>
          </div>
          <div className="flex flex-col py-[0.375rem]">
            <span className="text-[#FD6F00] pb-[0.75rem] text-[1.25rem]">
              80+
            </span>
            <span className="text-[1rem] lg:text-[1.25rem]">Happy Clients</span>
          </div>
        </div>
      </div>
      {/* right-section */}
      <div className="h-full flex justify-center items-baseline-last lg:pl-[5rem] px-[2rem]">
        {/* Circle background */}
        <div
          className="relative w-[23rem] lg:w-[34.5rem] h-[23rem] lg:h-[34.5rem]"
          style={{
            borderRadius: "38.625rem",
            background: "rgba(255, 255, 255, 0.04)",
            zIndex: 1,
          }}
        >
          <img
            src={heroImg}
            alt="hero-image"
            className="w-auto h-[50vh] lg:h-[88vh] absolute z-10 left-1/2 transform -translate-x-1/2"
            style={{
              position: "absolute",
              right: "8rem",
              bottom: "0",
            }}
          />
        </div>
        {/* Hero image */}
      </div>
    </section>
  );
};

export default Hero;
