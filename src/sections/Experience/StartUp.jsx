import React from "react";
import { motion } from "framer-motion";
import BulletPoint from "./BulletPoint.jsx";

const StartUp = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="w-full"
    >
      {/* JOB TITLE & COMPANY */}
      <div className="flex flex-wrap text-white gap-1 font-medium text-xl font-titleFont flex-col sml:flex-row">
        <h3 className="text-white">Software Developer Intern</h3>
        <span className="text-sm mt-1 font-medium text-textGreen flex">
          @ Omikron Technologies
        </span>
      </div>

      {/* Working Dates */}
      <p className="pt-3 text-white">1'st June 2022 - 1'st July 2022</p>

      {/* INTRODUCTION */}
      <p className="mt-3 text-base font-light flex gap-2 text-textDark">
        <strong>
          IT firm, providing a wide array of services including software
          development, mobile application development and digital marketing.
        </strong>
      </p>

      {/* Bullet Points */}
      <ul className="mt-4 flex flex-col gap-3 text-textDark">
        <BulletPoint
          headningText="Optimizing API calls"
          contentText="Worked with the Redwing team to improve app performance by optimizing
          API calls and static proping frequently used elements of data (Optimal caching)."
        />

        <BulletPoint
          headningText="Conditional User States"
          contentText="Received recognition for the Best Feature Addition in Redwing project by building a feature that significantly changes the way users SignUp. Created a feature that allows users to show or hide certain elements as per type."
        />
      </ul>
    </motion.div>
  );
};

export default StartUp;
