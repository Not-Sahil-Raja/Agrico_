import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const ShowDet = () => {
  const details = useSelector((state) => state.itemPopUp.details);
  const PopUp = useSelector((state) => state.itemPopUp.PopUp);
  // console.log(details, PopUp);
  return (
    <div>
      <motion.div
        className=" w-[50rem] h-[30rem] top-1/2 left-1/2 [transform:translate(-0%,0%)] bg-slate-600 fixed z-[40] origin-center "
        initial={{ transform: "translate(-50%,-50%) scale(0)" }}
        animate={{
          // opacity: PopUp ? 1 : 0,
          // transform: PopUp ? "scale:1" : "scale:0",
          scale: PopUp ? 1 : 0,
          transform: PopUp
            ? "translate(-50%,-50%) scale(1)"
            : "translate(-50%,-50%) scale(0)",
        }}
      >
        {details.itemName ? ( // if the details are present then show the details
          details.itemName
        ) : (
          <>Not</>
        )}
      </motion.div>
    </div>
  );
};

export default ShowDet;
