import React, { useContext, useState } from "react";

import Login from "./Login";
import Registration from "./Registration";
const Authenticatio = () => {
  return (
    <div id="login" className="bg-green/30">
      <div className="full-width flex">
        <div className="hidden flex-[1.2] lg:block">
          <img
            className="ml-[200px] w-[850px]"
            src="assets/signin.png"
            alt="Agon"
          />
        </div>
        <div className="flex-1 bg-bg-2 text-center grid place-items-center py-[50px]">
          <div className="max-w-[800px]">
            <h2 className="font-bold font-chivo text-[40px] leading-[30px] md:text-heading-3 mb-[50px]">
              Welcome back.
            </h2>
            <button type="button">
              <div className="flex items-center z-10 relative transition-all duration-200 group py-[13px] md:px-[120px] px-[80px] rounded-md bg-white text-gray-500 hover:text-gray-900 flex-row-reverse w-fit mb-[30px]">
                <span className="block text-inherit w-full h-full rounded-md text-md font-chivo font-semibold">
                  Sign In with Google
                </span>
                <img
                  className="mr-5"
                  src="assets/images/icons/Icon-google.svg"
                  alt="google icon"
                />
              </div>
            </button>
            <div className="flex items-center justify-center gap-[7px] mb-[25px]">
              <div className="bg-gray-300 w-[50px] h-[2px]"></div>
              <p className="text-text text-gray-500">
                Or, sign in with your email
              </p>
              <div className="bg-gray-300 w-[50px] h-[2px]"></div>
            </div>
            
            {/* <Login /> */}
            <Registration/>
          </div>
        </div>
      </div>

      <div
        className="bg fixed bottom-28 rounded-full grid place-items-center opacity-0 invisible transition-all duration-300 right-[20px] z-[9999] w-[48px] h-[48px]"
        id="backToTop"
      >
        <a
          className="rounded-full bg-green-900 grid place-items-center w-[48px] h-[48px]"
          href="#top"
        >
          <img src="assets/images/icons/icon-up.svg" alt="to top icon" />
        </a>
      </div>
    </div>
  );
};

export default Authenticatio;
