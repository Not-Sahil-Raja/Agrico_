import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userlogout } from "../../Apps/userInfoslice.js";
import { ShoppingCart, ChevronDown, ChevronUp, LogOut } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const Dispatch = useDispatch();
  const logout = () => {
    Dispatch(userlogout());
    console.log("loggged Out");
  };

  const [logoAnim, setLogoAnim] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
      <div
        className=" flex gap-[1vw] items-center justify-evenly  px-[.5vw] "

        // onMouseLeave={() => setShowMenu(false)}
      >
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
