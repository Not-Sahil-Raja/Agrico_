import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { X, Shell } from "lucide-react";
import { setDetails } from "../../Apps/itemPopUp";

const ShowDet = () => {
  const details = useSelector((state) => state.itemPopUp.details);
  const PopUp = useSelector((state) => state.itemPopUp.PopUp);

  // console.log(details, PopUp);
  const Dispatch = useDispatch();
  return (
    <div>
      <motion.div
        className=" w-[35rem] h-[20rem] top-1/2 left-1/2 [transform:translate(-0%,0%)] flex rounded-lg bg-[#ffffffe3] backdrop-blur-xl  fixed z-[40] origin-center overflow-hidden "
        initial={{ transform: "translate(-50%,-50%) scale(0)" }}
        animate={{
          // opacity: PopUp ? 1 : 0,
          // transform: PopUp ? "scale:1" : "scale:0",
          scale: PopUp ? 1 : 0,
          transform: PopUp
            ? "translate(-50%,-50%) scale(1)"
            : "translate(-50%,-50%) scale(0)",
        }}
        transition={{ duration: 0.2, type: "tween", ease: "easeIn" }}
        exit={{ scale: 0, opacity: 0 }}
      >
        <div className="w-[40%] h-full  flex flex-col justify-center items-center relative">
          {details.cover ? (
            <motion.img
              src={details.cover}
              alt={details.itemName + ".img"}
              className=" h-full object-cover w-full rounded-lg "
            />
          ) : (
            <>
              <div className=" h-full object-cover w-full rounded-lg bg-[#0000004b] relative  overflow-hidden">
                <motion.div
                  className=" w-[200%] h-[9%] bg-[#0000001f] absolute rotate-45 blur-0"
                  animate={{
                    x: [0],
                    y: [-50, 350],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: [0.6, 0.05, -0.01, 0.9],
                    repeatDelay: 2,
                  }}
                ></motion.div>
                <div className=" absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)] flex flex-col justify-center items-center">
                  <Shell size={30} />
                  <span className=" whitespace-nowrap font-WorkSans font-semibold opacity-65">
                    No Image
                  </span>
                </div>
              </div>
            </>
          )}

          <motion.div
            className=" h-fit w-fit rounded-full p-1 absolute bg-[#3635356b] backdrop-blur-md drop-shadow-xl top-3 left-3 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2, type: "tween", ease: "easeInOut" }}
            onClick={() => {
              Dispatch(setDetails({ details: {}, PopUp: true }));
            }}
          >
            <X />
          </motion.div>
        </div>
        <div className="  w-[60%] h-full font-WorkSans pl-3 py-2 flex flex-col justify-start">
          <div className=" w-full h-[35%] flex flex-col justify-center">
            <span className=" bg-[#27500fb7] w-fit text-white font-medium text-sm px-2 py-1 rounded backdrop-blur-md">
              {details.category}
            </span>
            <div className=" h-fit text-[2.2vw]  font-semibold overflow-hidden text-ellipsis  ">
              {details.itemName}
            </div>

            <div className=" h-fit overflow-hidden text-ellipsis whitespace-nowrap pr-3  ">
              {details.itemDescription
                ? details.itemDescription
                : "No Description added"}
            </div>
          </div>

          <div className=" flex items-center px-[5%] h-[15%] w-full font-semibold">
            <div className="flex w-fit px-[5%] h-fit  rounded-2xl border-[2px] border-[#00000091]">
              {details.quantity} {details.unit}
            </div>
          </div>
          <div className=" h-[50%] ">
            <div className="  h-[65%]  flex items-start pt-[5%]">
              <div className=" px-[2%] ">
                <span className=" leading-none">Selling @</span>
                <div className=" text-[1.7vw] font-semibold leading-none ">
                  {details.price}₹
                </div>
              </div>
              <div className=" ml-auto px-[10%] text-[1.2vw] font-[530] opacity-85 w-fit flex flex-col items-end">
                <div>{details.username}</div>
                <div>{details.location}</div>
                <div>{details.contact}</div>
              </div>
            </div>
            <div className=" w-full h-[35%]   flex items-center">
              <div className=" bg-[#1f1f1f] text-[white] px-3 py-1 rounded-lg font-[550]">
                ADD TO CART
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ShowDet;
