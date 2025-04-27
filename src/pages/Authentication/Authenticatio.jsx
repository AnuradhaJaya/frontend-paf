import React, { useContext, useState } from "react";

import Login from "./Login";
import Registration from "./Registration";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/HomePage";
const Authenticatio = () => {
  return (
    <di>
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
              <Routes>
                <Route path="/" element={<Home />} />
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
            className="rounded-full bg-green-900 grid place-items-center w-[48px] h-[48px]"
            href="#top"
          >
            <img src="assets/images/icons/icon-up.svg" alt="to top icon" />
          </a>
        </div>
      </div>
    </di>
  );
};

export default Authenticatio;
