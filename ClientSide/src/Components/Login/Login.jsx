import React from "react";
import { MoveRight } from "lucide-react";

const Login = () => {
  return (
    <>
      <div className=" bg-[#fffff2] w-full h-[100vh] overflow-hidden pt-[9vh]">
        <div className=" w-full flex">
          <div className="  w-1/2 h-[91vh] px-[3vw] py-[5vh] flex flex-col justify-center items-center">
            <div className=" flex flex-col mb-[20vh]">
              <span className=" mx-auto">
                Largest Farmer's Education Platform
              </span>
              <span className=" text-5xl">From Seed to Harvest.</span>
            </div>
            <div className="flex flex-col gap-[1.2vh]">
              <span className=" text-[#3f3f3f]  ">Don't Have an Account</span>
              <span className=" flex gap-2 justify-center items-center border-b border-b-[black] cursor-pointer">
                Create account <MoveRight className=" w-[1.5vw]" />
              </span>
            </div>
          </div>
          <div className="  w-1/2 h-[91vh] px-[2vw] py-[3vh]">
            <div className=" bg-slate-200 h-full rounded-lg overflow-hidden relative">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1602867741746-6df80f40b3f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className=" w-full h-[90vh] object-cover object-center brightness-50 absolute"
                />
              </div>
              <div className=" absolute text-[5vw] top-1/2 left-1/2 text-[#ffffffd2] [transform:translate(-50%,-240%)] whitespace-nowrap ">
                Welcome Back.
              </div>
              <div className=" z-20 bg-[#ffffffdc] absolute top-1/2 left-1/2 [transform:translate(-50%,-40%)] w-1/2 h-2/3 rounded-md  drop-shadow-md">
                <form action="">
                  <div className=" flex flex-col  px-5 py-5 justify-around h-[56vh] ">
                    <div className="  ">
                      <span className=" text-2xl">Login</span>
                    </div>
                    <div className=" h-[30vh] bg-green-400  flex flex-col justify-evenly">
                      <div className=" w-full flex flex-col bg-orange-300">
                        <span className=" text-sm">Email</span>
                        <input
                          type="text"
                          className=" border-b border-[#3f3f3f] focus:outline-none bg-transparent"
                        />
                      </div>
                      <div className=" w-full flex flex-col">
                        <span className=" text-sm">Password</span>
                        <input
                          type="password"
                          className=" border-b border-[#222222] focus:outline-none bg-transparent"
                        />
                      </div>
                    </div>

                    <input
                      type="submit"
                      value="Login"
                      className=" bg-[#000000] text-[#fffff2] py-2 rounded-lg cursor-pointer hover:bg-[#203121] transition-all duration-300 ease-in-out hover:shadow-inner focus:outline-none"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
