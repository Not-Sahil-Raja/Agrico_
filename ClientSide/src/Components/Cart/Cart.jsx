import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "./CartCard";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  return (
    <>
      <div className=" bg-[#fffff2] w-full h-[100vh] overflow-hidden pt-[9vh] px-[1vw] pb-[2vh] select-none">
        <div className=" flex w-full h-[full] ">
          <div className=" flex-1  h-[88vh]">
            <div className="  flex-col  h-[88vh] px-[4vw] py-[2vh]">
              <div className=" h-[60%] bg-[#0000000e] shadow-inner rounded-lg backdrop-blur-md py-[3vh] relative px-[5vw]  overflow-y-scroll scrollbar-hide">
                <div className=" text-xl font-Archivo font-semibold pl-[.2vw] ">
                  Order Summary
                </div>
                {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <CartCard key={index} item={item} />
                  ))
                ) : (
                  <></>
                )}
              </div>
              <div className=" bg-[#d8d8d8] mt-[3vh] h-[35%] w-full rounded-lg">
                Reviews for the supp
              </div>
            </div>
          </div>
          <div className="  flex-1 px-[1vw] py-[2vh] flex items-center justify-center">
            <div className="  bg-[#d8d8d87a] rounded-md border-2 border-[#c4c4c498] shadow-inner h-[97%] w-[65%] m-[1vw] flex flex-col px-[1vw] py-[1vh]">
              <span className="">Payment Details</span>
              <span>Complete your purchase by providing payment details</span>
              <form
                action=""
                className="  pt-[1vh] h-full flex flex-col justify-between px-[2vw] pb-[5vh] w-full rounded-md"
              >
                <div className=" h-[70%] flex flex-col justify-evenly px-[.3vw]">
                  <div className=" flex w-full justify-evenly">
                    <div>
                      <input type="radio" value="Gpay" id="Gpay" />
                      <label htmlFor="Gpay">Gpay</label>
                    </div>
                    <div>
                      <input type="radio" value="PhonePe" id="PhonePe" />
                      <label htmlFor="PhonePe">PhonePe</label>
                    </div>
                    <div>
                      <input type="radio" value="COD" id="COD" />
                      <label htmlFor="COD">COD</label>
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className=" w-full"
                    />
                  </div>
                  <div className=" flex gap-[1vw]  w-full  justify-evenly ">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className=" w-1/2 "
                    />
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="w-1/2 "
                    />
                  </div>
                  <div className="flex gap-[1vw]  w-full  justify-evenly">
                    <input
                      type="text"
                      placeholder="Address"
                      className=" w-1/2 "
                    />
                    <input
                      type="text"
                      placeholder="LandMark"
                      className=" w-1/2"
                    />
                  </div>
                </div>

                <div>
                  <div className=" flex flex-col font-Archivo border-t pt-[2vh] border-[#202020] text-sm">
                    <span>SubTotal:</span>
                    <span>Discount:</span>
                    <span>Delivery Charges:</span>
                    <span className=" text-base font-semibold">Total:</span>
                  </div>
                  <div className="">
                    <input
                      type="submit"
                      className=" bg-black text-[white] font-Archivo rounded-md mt-[2vh] p-[1vh] w-full cursor-pointer hover:bg-[#111010] transition-all"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
