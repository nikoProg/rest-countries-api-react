import { createContext, useState, useEffect } from "react";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {

  const [countries, setCountries] = useState([]);  

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      const log = await console.log(data[0].name, data[0].population, data[0].region, data[0].capital, data[0].flag);
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let mounted = true;
    fetchCountries().then((items) => {
      if (mounted) {
        fetchCountries(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return <CountriesContext.Provider value={{countries, setCountries}}>
            {children}
        </CountriesContext.Provider>;
};

export default CountriesContext;
