import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pivot as Hamburger } from "hamburger-react";
import { mainSectionAnimation } from "../../helpers/animations";
import MobileMenu from "./components/MobileMenu";
import Header from "./components/Header";
import CTA from "./components/CTA";
import Buttons from "./components/Buttons";
import ScrollDownArrow from "./components/ScrollDownArrow";

const Hero = ({ fullpageApi }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    fullpageApi?.setAllowScrolling(!isOpen);
    return () => {
      fullpageApi?.setAllowScrolling(true);
    };
  }, [fullpageApi, isOpen]);

  return (
    <motion.main
      variants={mainSectionAnimation}
      initial="hidden"
      animate="visible"
      className=" fp-bg  m-0 sm:fp-auto-height-responsive  static min-h-full md:min-h-screen  md:relative overflow-hidden md:overflow-y-scroll mobile-fix  section h-[100%] bg-[#120C5C] bg-hero-pattern2  bg-cover bg-center bg-no-repeat top-[0] bottom-0 left-0 right-0 ">
      <div className="fp-bg bg-hero-pattern2 bg-cover   2xl:bg-contain  bg-center 2xl:bg-center md:bg-right "></div>
      <div className="inline-block md:hidden absolute top-2 right-2 z-50 ">
        <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="relative z-10">
        <AnimatePresence>
          {isOpen && (
            <MobileMenu handleClick={() => setOpen((prev) => !prev)} />
          )}
        </AnimatePresence>
      </div>
      <div className="container">
        <Header />
        <div className="h-[100%] md:h-[calc(100vh-4em)]  flex justify-start pt-20 md:pt-0 md:justify-center flex-col items-center pb-28 ">
          <CTA />
          <Buttons fullpageApi={fullpageApi} />
        </div>
        <ScrollDownArrow fullpageApi={fullpageApi} />
      </div>
    </motion.main>
  );
};

export default Hero;
