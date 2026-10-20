async function getCountryInfo(name) {
  const response = await fetch(
    "https://restcountries.com/v3.1/name/" + name
  );

  const data = await response.json();

  // Check if the country exists
  if (!data || data.status === 404) {
    console.log("Country not found");
    return;
  }

  const country = data[0];

  // Set a default currency
  let currency = "Unknown";

  // Check if the country has a currency
  if (country.currencies) {
    currency = Object.values(country.currencies)[0].name;
  }

  return {
    name: country.name.common,
    capital: country.capital?.[0] ?? "Unknown",
    population: country.population.toLocaleString(),
    region: country.region,
    currency: currency
  };
}

async function displayCountries() {
  console.log(await getCountryInfo("Nigeria"));
  console.log(await getCountryInfo("Canada"));
}

displayCountries();