import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userlogout } from "../../Apps/userInfoslice.js";
import {
  ShoppingCart,
  ChevronDown,
  ChevronUp,
  LogOut,
  PlusIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import AgricoLogo from "./AgricoLogo.jsx";

const Header = () => {
  const Dispatch = useDispatch();
  const logout = () => {
    Dispatch(userlogout());
    console.log("loggged Out");
  };

  const [showMenu, setShowMenu] = useState(false);

  const userDet = useSelector((state) => state.userInfo.userInfo);
  // console.log(userDet);
  return (
    <div className="  bg-[#ffffffd3] backdrop-blur-md px-[3vw] py-2 fixed top-0 z-50 w-screen text-lg font-Archivo text-[#2b1c1c] flex  items-center gap-[5vw] drop-shadow-md ">
      <div className=" w-fit  h-[5.8vh]  rounded-2xl px-[1vw] flex justify-center items-center  ">
        <AgricoLogo />
      </div>

      <div className=" py-1 text-base flex justify-around w-fit  mr-auto">
        <CustomNavLink to="/" isActiveClass="underline ">
          Home
        </CustomNavLink>
        <CustomNavLink to="/catlg" isActiveClass="underline ">
          Catalogue
        </CustomNavLink>
        <CustomNavLink to="/marketPlace" isActiveClass="underline ">
          MarketPlace
        </CustomNavLink>
      </div>

      <div className=" flex gap-[1vw] items-center justify-evenly  px-[.5vw] ">
        <NavLink
          to="/createblog"
          className={({ isActive }) =>
            ` px-3 py-[.35vh] rounded flex items-center justify-center  transition-colors ${
              isActive
                ? "from-[#9dd394] to-[#5aa34d] text-white bg-gradient-to-t shadow-inner"
                : " border-transparent hover:backdrop-blur-sm text-[#0D2035]"
            }`
          }
        >
          <span className=" flex gap-1 items-center justify-center">
            <PlusIcon size={17} /> Create{" "}
          </span>
        </NavLink>
        <div
          className="text-white hover:brightness-90 w-fit h-full relative flex items-center justify-center rounded-sm cursor-pointer transition-all"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className=" flex flex-wrap flex-col items-start font-WorkSans border w-fit px-2 py-[2%] rounded-md bg-[#000000ab] relative">
            <span className=" leading-none text-base font-[300]">Hello,</span>

            <>
              <span className=" text-sm font-medium leading-none flex">
                {userDet.username ? userDet.username : "SignIn/Up"}
                {showMenu ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              </span>
              <motion.div
                className=" absolute w-7 h-7 rounded -bottom-[120%]  backdrop-blur-md left-1/2 [transform:translate(-50%,-0%)]"
                style={{ pointerEvents: showMenu ? "all" : "none" }}
              >
                <motion.div
                  className=" w-full h-full bg-[#fffdfd] rounded font-WorkSans text-base"
                  animate={{
                    opacity: showMenu ? 1 : 0,
                    height: showMenu ? "auto" : 0,
                  }}
                >
                  <AnimatePresence>
                    {userDet.username ? (
                      <motion.button
                        className={`top-1/2 left-1/2 bg-[#cf3e3e] gap-2 absolute transition-transform w-24 h-7 flex items-center justify-center border rounded ${
                          userDet.username
                            ? " [transform:translate(-50%,-50%)]"
                            : "[transform:translate(-200%,-50%)]"
                        }`}
                        exit={{ transform: "translate(-200%,-90%)" }}
                        onClick={logout}
                      >
                        Logout
                        <LogOut size={17} />
                      </motion.button>
                    ) : (
                      <NavLink
                        to="/login"
                        className={() =>
                          ` top-1/2 left-1/2 bg-oliveGreen absolute transition-transform  w-[7vw] h-7 flex items-center justify-center border rounded ${
                            userDet.username
                              ? "[transform:translate(100%,-50%)]"
                              : "[transform:translate(-50%,-50%)]"
                          }`
                        }
                      >
                        Login
                      </NavLink>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </>
          </div>
        </div>

        {/* cart Area */}
        <motion.div
          className=" h-[2.4rem] font-WorkSans bg-[#000000ab] rounded-md"
          whileHover={{ backgroundColor: "#000000" }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <NavLink
            className="w-full h-full flex gap-2 justify-center items-center  border px-3 rounded-md"
            to="/cart"
          >
            <ShoppingCart size={22} className=" text-white" />
            <span className=" opacity-90 text-white font-normal text-sm">
              {" "}
              Cart
            </span>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;

const CustomNavLink = ({ to, isActiveClass, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-[.2rem] rounded-xl transition-all ${
        isActive
          ? isActiveClass
          : "text-[#353535] border-transparent text-opacity-85 "
      }`
    }
  >
    {children}
  </NavLink>
);
