const URL = "http://localhost:3000";

export const searchCountryData = async (selectedCountryCode) => {
  try {
    const response = await fetch(`${URL}/country-info/${selectedCountryCode}`);
    const countries = await response.json();

    return countries;
  } catch (e) {
    throw new Error("Error fetching countries");
  }
};
