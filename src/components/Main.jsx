import React, { useContext, useState } from "react";
import SearchIconWhite from "../assets/SearchIconWhite";
import SearchIcon from "../assets/SearchIcon";
import ModeContext from "../context/ModeContext";
import Chevron from "../assets/Chevron";
import ChevronWhite from "../assets/ChevronWhite";
import ChevronUp from "../assets/ChevronUp";
import ChevronUpWhite from "../assets/ChevronUpWhite";
import Countries from "./Countries";
import CountriesContext from "../context/CountriesContext";
import RegionFilter from "./RegionFilter";
import Search from "./Search";

const Main = () => {
  const { mode } = useContext(ModeContext);
  const { setCountries } = useContext(CountriesContext);
  //const [region, setRegion] = useState(false);


  const getCountryByRegion = async (regionName) => {
    try {
      const res = await fetch(`https://restcountries.com/v2/region/${regionName}`);
      if (!res.ok) throw new Error("Failed..........");
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      setError(false);
    }
  };

/*   const toggleRegion = () => {
    setRegion((prev) => !prev)
  } */

  return (
    <main
      className={`${mode ? "bg-white" : "bg-dark-veryDarkBlue"} ${
        mode ? "text-light-veryDarkBlue" : "text-white"
      } px-[20px] md:px-[80px] py-[40px]`}
    >
      <div className="top flex flex-col gap-10 xxl:gap-0 xl:flex-row xl:justify-between xl:items-center">
        
          {mode ? (
            <div className=" relative">
              <SearchIcon />
              {/* <input
                className="bg-white  font-[600] px-[100px] py-[15px] w-[100%] md:w-[500px] rounded-md shadow-lg transition-all duration-690 focus:opacity-50 focus:outline-0"
                type="text"
                placeholder="Search for a country..."
              /> */}
              <Search></Search>
            </div>
          ) : (
            <div className=" relative">
              <SearchIconWhite />
              {/* <input
                className="bg-dark-darkBlue text-white font-[600] px-[100px] py-[15px] w-[100%] md:w-[500px] rounded-md shadow-lg transition-all duration-1000 focus:opacity-50 focus:outline-0"
                type="text"
                placeholder="Search for a country..."
              />   */}
              <Search></Search>
            </div>
          )}
           <RegionFilter onSelect={getCountryByRegion} />

        {/* {mode ? (
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
                <div>Africa</div>
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
      )} */}

      </div>
        
      <div className="bottom pt-[40px] flex flex-wrap justify-between transition-all duration-500">
        <Countries/>
      </div>
    </main>
  );
};

export default Main;
