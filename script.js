const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];

function printForecast(test) {
  let forecastArray = [];
  let forecast = "";
  for (let i = 0; i < test.length; i++) {
    forecast = `...${test[i]}°C in ${i + 1} days`;
    forecastArray.push(forecast);
  }
  forecastArray = forecastArray.toString();

  for (let k = 0; k < test.length; k++) {
    forecastArray = forecastArray.replace(",", " ");
  }

  return forecastArray;
}
console.log(printForecast(test1));
