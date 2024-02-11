import React from "react";

function Item(props) {
  return (
    <div
      className={
        " flex items-end justify-center w-[20%] h-[30%] rounded-xl cursor-pointer bg-cover bg-no-repeat text-black font-bold text-lg overflow-hidden flex-row relative hover:text-xl hover:text-white hover:items-center hover:shadow-lg hover:shadow-black"
      }
    >
      <div className=" bg-black z-10 w-full h-full absolute opacity-0 hover:opacity-50"></div>
      <img src={props.back} alt="" className="absolute z-0" />
      <div className=" z-20">Catagory {props.cat} </div>
    </div>
  );
}

export default Item;
