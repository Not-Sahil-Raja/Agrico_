import React from "react";

const CartCard = ({ item }) => {
  return (
    <>
      <div className=" bg-lightYellow flex justify-between items-center px-[2vw] py-[1vh] my-[1vh] rounded-md shadow-md bg-opacity-80 backdrop-blur-sm">
        <div className="w-[65%] overflow-hidden text-ellipsis">
          <div className=" font-Archivo font-semibold ">{item.itemName}</div>
          <div className=" text-sm ">{item.quantity}Kg</div>
        </div>
        <div className=" w-[35%] px-[1%] whitespace-nowrap flex justify-evenly">
          <span className=" px-[1vw] text-sm font-Archivo font-semibold">
            Price: {item.price}₹
          </span>
          <input
            className=" bg-slate-300 ml-auto"
            type="checkbox"
            value={item.price}
          />
        </div>
      </div>
    </>
  );
};

export default CartCard;
