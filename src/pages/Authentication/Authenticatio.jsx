import React, { useContext, useState } from "react";

import Login from "./Login";
import Registration from "./Registration";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/HomePage";
const Authenticatio = () => {
  return (
    <div>
      <div id="login" className="bg-transparent  w-full">
        <div className="full-width flex">
          <div className="hidden flex-[1.5] lg:block">
            <img
              className=" w-[850px] h-[100vh] object-cover"
              src="assets/signin.png"
              alt="Agon"
            />
          </div>
          <div className="flex-1 bg-bg-2 text-center grid place-items-center py-[50px]">
            <div className="max-w-[800px]">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
              </Routes>
            </div>
          </div>
        </div>

        <div
          className="bg fixed bottom-28 rounded-full grid place-items-center opacity-0 invisible transition-all duration-300 right-[20px] z-[9999] w-[48px] h-[48px]"
          id="backToTop"
        >
          <a
            className="rounded-full bg-blue-900 grid place-items-center w-[48px] h-[48px]"
            href="#top"
          >
            <img src="assets/images/icons/icon-up.svg" alt="to top icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Authenticatio;
