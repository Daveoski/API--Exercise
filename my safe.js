async function safeFetch(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Server responded " + response.status);
    }

    const data = await response.json();

    return {
      ok: true,
      data: data
    };
  } catch (error) {
    return {
      ok: false,
      message: error.message
    };
  }
}

async function test() {
  console.log(
    "Good URL:",
    await safeFetch("https://restcountries.com/v3.1/name/nigeria")
  );

  console.log(
    "Bad name:",
    await safeFetch("https://restcountries.com/v3.1/name/zzzzz")
  );

  console.log(
    "Bad site:",
    await safeFetch("https://not-a-real-site-xyz.com")
  );
}

test();