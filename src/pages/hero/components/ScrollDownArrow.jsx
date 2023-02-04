import React from "react";
import { motion } from "framer-motion";

const ScrollDownArrow = ({ fullpageApi }) => {
  return (
    <motion.p
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{
        duration: 1,
        delay: 1,
        repeatType: "reverse",

        repeat: Infinity,
      }}
      onClick={() => fullpageApi.moveSectionDown()}
      className="scrollDown  hidden md:inline-block fixed text-[0.7rem] bottom-[130px] md:bottom-[160px] 
        left-[50%] md:left-[100px] 2xl:bottom-[300px] leading-[1px] tracking-[0.3em] text-white  z-0  content-none font-semibold 2xl:font-bold after:w-[2px] after:h-[140px] after:bg-white after:absolute after:left-0 after:right:0 after:m-auto after:bottom-[-160px] cursor-pointer">
      SCROLLDOWN
    </motion.p>
  );
};

export default ScrollDownArrow;
