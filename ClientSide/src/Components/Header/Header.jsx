import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-[#dfb05e9c] px-[3vw]  absolute w-full flex font-NunitoSans text-lg text-[#2b1c1c] font-[570] justify-around items-center drop-shadow-md">
      <NavLink
        to="/"
        className={({ isActive }) =>
          ` px-[1.5vw] py-[1.2vh] rounded-[0.5vw] transition-all${
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
          `  px-[1.5vw] py-[1.2vh] rounded-[0.5vw]  ${
            isActive
              ? "bg-[#c7923685] shadow-inner"
              : "text-[#353535] border-transparent hover:backdrop-blur-sm"
          }`
        }
      >
        Catalouge
      </NavLink>
    </div>
  );
};

export default Header;
