import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="  h-[30vh] text-sm  bg-[#fffffff6] rounded-lg flex flex-col justify-between items-center px-[2%] font-Montserrat font-semibold relative">
      <img
        src="https://images.unsplash.com/photo-1501430654243-c934cec2e1c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt={item.itemName + ".img"}
        className=" w-full h-full object-cover rounded-lg absolute z-10 brightness-90"
      />

      <div className=" font-semibold w-[90%] text-ellipsis top-[5%] text-[#3a3a3a] whitespace-nowrap overflow-hidden shadow-text absolute z-20">
        {item.itemName}
      </div>
      <div className="  whitespace-nowrap bottom-[5%] right-[5%] text-[#f3f3f3] absolute z-20 font-semibold shadow-text bg-[#00000093] px-[1vw] py-[.5%] rounded border border-[black]">
        {item.price} ₹
      </div>
      <div className=" whitespace-nowrap bottom-[5%] left-[5%] text-[#f3f3f3] absolute z-20 font-semibold shadow-text bg-[#201c1c93] px-[1vw] py-[.5%] rounded-md border border-[#1f1e1e]">
        {item.quantity} Kg
      </div>
    </div>
  );
};

export default ItemCard;
