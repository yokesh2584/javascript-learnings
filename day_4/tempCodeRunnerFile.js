const getWeatherForCity = (city) => {
  return new Promise((resolve, reject) => {
    const fakeData = {
      Chennai: { temp: 34, condition: "Sunny" },
      Mumbai: { temp: 30, condition: "Humid" },
      Delhi: { temp: 28, condition: "Cloudy" },
    };
    setTimeout(() => {
      if (fakeData[city]) {
        resolve({ city, ...fakeData[city] });
      } else {
        reject(new Error("City not found in database."));
      }
    }, 1000);
  });
};

const displayWeatherReport = async (cities) => {
  try {
    const citiesPromise = cities.map(async (city) => {
      return await getWeatherForCity(city)
        .then((res) => res)
        .catch((error) => console.error(error.message));
    });
    const citiesWeather = await Promise.all(citiesPromise);
    citiesWeather.forEach((cityWeather) => {
      console.log(
        `Weather in ${cityWeather.city}: ${cityWeather.temp}°C, ${cityWeather.condition}`
      );
    });
  } catch (e) {
    console.error(e.message);
  }
};

const arrOfCities = ["Kanchipuram", "Vellore", "Thiruvallur"];

displayWeatherReport(arrOfCities);