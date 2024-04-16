// Kelvin has an absolute value:
const kelvin = 0;
// Convert Kelvin to Celsius:
const celsius = kelvin - 273;
// Convert Celsius to Farenheit:
let fahrenheit = celsius * (9 / 5) + 32;
// Rounds down the Fahrenheit temp:
fahrenheit = Math.floor(fahrenheit);

console.log(
  `${kelvin} K is equal to ${celsius} degrees C or ${fahrenheit} degrees F.`);

// Convert Celsius to Newton Scale:
let newton = celsius * (33 / 100);
newton = Math.floor(newton);

console.log(`${celsius} degrees C is equal to ${newton} degrees N.`);
