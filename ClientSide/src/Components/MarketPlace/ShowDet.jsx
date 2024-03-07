import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { setDetails } from "../../Apps/itemPopUp";

const ShowDet = () => {
  const details = useSelector((state) => state.itemPopUp.details);
  const PopUp = useSelector((state) => state.itemPopUp.PopUp);

  console.log(details, PopUp);
  const Dispatch = useDispatch();
  return (
    <div>
      <motion.div
        className=" w-[35rem] h-[20rem] top-1/2 left-1/2 [transform:translate(-0%,0%)] flex rounded-lg bg-[#dddddddc] backdrop-blur-xl  fixed z-[40] origin-center overflow-hidden "
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
        <div className="w-[40%] h-full  flex flex-col justify-center items-center relative">
          <motion.img
            src={details.cover}
            alt={details.itemName + ".img"}
            className=" h-full object-cover w-full rounded-lg "
          />
          <motion.div
            className=" h-fit w-fit rounded-full p-1 absolute bg-[#3635356b] backdrop-blur-md drop-shadow-xl top-3 left-3 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2, type: "tween", ease: "easeInOut" }}
            onClick={() => {
              Dispatch(setDetails({ details: {}, PopUp: false }));
            }}
          >
            <X />
          </motion.div>
        </div>
        <div className="  w-[60%] h-full font-WorkSans pl-3 py-2 flex flex-col justify-start">
          <div className=" h-fit text-2xl  font-semibold overflow-hidden text-ellipsis mb-[10%] mt-[5%] ">
            {details.itemName}
          </div>

          <div className=" h-fit overflow-hidden text-ellipsis pr-3 pb-[5%]">
            {details.itemDescription}
          </div>

          <div className="  py-1 px-[7%] flex justify-around">
            <span className=" bg-[#0000003a] font-semibold px-2 py-1 rounded backdrop-blur-md">
              {details.category}
            </span>
            <div className="ml-auto flex bg-green-300">
              {details.quantity} {details.unit}
            </div>
          </div>

          <div>{details.price}</div>
          <div>{details.username}</div>
          <div>{details.location}</div>
          <div>{details.contact}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default ShowDet;
