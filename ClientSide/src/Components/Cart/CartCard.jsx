import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCart } from "../../Apps/cartSlice";
import { XSquare } from "lucide-react";
import { removeFromCart } from "../../Apps/cartSlice";
import { motion } from "framer-motion";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <>
      <motion.div
        className=" bg-[#ffffff] border border-[#0000004b] flex justify-between items-center px-[2vw] py-[1vh] my-[1vh] rounded-md shadow-md bg-opacity-80 backdrop-blur-sm"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          delay: 0.1,
        }}
        layout
      >
        <div className="w-[65%] overflow-hidden text-ellipsis">
          <div className=" font-Archivo font-semibold ">{item.itemName}</div>
          <div className=" text-sm ">{item.quantity}Kg</div>
        </div>
        <div className=" w-[35%] px-[1%] whitespace-nowrap flex justify-evenly items-center">
          <span className=" px-[1vw] text-sm font-Archivo font-semibold">
            Price: {item.price}₹
          </span>
          <span>
            <XSquare
              onClick={() => dispatch(removeFromCart(item._id))}
              className=" cursor-pointer hover:scale-110 transition-all"
            />
          </span>
          {/* not working */}
        </div>
      </motion.div>
    </>
  );
};

export default CartCard;
