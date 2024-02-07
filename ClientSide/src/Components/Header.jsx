import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" px-4">
      Header
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catlg">Catlg</NavLink>
    </div>
  );
};

export default Header;
