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
        <Link to="/" className="back-link">
            <span>&larr;</span> Back
          </Link>
        {isLoading ? (
          <h2 animate={{ opacity: 1 }} className="searching">
            Searching...
          </h2>
        ) : (<>
          <section className="flag-section">
            <img className="flag-img" src={country.flag} alt={`flag of ${country.name}`} />
          </section>
          <section className="info-section">
            <h1 style={{ fontWeight: "bold", fontSize: "60px" }}>{country.name}</h1>
            <p> Native name: {country.nativeName}</p>
            <p> Population: {country.population.toLocaleString()}</p>
            <p> Region: {country.region}</p>
            <p> Sub Region: {country.subregion}</p>
            {/* <p> Capital: {country.capital ?? ""}</p> */}
            { country.capital ? ( <p>Capital: {country.capital}</p>) : (<p style={{fontWeight: "bold"}}>NO CAPITAL</p>)}

            <p> Top Level Domain: {country.topLevelDomain}</p>
            {/* <p> Currencies: {country.currencies[0].name ?? ""}</p> */}
            { country.currencies ? ( <p>Currencies: {country.currencies[0].name}</p> ) : (<p style={{fontWeight: "bold"}}>NO CURRENCIES</p>)}
            <p> Languages: {country.languages[0].name}</p>
          </section>

          <p>Border Countries:</p> 
          
          {country.borders?.length ? (
                  country.borders.map((country, index) => (
                    <Link
                      key={index}
                      className="border-country"
                      to={`/${country}`}
                    >
                      <span>  {country}  </span>
                    </Link>
                  ))
                ) : (
                  <p>NONE</p>
          )}
         
          
          
          
        </>
        )
        }

      </>

    );
}
 
export default Country;