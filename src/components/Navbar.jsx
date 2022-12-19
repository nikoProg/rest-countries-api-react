import React, { useState, useContext } from "react";
import MoonIcon from "../assets/MoonIcon";
import SunIcon from "../assets/SunIcon";
import ModeContext from "../context/ModeContext";

const Navbar = () => {
  const { mode, setMode } = useContext(ModeContext);

  const handleMode = () => {
    setMode((prev) => !prev);
  };

  return (
    <nav
      className={`${mode ? "bg-white" : "bg-dark-darkBlue"} ${
        mode ? "text-light-veryDarkBlue" : "text-white"
      } flex justify-between items-center transition-all duration-500 px-[80px] py-[25px]`}
    >
      <div className="left">
        <h1 className="text-2xl font-[800]">Where in the world?</h1>
      </div>
      <div
        onClick={handleMode}
        className="right flex items-center space-x-3 cursor-pointer"
      >
        {mode ? (
          <>
            <MoonIcon />
            <p className="font-[800]">Dark Mode</p>
          </>
        ) : (
          <>
            <SunIcon />
            <p className="font-[600]">Light Mode</p>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
