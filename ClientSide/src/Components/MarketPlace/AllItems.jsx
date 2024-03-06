import React, { useEffect, useState } from "react";
import TopPickCard from "./TopPickCard";
import axios from "axios";
import ItemCard from "./ItemCard";
import { motion } from "framer-motion";
import ShowDet from "./ShowDet";

const AllItems = () => {
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/itemsList`)
      .then((res) => {
        setItemList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className=" h-fit flex flex-col relative  ">
        <ShowDet />

        {itemList.length > 0 ? (
          <>
            <div className=" text-xl font-Manrope font-semibold h-[20vh] flex flex-col px-[2%] justify-center">
              <span className="h-2/3 text-3xl flex items-end">
                Buy AnyThing You Want
              </span>
              <div className=" h-1/3 flex items-center ">
                <span className=" opacity-70 text-base">
                  Get the Best Quality Products at Best Prices
                </span>
              </div>
            </div>
            <motion.div
              className=" h-fit w-full  grid grid-cols-5 2xl:grid-cols-6 gap-5 px-[2%] py-[2vh] row-auto "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {itemList.map((item, index) => (
                <ItemCard key={index} item={item} />
              ))}
            </motion.div>
          </>
        ) : (
          <>
            <div className=" h-[50vh] flex justify-center items-center   ">
              <div className=" relative h-[8vh] w-[10vw] rounded-sm overflow-hidden  ">
                <motion.div
                  className=" w-full text-xl font-semibold font-WorkSans px-4 py-1 text-[#000000af] top-1/2 left-1/2 z-20 absolute [transform:translate(-50%,-50%)]"
                  animate={{
                    opacity: ["20%", "50%"],
                    textShadow: [
                      "0px 0px 0px #00000000",
                      "0px 0px .8px #000000",
                    ],
                  }}
                  transition={{
                    duration: 1.85,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    repeatDelay: 0.5,
                  }}
                >
                  Loading...
                </motion.div>
                <motion.div
                  className=" bg-[#e4555581] shadow-inner h-full  w-full absolute -z-0"
                  animate={{
                    width: ["0%", "100%"],
                    background: ["#00000010", "#00000020"],
                    backgroundColor: ["#00000020", "#e4555581"],
                  }}
                  transition={{
                    duration: 1.85,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    repeatDelay: 0.5,
                  }}
                ></motion.div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AllItems;
