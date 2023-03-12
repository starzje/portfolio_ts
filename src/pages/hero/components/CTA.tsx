import * as React from "react";
import { motion } from "framer-motion";
// animations
import { titleAnimation, subTitleAnimation, paragraphAnimation } from "../../../helpers/animations";

const CTA = () => {
  return (
    <div className="text-white text-center  ">
      <motion.h1
        variants={titleAnimation}
        initial="hidden"
        animate="visible"
        className="text-[2rem] md:text-[3rem] uppercase font-extrabold leading-[40px] md:leading-[50px] ">
        Turn your ideas
        <br />{" "}
        <motion.span variants={subTitleAnimation} initial="hidden" animate="visible">
          into reality
        </motion.span>
      </motion.h1>
      <motion.p
        layout
        variants={paragraphAnimation}
        initial="hidden"
        animate="visible"
        className="text-[1.7rem] md:text-[2rem] mt-2 font-light leading-[30px] md:leading-10 tracking-wide  ">
        You just need to take the first step.
      </motion.p>
    </div>
  );
};

export default CTA;
