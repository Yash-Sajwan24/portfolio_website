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
          @ Code for GovTech &ensp;
        </span>
      </div>

      {/* Working Dates */}
      <p className="pt-3 text-white">1'st July 2023 - 1'st September 2023</p>

      {/* INTRODUCTION */}
      <p className="mt-3 text-base font-light flex gap-2 text-textDark">
        <strong>
          Working on Sunbird-Ed. It is a scalable open-source learning solution
          for teachers and tutors. It runs natively in cloud/mobile
          environments. The open-source governance of Sunbird allows a massive
          community of nation-builders to co-create and extend the solution in
          novel ways.
          <br />
          Key responsibilities included:
        </strong>
      </p>

      {/* Bullet Points */}
      <div className="min-h-fit">
        <ul className="mt-4 flex flex-col gap-3 text-textDark">
          <BulletPoint
            headningText="Improving discoverability of content"
            contentText="Making it easier for users to find the content they are looking for, which will improve the user experience."
          />
          <BulletPoint
            headningText="Increasing flexibility in filtering content"
            contentText="Designing the additional filters and giving users more control over how they filter content, which will allow them to find the content that is most relevant to them."
          />
          <BulletPoint
            headningText="Configuring List fields flexibility"
            contentText="Developer have the power or right to set that if he/she wants to show up one particular field or not and can also add new fields."
          />
        </ul>
      </div>
    </motion.div>
  );
};

export default C4GT;
