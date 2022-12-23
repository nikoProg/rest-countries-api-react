import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { CountriesProvider } from "./context/CountriesContext";
import { ModeProvider } from "./context/ModeContext";
import Country from "./components/Country";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";

const App = () => {
  return (
    <>
      <CountriesProvider>
        <ModeProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/:alpha3Code' element={<Country />} />
            </Routes>
          </Router>
          <Footer />
        </ModeProvider>
      </CountriesProvider>
    </>
  );
};

export default App;
