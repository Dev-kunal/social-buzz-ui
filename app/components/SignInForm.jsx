"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import EyeIcon from "../assets/EyeIcon";
import RightArrow from "../assets/RightArrow";

export default function SignInForm(props) {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <div className="w-[100vw] h-[100vh]">
        <div>
          <button className="bg-[#131319] p-1 rounded-full">
            {/* <CrossIcon /> */}
          </button>
          <div className="border-2 border-[#656565] bg-[#27292d] text-white max-w-md rounded-[1.3rem] p-4 sm:p-8 flex-col mx-auto mt-8">
            <h3 className="text-sm mb-4 text-center text-[#656565] font-light">
              WELCOME BACK
            </h3>
            <h2 className="text-xl mb-8 text-center">Log into your account</h2>

            <form className="mx-auto ">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-[#7F8084]"
                >
                  Email or Username
                </label>
                <input
                  onChange={(e) =>
                    setUserData((data) => ({
                      ...data,
                      email: e.target.value,
                    }))
                  }
                  value={userData.email}
                  type="email"
                  id="email"
                  className="bg-transparent border border-[#656565] text-white text-sm outline-none rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                  placeholder="Enter your email or username"
                  required
                />
              </div>

              <div className="mb-5">
                <div className="flex justify-between">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-[#7F8084]"
                  >
                    Password
                  </label>
                  <span className="text-xs font-medium text-[#7F8084]">
                    Forgot password?
                  </span>
                </div>

                <div className="relative">
                  <input
                    onChange={(e) =>
                      setUserData((data) => ({
                        ...data,
                        password: e.target.value,
                      }))
                    }
                    value={userData.password}
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="bg-transparent border border-[#656565] text-white text-sm rounded-lg outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                    placeholder="Enter your password"
                    required
                  />

                  <button
                    type="button"
                    className={`absolute top-0 end-0 p-2.5 rounded-e-md underline text-xs ${
                      showPassword ? "text-white" : "text-[#656565]"
                    } `}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <EyeIcon />
                  </button>
                </div>
              </div>
              <div className="mt-8">
                <button
                  onClick={() => router.push("/posts")}
                  type="button"
                  className="text-white bg-[#4a96ff] font-normal w-[100%] rounded-md text-xs px-5 py-3 tracking-wider"
                >
                  Login now
                </button>
              </div>

              <div className="">
                <span className="text-xs text-[#656565]"></span>
                <a>
                  <span className="tracking-wider text-xs ml-2 inline-flex text-[#7F8084] items-center mt-4">
                    just hit on the above button to move ahead!
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
