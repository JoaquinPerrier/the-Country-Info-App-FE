import { searchCountries } from "../services/listCountries";
import { searchCountryData } from "../services/getCountryData";

export const fetchAllCountriesData = async (setCountryList) => {
  const countries = await searchCountries();

  setCountryList(countries);
};

export const fetchCountryData = async (selectedCountryCode, setCountryData) => {
  const countryData = await searchCountryData(selectedCountryCode);

  setCountryData(countryData);
};
