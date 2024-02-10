import React from "react";

const TopPickCard = ({ width, fsize }) => {
  return (
    <>
      <div
        className={` bg-amber-600 rounded w-[${width}%] relative text-${fsize}`}
      >
        <img
          src="https://images.unsplash.com/photo-1501430654243-c934cec2e1c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
          className=" w-full h-full object-cover rounded-lg brightness-75 absolute z-10"
        />
        <div className=" absolute z-20 text-[white] shadow-text bottom-0 left-[5%]">
          Wheat
        </div>
        <div className=" absolute z-20 text-[white] shadow-text bottom-0 right-[5%]">
          2000₹
        </div>
        <div className=" absolute z-20 text-[white] shadow-text top-0 right-[5%] ">
          name
        </div>
      </div>
    </>
  );
};

export default TopPickCard;
