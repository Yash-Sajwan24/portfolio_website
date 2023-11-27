import React from "react";
import { animateSection } from "../utils/animateSection";

function Contact() {
  return (
    <section
      id="contact"
      className="mb-12 py-[80px] sm:py-[100px] max-w-[600px]  text-white/25 flex flex-col justify-center items-center   mx-auto font-sfMonoRegular overflow-x-hidden"
    >
      <div className="w-fit flex flex-row  mt-[10px] mb-4 ">
        <div className="text-theme-green flex items-center text-[16px] ">
          06. What's Next?
        </div>
      </div>
      <h1 className="font-calibreSemiBold text-[40px] sm:text-[45px] md:text-[50px] lg:text-[60px] text-theme-lightest-slate">
        Get In Touch
      </h1>
      <div className="flex flex-col md:flex-row align-middle min-h-full text-[20px] font-calibreRegular text-theme-gray-deep font-medium ">
        <div className="">
          <p className="mb-4 text-center text-[18px]">
            I am actively looking for Internship opportunities in Software/Web
            Developement. If you are looking to hire or just want to say Hi, my
            inbox is always open and happy to hear from you.I always get an
            acknowledgment for my side.
          </p>
        </div>
      </div>

      <h1 className="font-calibreSemiBold text-[10px] sm:text-[15px] md:text-[20px] lg:text-[30px] text-theme-lightest-slate">
              yashsajwan12345@gmail.com
            </h1>
      <div className="w-fit mt-9 border border-theme-green hover:bg-theme-green/10 cursor-pointer rounded flex  items-center text-theme-green">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/yash-sajwan-80902b17b/"
          className=" px-[30px] py-[18px] text-[14px]"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}

function animatedSection() {
  return animateSection(Contact);
}

export default animatedSection;
