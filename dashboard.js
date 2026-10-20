async function loadDashboard() {
  try {
    const [adviceResponse, catResponse, countryResponse] =
      await Promise.all([
        fetch("https://api.adviceslip.com/advice"),
        fetch("https://catfact.ninja/fact"),
        fetch("https://restcountries.com/v3.1/name/nigeria")
      ]);

    const adviceData = await adviceResponse.json();
    const catData = await catResponse.json();
    const countryData = await countryResponse.json();

    const dashboard = {
      advice: adviceData.slip.advice,
      fact: catData.fact,
      country: countryData[0].name.common,
      capital: countryData[0].capital[0]
    };

    console.log("===== Your Daily Dashboard =====");
    console.log("Advice :", dashboard.advice);
    console.log("Fact   :", dashboard.fact);
    console.log(
      "Country:",
      dashboard.country,
      "(capital:",
      dashboard.capital + ")"
    );
  } catch (error) {
    console.log("Something went wrong. Please try again later.");
  }
}

loadDashboard();



async function loadDashboard() {
  const start = Date.now();

  try {
    const [adviceResponse, catResponse, countryResponse] =
      await Promise.all([
        fetch("https://api.adviceslip.com/advice"),
        fetch("https://catfact.ninja/fact"),
        fetch("https://restcountries.com/v3.1/name/nigeria")
      ]);

    const adviceData = await adviceResponse.json();
    const catData = await catResponse.json();
    const countryData = await countryResponse.json();

    console.log("Advice:", adviceData.slip.advice);
    console.log("Fact:", catData.fact);
    console.log("Country:", countryData[0].name.common);

    const end = Date.now();
    console.log("Time:", end - start, "ms");
  } catch (error) {
    console.log("Something went wrong.");
  }
}

loadDashboard();