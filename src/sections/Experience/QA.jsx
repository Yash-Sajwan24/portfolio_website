import React from "react";
import { motion } from "framer-motion";
import { BsApple } from "react-icons/bs";
import BulletPoint from "./BulletPoint.jsx";

const QA = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="w-full"
    >
      {/* JOB TITLE & COMPANY */}
      <h3 className="flex gap-1 text-white font-medium text-xl font-titleFont flex-col sml:flex-row">
        Software Engineer Intern
        <span className="text-sm mt-1 font-medium text-textGreen flex">
          @ Digilocker &ensp;
        </span>
        <em className="text-sm">Lead Frontend Developer</em>
      </h3>

      {/* Working Dates */}
      <p className="pt-3 text-white">1'st December 2022 - 1'st June 2023</p>

      {/* INTRODUCTION */}
      <p className="mt-3 text-base font-light flex gap-2 text-textDark">
        <strong>
          Developer on Project API Setu, where I am responsible for designing,
          developing, and implementing solutions with a team of developers and
          also maintaining a set of APIs forthe project.
        </strong>
      </p>

      {/* Bullet Points */}
      <ul className="mt-4 flex flex-col gap-3 text-textDark">
        <BulletPoint
          headningText="Designing Plesant UI"
          contentText="Developing the User Interface of the project as per the figma design and UI guidelines. Making it responsive and easily adaptable and customizable."
        />

        <BulletPoint
          headningText="Certificate API Development"
          contentText="Developing a set of APIs for the project which basically used for verifying and setup of the syncronization ecosystem between the universities and Digilocker"
        />
      </ul>
    </motion.div>
  );
};

export default QA;
