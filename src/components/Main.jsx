import React, { useContext, useState } from "react";
import SearchWhite from "../assets/SearchWhite";
import Search from "../assets/Search";
import ModeContext from "../context/ModeContext";
import Chevron from "../assets/Chevron";
import ChevronWhite from "../assets/ChevronWhite";
import ChevronUp from "../assets/ChevronUp";
import ChevronUpWhite from "../assets/ChevronUpWhite";
import Countries from "./Countries";

const Main = () => {
  const { mode } = useContext(ModeContext);
  const [region, setRegion] = useState(false);

  const toggleRegion = () => {
    setRegion((prev) => !prev)
  }

  return (
    <main
      className={`${mode ? "bg-white" : "bg-dark-veryDarkBlue"} ${
        mode ? "text-light-veryDarkBlue" : "text-white"
      } transition-all duration-500  px-[80px] py-[40px]`}
    >
      <div className="top flex justify-between items-center">
        <div className="input relative">
          {mode ? (
            <>
              <Search />
              <input
                className="bg-white font-[600] px-[100px] py-[15px] rounded-md shadow-lg transition-all duration-500 focus:opacity-50 focus:outline-0"
                type="text"
                placeholder="Search for a country..."
              />
            </>
          ) : (
            <>
              <SearchWhite />
              <input
                className="bg-dark-darkBlue text-white font-[600] px-[100px] py-[15px] rounded-md shadow-lg transition-all duration-1000 focus:opacity-50 focus:outline-0"
                type="text"
                placeholder="Search for a country..."
              />
            </>
          )}
        </div>

        {mode ? (
          <>
            <div className="filter w-[250px] flex items-center space-x-14 bg-white text-light-veryDarkBlue px-[30px] py-[15px] rounded-md shadow-lg transition-all duration-500">
              <button onClick={toggleRegion}>Filter by Region</button>
              {region ? <Chevron/> : <ChevronUp/>}
            </div>
          </>
        ) : (
          <>
            <div className="filter w-[250px] flex items-center space-x-14 bg-dark-darkBlue text-white px-[30px] py-[15px] rounded-md shadow-lg transition-all duration-500  hover:opacity-50">
              <button onClick={toggleRegion}>Filter by Region</button>
              {region ? <ChevronWhite/> : <ChevronUpWhite/>}
            </div>
          </>
        )}
      </div>

      {mode ? (
        <>
          <div className={`${region ? "block" : "hidden"} region w-[250px] bg-white text-light-veryDarkBlue mt-2 px-[30px] py-[15px] rounded-md shadow-lg translate-x-[511%] transition-all duration-500`}>
            <ul className="space-y-2">
              <li>
                <a href="#">Africa</a>
              </li>
              <li>
                <a href="#">America</a>
              </li>
              <li>
                <a href="#">Asia</a>
              </li>
              <li>
                <a href="#">Europe</a>
              </li>
              <li>
                <a href="#">Oceania</a>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className={`${region ? "block" : "hidden"} region w-[250px] bg-dark-darkBlue text-white mt-2 px-[30px] py-[15px] rounded-md shadow-lg translate-x-[511%] transition-all duration-500`}>
            <ul className="space-y-2">
              <li>
                <a href="#">Africa</a>
              </li>
              <li>
                <a href="#">America</a>
              </li>
              <li>
                <a href="#">Asia</a>
              </li>
              <li>
                <a href="#">Europe</a>
              </li>
              <li>
                <a href="#">Oceania</a>
              </li>
            </ul>
          </div>
        </>
      )}

      <div className="bottom pt-[40px] flex flex-wrap justify-between">
        <Countries/>
      </div>
    </main>
  );
};

export default Main;
