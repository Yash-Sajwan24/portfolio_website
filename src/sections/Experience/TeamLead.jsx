import React from "react";
import { motion } from "framer-motion";
import { BsApple } from "react-icons/bs";
import BulletPoint from "./BulletPoint.jsx";

const C4GT = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="w-full min-h-fit"
    >
      {/* JOB TITLE & COMPANY */}
      <div className="flex flex-wrap gap-1 text-white font-medium text-xl font-titleFont flex-col sml:flex-row">
        <h3>Open Source Developer</h3>
        <span className="text-sm mt-1 font-medium text-textGreen flex">
          @ GirlScript Summer of Code (GSSOC) &ensp;
        </span>
      </div>

      {/* Working Dates */}
      <p className="pt-3 text-white">20'th May 2023 - 10'th August 2023</p>

      {/* INTRODUCTION */}
      {/* <p className="mt-3 text-base font-light flex gap-2 text-textDark">
        <strong>
          Working on Sunbird-Ed. It is a scalable open-source learning solution
          for teachers and tutors. It runs natively in cloud/mobile
          environments. The open-source governance of Sunbird allows a massive
          community of nation-builders to co-create and extend the solution in
          novel ways.
          <br />
          Key responsibilities included:
        </strong>
      </p> */}


      {/* Bullet Points */}
      <div className="min-h-fit">
        <ul className="mt-4 flex flex-col gap-3 text-textDark">
          <BulletPoint
            headningText="Data Structures and Algorithms C/C++"
            contentText="Delivered comprehensible and user-friendly code snippets elucidating advanced data structures for beginners"
          />
          <BulletPoint
            headningText="Web Developement"
            contentText="Designed and executed a dynamic web application utilizing ReactJS, Redux Toolkit, and Node.js. Tailored content to align with organisation preferences, leading to a noteworthy 20% surge in user engagement and a 15% increase in conversion rates."
          />
        </ul>
      </div>
    </motion.div>
  );
};

export default C4GT;
