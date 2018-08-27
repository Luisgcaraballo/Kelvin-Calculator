// This number is a constant
const kelvin = 293;
// Celsius is kelvin minus 273
const celsius = kelvin - 273;
// Equation to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//rounds the decimal 
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
