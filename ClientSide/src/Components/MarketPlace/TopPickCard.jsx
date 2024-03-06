import React, { useState } from "react";
import { motion } from "framer-motion";

const TopPickCard = ({
  width,
  fsize,
  imglinks,
  itemsName,
  price,
  suppName,
}) => {
  const [hvr, setHvr] = useState(false);
  return (
    <>
      <motion.div
        className={` rounded w-[${width}%] h-[${100}%] relative text-${fsize} cursor-pointer overflow-hidden font-WorkSans`}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2, type: "tween", stiffness: 1200 },
        }}
        animate={{ opacity: 1 }}
        onHoverStart={() => setHvr(true)}
        onHoverEnd={() => setHvr(false)}
      >
        <motion.img
          src={imglinks}
          alt="img"
          className=" w-full h-full object-cover rounded-lg brightness-[65%] absolute z-10"
          transition={{
            duration: 0.2,
            type: "tween",
            stiffness: 1200,
            dump: 20,
          }}
        />
        <motion.div
          className=" w-full h-full bg-[#0000006b] rounded-lg absolute z-20"
          animate={{
            opacity: hvr ? 1 : 0,
          }}
        ></motion.div>
        <motion.div
          className=" py-2 px-5 rounded-2xl drop-shadow-lg top-1/2 left-1/2 [transform:translate(-50%,-50%)] backdrop-blur bg-[#0e0e0e81] text-[white] whitespace-nowrap  absolute z-30 font-WorkSans font-medium border border-[#ffffffd0]"
          animate={{
            transform: hvr ? "translate(-50%,-50%)" : "translate(-50%,500%)",
            scale: hvr ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
            type: "tween",
            stiffness: 1200,
            dump: 20,
            bounce: 0.25,
          }}
        >
          Buy Now
        </motion.div>
        <motion.div
          className=" absolute z-20  text-2xl text-[white] shadow-text bottom-0 left-[5%] flex flex-col justify-start pb-[3%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            type: "tween",
            stiffness: 1200,
            dump: 20,
            bounce: 0.25,
            delay: 0.1,
          }}
        >
          <span className=" leading-none">{itemsName}</span>
          <span className=" text-base">{suppName}</span>
        </motion.div>
        <motion.div
          className=" absolute z-20 text-[#1b1b1b] backdrop-blur drop-shadow-lg font-semibold  text-base bottom-0 right-[8%] top-3 bg-[#fffffff3] rounded-lg px-2 py-1 h-7 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            type: "tween",
            stiffness: 1200,
            dump: 20,
            bounce: 0.25,
            delay: 0.1,
          }}
        >
          Best Prize: {price}₹
        </motion.div>
      </motion.div>
    </>
  );
};

export default TopPickCard;
