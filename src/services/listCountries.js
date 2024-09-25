const URL = "http://localhost:3000";

export const searchCountries = async () => {
  try {
    const response = await fetch(`${URL}/countries`);
    const countries = await response.json();

    return countries;
  } catch (e) {
    throw new Error("Error fetching countries");
  }
};
