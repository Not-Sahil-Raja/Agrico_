import React from "react";
import { Search, MoveRight } from "lucide-react";
import { useState } from "react";

const Resource = () => {
  const [marType, setMarType] = useState(0);
  console.log(marType);
  return (
    <>
      <div className="   bg-[#fffff2] w-full h-[100vh]  overflow-hidden">
        <div className=" w-full h-[40vh] bg-slate-300 overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1530267981375-f0de937f5f13?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" w-[100vw] h-[50vh] object-cover brightness-[.3] absolute  z-0"
          />

          <div className=" absolute z-20 top-1/2 left-1/2  text-[white] w-[50%] h-[25vh]  [transform:translate(-50%,-30%)] flex-col flex items-center justify-around">
            <div className=" text-center">
              <div className=" text-2xl font-semibold font-NunitoSans">
                Find What You Want
              </div>
              <div className=" text-[#ffffffc0]">
                You can find products available near you
              </div>
            </div>
            <div className=" w-[30vw] flex bg-[white] py-[.75vh] px-[.5vw] items-center rounded-lg gap-[.3vw]">
              <div>
                <Search className=" scale-[.80] text-[#3d3232]" />
              </div>
              <input
                type="text"
                placeholder="Search for products"
                className="  h-[3vh] w-full bg-transparent border-none text-[#3d3232] font-NunitoSans focus:outline-none px-[.5vw]"
              />
            </div>
            <div className=" my-[.6vh]">
              <button className=" px-[.8vw] font-NunitoSans border-2 rounded-2xl flex items-center justify-center hover:bg-[#0000008c]">
                Search
                <MoveRight className=" scale-75" />
              </button>
            </div>
          </div>
        </div>

        {/* marketPlace */}
        <div className="  relative overflow-y-scroll h-[60vh] scrollbar-hide px-[1vw] py-[2vh]">
          <div className=" absolute w-[92vw] left-[4%] py-[1vh] z-40  flex items-center backdrop-blur-md rounded-3xl">
            <div className=" flex px-[2vw] gap-[.5vw] justify-around w-[35vw]">
              <div
                className={` px-[1vw] py-[.8vh] rounded-lg border border-[#3f3838] transition-all  font-medium whitespace-nowrap cursor-pointer ${
                  marType === 0
                    ? "bg-[#3f3838] shadow-inner text-[#ffffff] "
                    : "hover:backdrop-blur-sm "
                }`}
                onClick={() => setMarType(0)}
              >
                All
              </div>
              <div
                className={` px-[1vw] py-[.8vh] rounded-lg border border-[#3f3838] transition-all  font-medium whitespace-nowrap cursor-pointer ${
                  marType === 1
                    ? "bg-[#3f3838] shadow-inner text-[#ffffff] "
                    : "hover:backdrop-blur-sm "
                }`}
                onClick={() => setMarType(1)}
              >
                Offline Market
              </div>
              <div
                className={` px-[1vw] py-[.8vh] rounded-lg border border-[#3f3838] transition-all  font-medium whitespace-nowrap cursor-pointer ${
                  marType === 2
                    ? "bg-[#3f3838] shadow-inner text-[#ffffff] "
                    : "hover:backdrop-blur-sm "
                }`}
                onClick={() => setMarType(2)}
              >
                Amazon
              </div>
              <div
                className={` px-[1vw] py-[.8vh] rounded-lg border border-[#3f3838] transition-all  font-medium whitespace-nowrap cursor-pointer ${
                  marType === 3
                    ? "bg-[#3f3838] shadow-inner text-[#ffffff] "
                    : "hover:backdrop-blur-sm "
                }`}
                onClick={() => setMarType(3)}
              >
                Flipkart
              </div>
            </div>
            <div className=" ml-auto py-[.2vh] px-[.5vw] rounded-lg bg-[#e9e9e9] drop-shadow-md  mx-[2vw] flex justify-around items-center gap-[1vw]">
              <img
                src=" https://images.unsplash.com/photo-1612736231323-e7bcba8fcbaf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className=" w-[2.3rem] h-[2.3rem] object-cover rounded-lg"
              />
              <div className=" flex flex-col  flex-[2] text-sm font-medium">
                <p>Need Help? </p>
                <span>Ask a specalist</span>
              </div>
            </div>
          </div>
          <div className="  w-full h-[55vh] pt-[10vh] overflow-hidden relative">
            <div
              className={`h-[80vh] w-full bg-green-400 overflow-y-scroll scrollbar-hide text-3xl absolute transition-all   ${
                marType === 0 ? "left-[0%]  delay-0" : "left-[100%] delay-100"
              }  `}
            >
              All
            </div>
            <div
              className={`h-[80vh] w-full bg-green-500 overflow-y-scroll scrollbar-hide text-3xl absolute  transition-all ${
                marType === 1 ? "left-[0%] delay-0" : "left-[100%] delay-100"
              }`}
            >
              Offline
            </div>
            <div
              className={`h-[80vh] w-full bg-green-600 overflow-y-scroll scrollbar-hide text-3xl absolute transition-all ${
                marType === 2 ? "left-[0%] delay-0" : "left-[100%] delay-100"
              }`}
            >
              Amazon
            </div>
            <div
              className={`h-[80vh] w-full bg-green-700 overflow-y-scroll scrollbar-hide text-3xl absolute  transition-all ${
                marType === 3 ? "left-[0%] delay-0" : "left-[100%] delay-100"
              }`}
            >
              Flipkart
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resource;
