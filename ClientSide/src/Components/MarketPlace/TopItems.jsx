import React, { useState } from "react";
import TopPickCard from "./TopPickCard";
import { motion } from "framer-motion";

const TopItems = () => {
  const [topItemsList, settopItemsList] = useState([
    {
      imglinks:
        "https://images.unsplash.com/photo-1561136594-7f68413baa99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
      itemsName: "Tomato",
      price: "2000",
      suppName: "Ganesh Traders",
    },
    {
      imglinks:
        "https://images.unsplash.com/photo-1501430654243-c934cec2e1c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",
      itemsName: "Wheat",
      price: "800",
      suppName: "Avi Traders",
    },
    {
      imglinks:
        " https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      itemsName: "Potato",
      price: "500",
      suppName: "Vegetable Market",
    },
    {
      imglinks:
        "https://images.unsplash.com/photo-1582515073490-39981397c445?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      itemsName: "Carrot",
      price: "600",
      suppName: "Rajesh",
    },
    {
      imglinks:
        "https://images.unsplash.com/photo-1563635707628-9d39fd827e84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
      itemsName: "Almond",
      price: "3000",
      suppName: "Dinesh Traders",
    },
  ]);
  return (
    <>
      <div className=" w-full h-[50vh]  flex flex-col justify-around overflow-hidden">
        <motion.div
          className=" text-xl font-Manrope font-semibold h-[25%] flex flex-col px-[2%] justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            stiffness: 150,
            damping: 20,
            type: "spring",
            bounce: 0.25,
          }}
        >
          <span className="h-2/3 text-3xl flex items-end">Top Food Items</span>
          <div className=" h-1/3 flex items-center ">
            <span className=" opacity-80 text-base">
              Best Quality Products at Best Prices
            </span>
            <span className=" text-base opacity-90 ml-auto px-[2%] flex items-center gap-2">
              Chekout the products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="black"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-triangle rotate-90"
              >
                <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              </svg>
            </span>
          </div>
        </motion.div>
        <motion.div
          className="  h-[75%]  relative  py-[1%] px-[2%] flex gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            stiffness: 1500,
            damping: 20,
            type: "tween",
            delay: 0.3,
          }}
          staggerChildren={0.1}
        >
          {topItemsList.map((item, index) => (
            <TopPickCard
              key={index}
              width={20}
              fsize="sm"
              imglinks={item.imglinks}
              itemsName={item.itemsName}
              price={item.price}
              suppName={item.suppName}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default TopItems;
