import React, { useState } from "react";
import { MoveRight } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className=" bg-[#fffff2] w-full h-[100vh] overflow-hidden pt-[9vh] select-none">
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
              <div className=" absolute text-[5vw] top-1/2 left-1/2 text-[#ffffffc2] [transform:translate(-50%,-240%)] whitespace-nowrap ">
                Welcome Back.
              </div>
              <div className=" z-20 bg-[#ffffffdc] absolute top-1/2 left-1/2 [transform:translate(-50%,-40%)] w-1/2 h-2/3 rounded-md  drop-shadow-md">
                <form action="">
                  <div className=" flex flex-col  px-5 py-5 justify-around h-[56vh] ">
                    <div className="  ">
                      <span className=" text-2xl">Login</span>
                    </div>
                    <div className=" h-[30vh]   flex flex-col justify-evenly">
                      <div className=" w-full flex flex-col  h-1/2 justify-center">
                        <span className=" text-sm font-medium">Email</span>
                        <input
                          type="email"
                          className=" border-b border-[#3f3f3f] focus:outline-none bg-transparent"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <div className=" w-full flex flex-col h-1/2 justify-center">
                        <span className=" text-sm font-medium">Password</span>
                        <input
                          type="password"
                          className=" border-b border-[#222222] focus:outline-none bg-transparent"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <input
                      type="submit"
                      value="Login"
                      className=" bg-[#000000] text-[#fffff2] py-2 rounded-lg cursor-pointer hover:bg-[#0f110f] transition-all duration-300 ease-in-out hover:shadow-inner focus:outline-none"
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
