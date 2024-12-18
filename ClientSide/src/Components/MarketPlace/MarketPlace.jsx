import React, { useEffect } from "react";
import { Search, MoveRight, Plus, PlusSquare } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import ListedItem from "./ListedItem";
import AllItems from "./AllItems";
import { useSelector } from "react-redux";
import TopItems from "./TopItems";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import ShowDet from "./ShowDet";

const MarketPlace = () => {
  const userInfos = useSelector((state) => state.userInfo.userInfo);
  const [marType, setMarType] = useState(0);
  const [addedPop, setAddedPop] = useState(false);
  const [sICheck, setSICheck] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [addedItemList, setAddedItemList] = useState([]);
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/itemsList`)
      .then((res) => {
        setAddedItemList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);
  const PopUp = useSelector((state) => state.itemPopUp.PopUp);

  return (
    <>
      <ShowDet />
      <motion.div
        className=" bri bg-[#fffff2] w-full h-[100vh]  overflow-x-hidden select-none "
        // animate={{ brightness: PopUp ? 0.5 : 1 }}
        style={{
          filter: PopUp
            ? "blur(5px) brightness(0.5)"
            : "blur(0px) brightness(1)",
          pointerEvents: PopUp ? "none" : "all",
          //  PopUp ?  : "",
        }}
        transition={{ duration: 0.2, type: "tween", ease: "easeInOut" }}
        pointerEve
      >
        <div className=" w-full h-[40vh] backdrop-blur-sm overflow-hidden relative">
          <motion.img
            src="https://images.unsplash.com/photo-1530267981375-f0de937f5f13?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" w-[100vw] h-[50vh] object-cover brightness-[.3] absolute z-10"
            initial={{ opacity: 0.8, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: "tween",
              ease: "easeInOut",
              stiffness: 1000,
              damping: 100,
            }}
          />

          <motion.div
            className=" absolute z-20 top-1/2 left-1/2  text-[white] w-[50%] h-[25vh]  [transform:translate(-50%,-30%)] flex-col flex items-center justify-around"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "tween",
              ease: "easeInOut",
              stiffness: 1000,
              damping: 100,
            }}
          >
            <div className=" text-center">
              <div className=" text-2xl font-semibold font-NunitoSans">
                Find What You Want
              </div>
              <div className=" text-[#ffffffc0]">
                You can find products available near you
              </div>
            </div>
            <div className=" w-[30vw] flex bg-[white] py-[.75vh] px-[.5vw] items-center rounded-lg gap-[.3vw]">
              <div>
                <Search className=" scale-[.80] text-[#3d3232]" />
              </div>
              <input
                type="text"
                placeholder="Search for products"
                className="  h-[3vh] w-full bg-transparent border-none text-[#3d3232] font-NunitoSans focus:outline-none px-[.5vw]"
              />
            </div>
            <div className=" my-[.6vh]">
              <button className=" px-[.8vw] font-NunitoSans border-2 rounded-2xl flex items-center justify-center hover:bg-[#0000008c]">
                Search
                <MoveRight className=" scale-75" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* marketPlace */}

        <TopItems />
        <AllItems />

        {/* Add NEW ITEM */}
        <motion.div
          className=" absolute bg-[#f7f6f2dc] flex top-[10%] right-[2%] z-[100] w-32 h-9 rounded overflow-hidden drop-shadow-lg cursor-pointer backdrop-blur-md "
          onPointerEnter={() => setSICheck(true)}
          onPointerLeave={() => setSICheck(false)}
          initial={{ right: "5%", opacity: 0 }}
          animate={{
            right: "2%",
            opacity: 1,
            transition: {
              duration: 0.3,
              type: "tween",
              ease: "easeInOut",
              stiffness: 1000,
              damping: 100,
            },
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2, type: "tween", ease: "easeInOut" }}
        >
          <NavLink className="  w-32 h-9   relative" to="/sellitem">
            <motion.div
              className=" top-1/2 left-1/2 absolute [transform:translate(-50%,-50%)]"
              initial={{ transform: "translate(-50%,-50%)" }}
              animate={{
                transform: sICheck
                  ? "translate(-50%,-170%)"
                  : "translate(-50%,-50%)",
              }}
              transition={{
                duration: 0.2,
                type: "tween",
                ease: [0.85, 0, 0.15, 1],
                stiffness: 1000,
                damping: 100,
              }}
            >
              <motion.span className=" font-semibold font-WorkSans opacity-75  whitespace-nowrap">
                DashBoard
              </motion.span>
            </motion.div>
            <motion.div
              className=" top-1/2 left-1/2 absolute [transform:translate(-50%,70%)] bg-[#361f1f83] text-white w-40 h-10 flex items-center justify-center"
              initial={{ transform: "translate(-50%,-50%)" }}
              animate={{
                transform: sICheck
                  ? "translate(-50%,-50%)"
                  : "translate(-50%,170%)",
              }}
              transition={{
                duration: 0.2,
                type: "tween",
                ease: "easeInOut",
                stiffness: 1000,
                damping: 100,
              }}
            >
              <motion.span className=" font-semibold font-WorkSans opacity-85  whitespace-nowrap">
                DashBoard
              </motion.span>
            </motion.div>
          </NavLink>
        </motion.div>
      </motion.div>
    </>
  );
};

export default MarketPlace;
