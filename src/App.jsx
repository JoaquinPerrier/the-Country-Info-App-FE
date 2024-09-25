import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import { fetchAllCountriesData, fetchCountryData } from "./hooks/useCallApi.js";
import { CountryList } from "./components/CountryList/CountryList.jsx";
import { CountryData } from "./components/CountryData/CountryData.jsx";
import "./App.css"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // All countries state
  const [countryList, setCountryList] = useState([])

  // When the user clicks on one Country, it fetchs the data
  const [selectedCountryCode, setSelectedCountryCode] = useState("")
  const [countryData, setCountryData] = useState({commonName:"empty"})

  useEffect(() => {
    fetchAllCountriesData(setCountryList)
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if(selectedCountryCode !=""){
    fetchCountryData(selectedCountryCode, setCountryData)
    }
  }, [selectedCountryCode]);
  

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
    <header>
      <h1 className="center-text">Full-Stack JS engineer test assessment - the Country Info App</h1>
    </header>
      <main>
      <CountryList countries={countryList} setSelectedCountryCode={setSelectedCountryCode}/>
      <CountryData countryData={countryData} setSelectedCountryCode={setSelectedCountryCode}/>
      </main>
    </>
  );
}

export default App;