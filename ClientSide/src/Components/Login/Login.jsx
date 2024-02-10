import React, { useState } from "react";
import { MoveRight } from "lucide-react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);
  const [userName, setUserName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const loginCheck = (e) => {
    //need to add the backend code here
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };
  const registerCheck = (e) => {
    e.preventDefault();

    const userdata = {
      username: userName,
      email: email,
      phno: phoneNo,
      password: password,
    };

    axios
      .post("http://localhost:3000/postallusers", userdata)
      .then(() => {
        setUserName("");
        setEmail("");
        setPhoneNo("");
        setPassword("");
        console.log(userName, email, phoneNo, password);
      })
      .catch((e) => {
        console.log("Unable to post", e);
      });
  };

  return (
    <>
      <div className=" bg-[#fffff2] w-full h-[100vh] overflow-hidden pt-[9vh] select-none">
        <div className=" w-full flex">
          <div className="  w-1/2 h-[91vh] px-[3vw] py-[5vh] flex flex-col justify-center items-center">
            <div className=" flex flex-col mb-[20vh] relative ">
              <span className=" mx-auto font-Archivo text-[#202020d7]">
                Largest Farmer's Education Platform
              </span>
              <span className=" text-5xl z-20 font-Archivo">
                From Seed to Harvest.
              </span>
              <div className=" bg-[#c3ff7f] w-[20vw] h-[5vh] absolute  top-[70%] left-[5vw] z-0"></div>
            </div>
            <div className="flex flex-col gap-[1.2vh]">
              <span className=" text-[#3f3f3f] font-Montserrat ">
                Don't Have an Account
              </span>
              <span
                className=" flex gap-2 justify-center items-center border-b border-b-[black] cursor-pointer font-Montserrat font-semibold"
                onClick={() => setLogin(!login)}
              >
                {login ? <>Create account </> : <>Login</>}
                <MoveRight
                  className={`w-[1.3vw] transition-all ${
                    login ? "" : "-rotate-45"
                  }`}
                />
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

              <div className=" absolute text-[5vw] top-1/2 left-1/2 text-[#ffffffc2] [transform:translate(-50%,-240%)] whitespace-nowrap  font-Archivo font-semibold">
                Welcome Back.
              </div>
              <div
                className={` z-20 bg-[#ffffffdc] absolute top-1/2 left-1/2 w-[19vw] h-[45vh] rotate-45 lg:rounded-md font-Montserrat  transition-transform
                 ${
                   login
                     ? " [transform:translate(-50%,-40%)] "
                     : "[transform:translate(-250%,-40%)] opacity-50 "
                 }`}
              >
                <form onSubmit={loginCheck}>
                  <div className=" flex flex-col  px-[2vw] py-[3vh] justify-evenly  h-[45vh] ">
                    <div className="  ">
                      <span className=" text-3xl font-semibold">Login</span>
                    </div>
                    <div className=" h-[30vh]   flex flex-col justify-center font-Epilogue ">
                      <div className=" w-full flex flex-col  h-1/3 justify-center ">
                        <span className=" text-base font-medium">Email</span>
                        <input
                          type="email"
                          className=" border-b border-[#3f3f3f] focus:outline-none bg-transparent"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <div className=" w-full flex flex-col h-1/3 justify-center">
                        <span className=" text-base font-medium">Password</span>
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
                      className=" bg-[#000000] text-[#fffff2] py-2 rounded cursor-pointer hover:bg-[#0f110f] transition-all duration-300 ease-in-out hover:shadow-inner focus:outline-none"
                    />
                  </div>
                </form>
              </div>

              <div
                className={` z-20 bg-[#ffffffdc] absolute top-1/2 left-1/2 w-[19vw] h-[55vh] lg:rounded-md font-Montserrat  transition-transform
                 ${
                   login
                     ? "[transform:translate(250%,-40%)] opacity-50  "
                     : " [transform:translate(-50%,-40%)]"
                 }`}
              >
                <form onSubmit={registerCheck}>
                  <div className=" flex flex-col  px-[2vw] py-[2vh] justify-around h-[55vh] ">
                    <div className=" mb-[2vh]">
                      <span className=" text-2xl font-semibold">Register</span>
                    </div>
                    <div className=" h-[30vh]   flex flex-col justify-evenly font-Epilogue  gap-[1.2vh]">
                      <div className=" w-full flex flex-col   justify-center ">
                        <span className=" text-sm font-semibold">
                          User Name
                        </span>
                        <input
                          type="text"
                          className=" border-b border-[#3f3f3f] focus:outline-none bg-transparent h-[3vh]"
                          value={userName}
                          onChange={(e) => {
                            setUserName(e.target.value);
                          }}
                        />
                      </div>
                      <div className=" w-full flex flex-col  h-[vh] justify-center ">
                        <span className=" text-sm font-semibold">Email</span>
                        <input
                          type="email"
                          className=" border-b border-[#3f3f3f] focus:outline-none bg-transparent h-[3vh]"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <div className=" w-full flex flex-col h-[vh] justify-center">
                        <span className=" text-sm font-semibold">PhoneNo</span>
                        <input
                          type="phone"
                          className=" border-b border-[#222222] focus:outline-none bg-transparent h-[3vh]"
                          value={phoneNo}
                          onChange={(e) => {
                            setPhoneNo(e.target.value);
                          }}
                        />
                      </div>
                      <div className=" w-full flex flex-col h-[vh] justify-center">
                        <span className=" text-sm font-semibold">Password</span>
                        <input
                          type="password"
                          className=" border-b border-[#222222] focus:outline-none bg-transparent h-[3vh]"
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
                      className=" bg-[#000000] text-[#fffff2] py-2 rounded cursor-pointer hover:bg-[#0f110f] transition-all duration-300 ease-in-out hover:shadow-inner focus:outline-none"
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
