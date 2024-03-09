import { QuoteIcon } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" w-full h-full bg-green-400 relative flex justify-center items-center px-[5%] py-[5%]">
        <img
          src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className=" w-full h-full object-cover absolute z-0 brightness-90 "
        />
        <div className=" h-full w-full bg-gradient-to-b from-[#00000034] to-[#000000]  absolute select-none"></div>
        <div className=" h-[90%] w-[97%]  absolute z-20 flex flex-col">
          <div className=" h-[85%] w-full flex items-center ">
            <div className=" h-full flex-1">
              <div className="  h-[50%] pr-[25vw] text-white">
                <div className=" h-[55%] break-words font-WorkSans overflow-hidden text-[2.7vh]">
                  Our educational platform empowers farmers to learn valuable
                  skills, improve their operations, and achieve greater success.
                </div>
                <div className=" h-[45%] b flex">
                  <div className=" text-[10vh] bg-[#645e5e] p-[1vh] m-[1vh] rounded-full aspect-square flex items-center justify-center">
                    <QuoteIcon size={30} className=" -rotate-180" />
                  </div>
                  <div className=" flex items-center ml-[2vh] font-WorkSans text-[2.7vh] h-full">
                    <span className="bg-black px-[3vh] py-[1.5vh] rounded-3xl ">
                      Get Started Today
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-full flex-[.65]  flex flex-col justify-center items-center text-white">
              <div className=" h-[20%] w-full font-WorkSans flex items-center justify-start font-medium text-[3vh]">
                (+91)86478 52252
              </div>
              <div className=" h-[20%] w-full font-WorkSans font-normal flex items-center justify-start  text-[3vh]">
                Kolkata, West Bengal, India
              </div>
              <div className=" h-[60%] w-full  flex items-center gap-[5%] justify-start">
                <div className="  flex-1 h-full flex flex-col items-start  font-[300]">
                  <span className=" text-[2.5vh] font-WorkSans  h-[20%]">
                    Home
                  </span>
                  <span className=" text-[2.5vh] font-WorkSans  h-[20%]">
                    Cateagory
                  </span>
                  <span className=" text-[2.5vh] font-WorkSans  h-[20%]">
                    MarketPlace
                  </span>
                  <span className=" text-[2.5vh] font-WorkSans  h-[20%]">
                    Features
                  </span>
                  <span className=" text-[2.5vh] font-WorkSans  h-[20%]">
                    Contact
                  </span>
                </div>
                <div className="  flex-1 h-full flex flex-col items-start justify-center font-[300]">
                  <span className=" text-[2.5vh] font-WorkSans  h-[20%]">
                    Guide
                  </span>
                  <span className=" text-[2.5vh] font-WorkSans  h-[20%]">
                    Faqs
                  </span>
                  <span className=" text-[2.5vh] font-WorkSans  h-[20%]">
                    Terms
                  </span>
                  <span className=" text-[2.5vh] font-WorkSans  h-[20%]">
                    Privacy Policy
                  </span>
                  <span className=" text-[2.5vh] font-WorkSans  h-[20%]"></span>
                </div>
                <div className="  flex-1 h-full flex flex-col items-start justify-center font-[300]">
                  <span className=" text-[2.5vh] font-WorkSans  h-[20%]">
                    Facebook
                  </span>
                  <span className=" text-[2.5vh] font-WorkSans  h-[20%]">
                    Instagram
                  </span>
                  <span className=" text-[2.5vh] font-WorkSans  h-[20%]">
                    Twitter
                  </span>
                  <span className=" text-[2.5vh] font-WorkSans  h-[20%]"></span>
                  <span className=" text-[2.5vh] font-WorkSans  h-[20%]"></span>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex items-center h-[15%] w-full justify-start">
            <span className=" text-[#f8f5f5] font-medium font-WorkSans text-base">
              © 2021 AgroTech. All rights reserved.
            </span>
          </div>
        </div>
        {/* <div className=" h-[10vh] w-full bg-[#285a1e7a] flex justify-center absolute items-center z-20">
          <span className=" text-white font-WorkSans text-2xl">
            © 2021 AgroTech. All rights reserved.
          </span>
        </div> */}
      </div>
    </>
  );
};

export default Footer;
