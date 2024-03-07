import React, { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Apps/cartSlice";
import { motion } from "framer-motion";
import { setDetails } from "../../Apps/itemPopUp";
import { useSelector } from "react-redux";

const ItemCard = ({ item }) => {
  const [addToCartItem, setaddToCartItem] = useState(false);
  const [coverImg, setCoverImg] = useState("");
  const PopUp = useSelector((state) => state.itemPopUp.PopUp);
  const Dispatch = useDispatch();
  item = { ...item, cartadd: false };

  const addCartItem = () => {
    item = { ...item, cartadd: true };
    console.log(item);
    Dispatch(addToCart(item));
    setaddToCartItem(true);
    setTimeout(() => {
      setaddToCartItem(false);
    }, 2000);
  };
  useEffect(() => {
    if (item.cover) {
      setCoverImg(item.cover);
    } else {
      setCoverImg(
        "https://images.unsplash.com/photo-1596503799872-5c5f052c27b9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      );
    }
  }, [item.cover]);
  return (
    <motion.div
      className="  h-[20rem] text-sm  bg-[#d6d6d646] drop-shadow-lg border border-[#bdb8b8] rounded-lg flex flex-col justify-between items-center px-[3%] py-[3%] font-Montserrat font-semibold relative cursor-pointer"
      whileHover={{ backgroundColor: "#d6d6d6" }}
    >
      <div
        className=" w-full h-full"
        onClick={() => {
          Dispatch(setDetails({ details: item, PopUp: PopUp }));
        }}
      >
        <motion.img
          src={coverImg}
          alt={item.itemName + ".img"}
          className=" w-full h-[70%] object-cover rounded-lg  brightness-90"
        />
        <div className=" h-[30%]  flex font-Manrope justify-between w-full items-center pt-[3%]">
          <div className=" flex-[3] h-full flex flex-col px-[5%] ">
            <span className=" text-lg font-semibold ">{item.itemName}</span>
            <span className=" text-md font-semibold text-[#000000ce]">
              ₹{item.price}
            </span>
            <span className="text-sm font-semibold  text-[#000000af]">
              {item.username}
            </span>
          </div>
          <div className=" flex-1 h-full px-[5%] flex flex-col justify-start items-center pt-[3%]">
            <span className=" text-md font-semibold ">Quantity</span>
            <span className=" text-lg font-semibold">{item.quantity}</span>
          </div>
        </div>
      </div>

      {/* for the add to cart button */}
      <div className=" flex  justify-start items-center  py-[2%]   whitespace-nowrap top-[5%] left-[8%] text-[#f3f3f3] absolute z-20 font-semibold shadow-text px-[.7vw]  rounded-lg  transition-all drop-shadow-md  cursor-pointer w-[60%] ">
        <div className=" flex relative w-full h-full ">
          <button
            className=" bg-[#fcfcfc] hover:bg-[#f0f0f0] p-[4%] rounded-md flex justify-center items-center border absolute z-10 drop-shadow-md"
            onClick={addCartItem}
          >
            <ShoppingBag
              size={20}
              color="black"
              className=" hover:scale-90 transition-all"
            />
          </button>
          <motion.span
            className="  bg-[#ffffffea] w-[0%] top-1/2 left-1/2 [transform:translate(-50%,10%)] overflow-hidden text-black border-[#00000028] py-[2%] rounded-md flex justify-center items-center border absolute drop-shadow-lg origin-left"
            initial={{ width: "100%" }}
            animate={
              addToCartItem
                ? {
                    opacity: 1,
                    transform: "translate( -50% ,10%)",
                  }
                : {
                    opacity: 0,
                    transform: "translate( -55% ,10%)",
                  }
            }
            transition={{
              duration: 0.2,
              type: "tween",
              ease: "easeInOut",
              stiffness: 1000,
              damping: 100,
            }}
          >
            Added
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default ItemCard;
