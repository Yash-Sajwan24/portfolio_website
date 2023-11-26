import React from "react";
import { motion } from "framer-motion";
import BulletPoint from "./BulletPoint.jsx";

const Internship = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="w-full"
    >
      {/* JOB TITLE & COMPANY */}
      <h3 className="flex gap-1 text-white font-medium text-xl font-titleFont flex-col flex-wrap sml:flex-row">
        Software Developer Intern
        <span className="text-sm mt-1 font-medium text-textGreen">
          @ Parentheses Labs
        </span>
      </h3>

      {/* Working Dates */}
      <p className="pt-3 text-white">1'st August 2022 - 1'st October 2022</p>

      {/* INTRODUCTION */}
      <p className="mt-3 text-base font-light flex gap-2 text-textDark">
        <strong>
          I have experience working as a Full Stack Developer at Parentheses
          Labs, startup that connects no-code developers with businesses to
          automate their workflows, I played a crucial part in various areas:
        </strong>
      </p>

      {/* Bullet Points */}
      <ul className="mt-4 flex flex-col gap-3 text-textDark">
        <BulletPoint
          headningText="Designing Frontend Interface"
          contentText="Developed the front-end interface for project Mamuni, a voice-converter web app that converts one language voice to other regional languages and increase the interactivity of the app."
        />

        <BulletPoint
          headningText="Backend System for managing campaigns"
          contentText="Developed backend for a platform for managing marketing and campaign of organization, decreased the load on the server by 20% and improved the performance of the platform with interconnecting with DV360 (Google Platform)."
        />

        <BulletPoint
          headningText="Admin Dashboard for managing leads"
          contentText="Designed the Admin Dashboard for the project Yaduka Fresh, for regulating access control of services of company and decreasing the load on the server by 30% as automating things using the cloud functions."
        />
      </ul>
    </motion.div>
  );
};

export default Internship;
