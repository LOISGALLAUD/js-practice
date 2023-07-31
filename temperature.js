/*
Loïs GALLAUD
Temperature conversion
*/

// Kelvin temperature
const kelvin = 0;
// Celsius temperature
var celsius = kelvin - 273;
// Fahrenheit temperature
var fahrenheit = celsius * (9/5) + 32;
// Round the temperature to the closest integer
fahrenheit = Math.floor(fahrenheit);
// Newton's scale temperature
var newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`)