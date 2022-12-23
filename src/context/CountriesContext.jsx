import { createContext, useState, useEffect } from "react";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {

  const [countries, setCountries] = useState([]);  
  const [isLoading, setIsLoading] = useState(true);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      const log = console.log("ALL COUNTRIES SUCCESSFULLY FETCHED");
      setCountries(data);
      setIsLoading(false);
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

  return <CountriesContext.Provider value={{countries, setCountries, isLoading, setIsLoading}}>
            {children}
        </CountriesContext.Provider>;
};

export default CountriesContext;
