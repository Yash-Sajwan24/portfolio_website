import React from "react";
import ProfilePic from "../assets/passport.jpg";
import { animateSection } from "../utils/animateSection";

function About() {
  return (
    <section
      id="about"
      className="py-[30px] sm:pt-[30px] sm:pb-[100px] max-w-[900px]  text-white/25 flex flex-col justify-center mx-auto font-sfMonoRegular overflow-x-hidden"
    >
      <div className="about-heading w-fit flex flex-row  mt-[10px] mb-[40px] ">
        <div className="text-theme-green flex items-center text-[15px] sm:text-[20px]">
          01.{" "}
        </div>
        <h1 className="text-theme-gray-light min-w-fit ml-[10px] text-[26px] sm:text-[32px]  flex justify-center items-center font-calibreSemiBold fontFix">
          About Me{" "}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row align-middle min-h-full text-[20px] font-calibreRegular text-theme-gray-deep font-medium ">
        <div className="">
          <p className="mb-4">
            I'm Yash Sajwan, a passionate Full Stack Web Developer driven by a
            fascination for technology. Inspired by Google Assistant, I delved
            into coding in 2018 and fell in love with web development. Crafting
            unique and functional web applications has become my forte.
            Eager to learn and grow, I constantly explore new technologies. My goal is to create
            meaningful solutions and use my skills to make a difference in the
            world.
          </p>
          <p>I consider myself an innovative thinker, a problem-solver and a team player. Looking forward to securing a position where I can efficiently contirbute my skills for the growth of the organisation and my build professional career.</p>
          {/* <p className="mb-4">
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="recent-skills">
            <div className="recent-skills-skill relative mb-[10px] pl-[20px] font-sfMonoRegular text-[14px]">
              Typescript{" "}
            </div>
            <div className="recent-skills-skill relative mb-[10px] pl-[20px] font-sfMonoRegular text-[14px]">
              Angular.js
            </div>
            <div className="recent-skills-skill relative mb-[10px] pl-[20px] font-sfMonoRegular text-[14px]">
              npm package development
            </div>
            <div className="recent-skills-skill relative mb-[10px] pl-[20px] font-sfMonoRegular text-[14px]">
              Open source
            </div>
          </div> */}
        </div>
        <div className="mx-auto mt-16 md:mt-0 ">
          <div className="md:ml-[55px] wrap-image w-[200px] md:w-[250px] lg:w-[300px]">
            <img src={ProfilePic} alt="profile pic" className="" />
          </div>
        </div>
      </div>
    </section>
  );
}

function animatedSection() {
  return animateSection(About);
}

export default animatedSection;
