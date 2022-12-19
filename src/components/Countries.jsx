import React, { useContext } from "react";
import CountriesContext from "../context/CountriesContext";
import ModeContext from "../context/ModeContext";

import { useParams, Link } from "react-router-dom";
import Country from "./Country";

const Countries = () => {
  const { countries } = useContext(CountriesContext);
  const { mode } = useContext(ModeContext);

  return (
    <>
      {countries.map((country, idx) => {
        return (
        <Link key={country.alpha3Code} to={`/${country.alpha3Code}`}>
          <section
            className="w-[300px] rounded-lg shadow-lg cursor-pointer basis-[21%] mb-[80px]"
            key={idx}
          >
            <div className="image h-[200px] w-[100%]">
              <img
                className="h-[100%] w-[100%] object-cover block rounded-t-lg"
                src={country.flag}
                alt="flag"
              />
            </div>
            <div
              className={`${
                mode ? "bg-white" : "bg-dark-darkBlue"
              } text pl-5 pb-10 rounded-b-lg transition-all duration-500`}
            >
              <h2 className="font-[600] text-xl py-6">{country.name}</h2>
              <div className="space-y-2">
                <p>
                  <span className="font-[600]">Population: </span>{" "}
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="font-[600]">Region: </span>
                  {country.region}
                </p>
                <p>
                  <span className="font-[600]">Capital: </span>{" "}
                  {country.capital}
                </p>
              </div>
            </div>
          </section>
          </Link>
        ); 
      })}  
    </>
  );
};

export default Countries;
