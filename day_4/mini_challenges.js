// TODO: Template Literals
// ? 1. Write a function called introduce that takes name, age, and city, and returns a sentence.
function introduce(name, age, city) {
  console.log(
    `Hi, myself ${name}, I am ${age} years old and I live in ${city}.`
  );
}
const person = {
  name: "Yokesh",
  age: 20,
  city: "Kanchipuram",
};
introduce(person.name, person.age, person.city);

// ? 2. Write a function called invoiceSummary that takes three parameters: item, quantity, and pricePerItem.
function invoiceSummary(item, quantity, pricePerItem) {
  return `You purchased ${quantity} ${item} for ${pricePerItem} each. Total: ₹${(
    quantity * pricePerItem
  ).toFixed(2)}.`;
}
console.log(invoiceSummary("Books", 2, 200));

// TODO: Default Parameters
// ? 1. Create a function called multiply that takes two numbers,
// ?    but if the second number isn’t passed, it defaults to 1.
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5));
console.log(multiply(2, 4));

// ? 2. Write a function called greetUser that takes two parameters: name and greeting, where greeting defaults to "Hello".
function greeting(name, greet = "Hello") {
  return `${greet}, ${name}!`;
}
console.log(greeting("Yokesh", "Hey there"));
console.log(greeting("Chat"));

// TODO: Async/Await & Promises
// ! Weather Watcher

// ? Scenario:
// * You're building a weather dashboard. You have a list of city names, and for each city, you need to:
// Fetch its weather data from a mock API.
// Print the temperature and weather condition for each.

// * Create an async function displayWeatherReport(cities) that:
// Accepts an array of city names like ["Chennai", "Mumbai", "Delhi"]

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

    if (citiesWeather !== undefined) {
      citiesWeather.forEach((cityWeather) => {
        console.log(
          `Weather in ${cityWeather.city}: ${cityWeather.temp}°C, ${cityWeather.condition}`
        );
      });
    } else {
      console.error(`Cities weather is undefined. ${citiesWeather}`);
    }
  } catch (e) {
    console.error(e.message);
  }
};

const arrOfCities = ["Chennai", "Mumbai", "Delhi"];

displayWeatherReport(arrOfCities);
