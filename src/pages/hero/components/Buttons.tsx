import * as React from "react";
import { motion } from "framer-motion";
import { buttonAnimation } from "../../../helpers/animations";

interface ButtonsProps {
  fullpageApi?: {
    moveTo?: (section: string | number, slide: string | number) => void;
    setLockAnchors?: (value: boolean) => void;
  };
}

const Buttons: React.FC<ButtonsProps> = ({ fullpageApi }) => {
  const handleClickWork = () => {
    if (fullpageApi?.moveTo) {
      fullpageApi.moveTo(3, 0);
    }
  };

  const handleClickHire = () => {
    if (fullpageApi?.moveTo) {
      fullpageApi.moveTo(4, 0);
    }
  };

  return (
    <motion.div
      variants={buttonAnimation}
      initial="hidden"
      animate="visible"
      className="flex gap-3 md:gap-5 flex-col md:flex-row md:p-0 px-0 md:px-10 justify-center items-center w-full md:w-[28em] mt-8 font-semibold text-[1.2rem]"
    >
      <motion.button
        whileHover={{
          scale: 1.03,
          backgroundColor: "#2826b0",
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClickWork}
        className="bg-[#1F1CA1]  py-2 px-5 text-white w-full tracking-wider rounded-xl"
      >
        SEE MY WORK
      </motion.button>
      <motion.button
        whileHover={{
          scale: 1.03,
          backgroundColor: "#1c1470",
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClickHire}
        className="bg-[#120C5C] py-2 px-5 text-white w-full tracking-wider rounded-xl"
      >
        HIRE ME
      </motion.button>
    </motion.div>
  );
};

export default Buttons;
