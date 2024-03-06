import React, { useState } from "react";
import { UserRound } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userlogout } from "../../Apps/userInfoslice.js";
import { ShoppingCart, MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
// import Agrico_logo from "../../Images/Agrico_logo.png";

const Header = () => {
  const Dispatch = useDispatch();
  const logout = () => {
    Dispatch(userlogout());
    console.log("loggged Out");
  };

  const [logoAnim, setLogoAnim] = useState(false);

  const userDet = useSelector((state) => state.userInfo.userInfo);
  // console.log(userDet);
  return (
    <div className="  bg-[#bdb9a788] backdrop-blur-md px-[3vw] fixed top-0 w-[100vw] flex font-Archivo text-lg text-[#2b1c1c] font-[570] justify-around items-center drop-shadow-md gap-[5vw] z-50">
      <div className="  w-[10vw]  h-[5.8vh] mr-auto rounded-2xl px-[1vw] flex  justify-evenly items-center  ">
        <Link className=" py-[.5vh]  px-[.35vw] text-center flex-1 flex  h-full items-center justify-center relative">
          <motion.div
            className=" flex flex-col h-full w-full items-center justify-center relative overflow-hidden"
            onHoverStart={() => setLogoAnim(!logoAnim)}
            onHoverEnd={() => setLogoAnim(!logoAnim)}
          >
            <motion.div
              className=" flex items-center justify-center absolute w-full h-full top-1/2 left-1/2 [transform:translate(-50%,-50%)]"
              animate={{
                transform: logoAnim
                  ? "translate(-50%,-160%)"
                  : "translate(-50%,-50%)",
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <span className=" font-Montserrat font-semibold opacity-75 text-[white]">
                AgriCo
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-move-up-right opacity-75"
              >
                <path d="M13 5H19V11" />
                <path d="M19 5L5 19" />
              </svg>
            </motion.div>
            <motion.div
              className=" flex items-center justify-center absolute w-full h-full top-1/2 left-1/2 [transform:translate(-50%,-50%)]"
              animate={{
                transform: logoAnim
                  ? "translate(-50%,-50%)"
                  : "translate(-50%,160%)",
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <span className=" font-Montserrat font-semibold text-[white]">
                AgriCo
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-move-up-right"
              >
                <path d="M13 5H19V11" />
                <path d="M19 5L5 19" />
              </svg>
            </motion.div>
          </motion.div>
        </Link>
        {/* <div className=" text-lg mr-auto flex-[3] text-center whitespace-nowrap">
          AgriCo
        </div> */}
      </div>

      <div className=" py-[.95vh]  flex justify-around w-[35vw]  rounded-lg ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` px-[1.5vw] py-[.35vh] rounded-xl transition-all${
              isActive
                ? "  bg-[#1a181485] text-white shadow-inner"
                : " text-[#353535] border-transparent hover:backdrop-blur-sm"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catlg"
          className={({ isActive }) =>
            `  px-[1.5vw] py-[.35vh] rounded-xl  ${
              isActive
                ? "bg-[#1a181485] text-white shadow-inner"
                : "text-[#353535] border-transparent hover:backdrop-blur-sm"
            }`
          }
        >
          Catalogue
        </NavLink>
        <NavLink
          to="/marketPlace"
          className={({ isActive }) =>
            `  px-[1.5vw] py-[.35vh] rounded-xl ${
              isActive
                ? "bg-[#1a181485] text-white shadow-inner"
                : "text-[#353535] border-transparent hover:backdrop-blur-sm"
            }`
          }
        >
          MarketPlace
        </NavLink>
      </div>
      <div className=" flex gap-[1vw] items-center">
        <NavLink
          className={() =>
            `w-[22%] h-[4vh] flex justify-center items-center rounded bg-[#dbdbdbdc] overflow-hidden cursor-pointer border border-oliveGreen hover:bg-oliveGreen transition-all hover:text-[white]`
          }
          to="/cart"
        >
          <ShoppingCart className=" aspect-square   w-full h-[4vh] p-[.8vh] " />
        </NavLink>

        <span className="  overflow-hidden text-white hover:brightness-90 w-[6vw] h-[5vh] relative flex items-center justify-center rounded-sm cursor-pointer transition-all">
          <button
            className={`top-1/2 left-1/2 bg-[#b35e5e] absolute transition-transform w-full h-full flex items-center justify-center  ${
              userDet.username
                ? " [transform:translate(-50%,-50%)]"
                : "[transform:translate(-200%,-50%)]"
            }`}
            onClick={logout}
          >
            {userDet.show}
          </button>
          <NavLink
            to="/login"
            className={() =>
              ` top-1/2 left-1/2 bg-oliveGreen absolute transition-transform  w-full h-full flex items-center justify-center  ${
                userDet.username
                  ? "[transform:translate(100%,-50%)]"
                  : "[transform:translate(-50%,-50%)]"
              }`
            }
          >
            Login
          </NavLink>
        </span>

        <UserRound className=" aspect-square bg-[#e6e6e6fb] drop-shadow shadow-inner text-[#353535] hover:backdrop-blur-sm rounded-[50%] transition-all cursor-pointer p-1 scale-110 hover:scale-125" />
      </div>
    </div>
  );
};

export default Header;
