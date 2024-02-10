import React from "react";
import { UserRound } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="  mt-[.75vh]  px-[3vw] py-[.5vh] absolute w-full flex font-Archivo text-lg text-[#2b1c1c] font-[570] justify-around items-center drop-shadow-md gap-[5vw] z-50">
      <div className="  w-[19vw] bg-[#fdcb74da] h-[5.8vh] mr-auto rounded-2xl px-[1vw] flex  justify-evenly items-center shadow-inner backdrop-blur-xl ">
        <Link className=" py-[.5vh] bg-[#fff7c87e] px-[.35vw] text-center flex-1 backdrop-blur-xl">
          Logo
        </Link>
        <div className=" text-base flex-[3] text-center whitespace-nowrap">
          Company Info text
        </div>
      </div>

      <div className=" py-[.75vh] bg-[#f8bf5cd7] flex justify-around w-[35vw] backdrop-blur-3xl rounded-lg ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` px-[1.5vw] py-[.35vh] rounded-[0.5vw] transition-all${
              isActive
                ? "  bg-[#c7923685] shadow-inner"
                : " text-[#353535] border-transparent hover:backdrop-blur-sm"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catlg"
          className={({ isActive }) =>
            `  px-[1.5vw] py-[.35vh] rounded-[0.5vw]  ${
              isActive
                ? "bg-[#c7923685] shadow-inner"
                : "text-[#353535] border-transparent hover:backdrop-blur-sm"
            }`
          }
        >
          Catalouge
        </NavLink>
        <NavLink
          to="/marketPlace"
          className={({ isActive }) =>
            `  px-[1.5vw] py-[.35vh] rounded-[0.5vw]  ${
              isActive
                ? "bg-[#c7923685] shadow-inner"
                : "text-[#353535] border-transparent hover:backdrop-blur-sm"
            }`
          }
        >
          MarketPlace
        </NavLink>
      </div>
      <div className=" flex gap-[1vw] items-center">
        <span className=" bg-oliveGreen text-white hover:brightness-90 px-[.95vw] py-[.3vh] flex items-center justify-center rounded-sm cursor-pointer transition-all">
          <NavLink to="/login">Login</NavLink>
        </span>

        <UserRound className=" aspect-square bg-[#e6e6e6fb] drop-shadow shadow-inner text-[#353535] hover:backdrop-blur-sm rounded-[50%] transition-all cursor-pointer p-1 scale-110 hover:scale-125" />
      </div>
    </div>
  );
};

export default Header;
