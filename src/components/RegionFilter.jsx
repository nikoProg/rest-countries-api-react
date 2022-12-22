import React, { useContext } from "react";
import ModeContext from "../context/ModeContext";

const RegionFilter = ({ onSelect }) => {
  const { mode } = useContext(ModeContext);

  const selectType = (event) => {
    const regionName = event.target.value;
    onSelect(regionName);
  };

  return (
    <>
      <select
        onChange={selectType}
        className={`${
          mode ? "bg-white" : "bg-dark-darkBlue"
        } w-[250px] px-[30px] py-[15px] outline-0 rounded-md shadow-lg border-0 cursor-pointer transition-all duration-500 focus:opacity-50 focus:outline-0 hover:opacity-50`}
        name="regionFilter"
      >
        <option>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </>
  );
};

export default RegionFilter;