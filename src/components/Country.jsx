import React, { useEffect, useState, useContext } from "react";

import { useParams, Link } from "react-router-dom";
import ModeContext from "../context/ModeContext";

const Country = () => {
  const { alpha3Code } = useParams();
  const { mode } = useContext(ModeContext);

  const [country, setCountry] = useState([]);
  const [borderCountries, setBorderCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const fetchCountryData = async (alpha3Code) => {
    try {
      console.log(alpha3Code);
      const url = `https://restcountries.com/v2/alpha/${alpha3Code}`;
      const response = await fetch(url);
      const data = await response.json();
      const log = await console.log(data.name, data.population, data.region, data.capital, data.flag);
      setCountry(data);
      setBorderCountry(data?.borders);
      console.log(borderCountries);
      /* data?.borders?.forEach((element) => {
        // setBorderCountry((element) => [...element, element]);
        //setBorderCountry(data?.borders);
        console.log(element);
        console.log(borderCountries); 
      });*/
      // THIS PART IS FOR TRYING TO SHOW COUNTRY NAME INSTEAD OF ALPHA 3 CODE, BUT I HAD TROUBLES
      // I GET ERROR - CAN'T .map "UNDEFINED"
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // window.scroll(0, 0);
    fetchCountryData(alpha3Code);
  }, [alpha3Code]);




  return (
    <>
      {isLoading ? (
        <h2 animate={{ opacity: 1 }} className="searching">
          Searching...
        </h2>
      ) : (<>
        <div
          className={`${mode ? "bg-white" : "bg-dark-veryDarkBlue"} ${mode ? "text-light-veryDarkBlue" : "text-white"
            } px-[25px] lg:px-[70px] py-[20px] lg:h-[90vh] flex flex-col lg:flex-row lg:items-center lg:gap-[50px] transition-all duration-500`}
        >
          <section className="section-flag lg:max-w-[1000px] lg:max-h-[800px] space-y-10">
            <Link
              to="/"
              className={`${mode ? "bg-white" : "bg-dark-darkBlue"
                } py-2 px-10 rounded-md shadow-lg border-0 cursor-pointer`}>
              <span>&larr; </span> Back
            </Link>
            <section className="img lg:max-w-[50vw] lg:h-[50vh]">
              <img className="flag-img w-[100%] h-[100%] object-cover block" src={country.flag} alt={`flag of ${country.name}`} />
            </section>
          </section>

          <section>
            <h1 style={{ fontWeight: "bold", fontSize: "45px" }}>{country.name}</h1>
            <section className="section-info md:flex justify-between flex-col md:flex-row ">
              {/* I CANNOT MAKE THIS TAILWIND FLEX PROPERLY, I want a simple breakpoint medium and small, or medium and large, but it's buggy for row/column */}
              <section className="section-info-left space-y-2 ">
                <p> Native name: {country.nativeName}</p>
                <p> Population: {country.population.toLocaleString()}</p>
                <p> Region: {country.region}</p>
                <p> Sub Region: {country.subregion}</p>
                {country.capital ? (<p>Capital: {country.capital}</p>) : (<p style={{ fontWeight: "bold" }}>NO CAPITAL</p>)}
              </section>
              <section className="section-info-right space-y-2 py-[30px]">
                <p> Top Level Domain: {country.topLevelDomain}</p>
                {country.currencies ? (<p>Currencies: {country.currencies[0].name}</p>) : (<p style={{ fontWeight: "bold" }}>NO CURRENCIES</p>)}
                <p> Languages: {country.languages[0].name}</p>
              </section>
            </section>

            <section className="borders space-x-2 mb-12 mt-6 lg:mb-0 flex items-center flex-wrap">
              <p className="space-y-2">Border Countries:</p>

              {country.borders?.length ? (
                country.borders.map((country, index) => (
                  <Link
                    key={index}
                    className={`${
                      mode ? "bg-white" : "bg-dark-darkBlue"
                    } text-[12px] py-1 px-2 lg:px-8 mt-2 rounded-md shadow-lg cursor-pointer`}
                    to={`/${country}`}
                  >
                    <span>  {country}  </span>
                  </Link>
                ))
              ) : (
                <p>NONE</p>
              )}
            </section>
          </section>


        </div>
      </>
      )
      }
    </>

  );
}

export default Country;