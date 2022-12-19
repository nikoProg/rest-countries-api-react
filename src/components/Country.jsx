import React, { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";
import ModeContext from "../context/ModeContext";

const Country = () => {
    const { alpha3Code } = useParams();

    //cathycode
    const [country, setCountry] = useState([]);
    const [borderCountries, setBorderCountry] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let { name } = useParams();
    
    const fetchCountryData = async (alpha3Code) => {
      try {
        console.log(alpha3Code);
        const url = `https://restcountries.com/v2/alpha/${alpha3Code}`;
        const response = await fetch(url);
        const data = await response.json();
        const log = await console.log(data.name, data.population, data.region, data.capital, data.flag);
        setCountry(data);
        data?.borders?.forEach((element) => {
          setBorderCountry((element) => [...element, element]);
          console.log(element);
          console.log(borderCountries);
        });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      window.scroll(0, 0);
      fetchCountryData(alpha3Code);
    }, []);

    
    //cathycode


    return (
        <>
            <img className="flag-img" src={country.flag} alt="SVG image" />
            <h1> NAME { country.name }</h1>
            <p> REGION { country.region }</p>
            {/* {country && country.borders.forEach(element => {
              <p>{element}</p>
            })}  */}
        </>

    );
}
 
export default Country;