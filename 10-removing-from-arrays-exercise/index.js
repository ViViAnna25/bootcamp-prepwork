/**
 * create an array {carBrands}
 * and assign to it ["Mercedes", "Volvo", "BMW", "Citroen", "Reno", "Vauxhall"]
 */
let carBrands = ["Mercedes", "Volvo", "BMW", "Citroen", "Reno", "Vauxhall"];
/**
 * Exercise 1
 *
 * remove the last element from the {carBrands} array
 *
 * * PS: console.log() the result to see the difference
 */
const lastBrand = carBrands.pop();
console.log(carBrands); 
/**
 * Exercise 2
 *
 * remove the first element from the {carBrands} array
 *
 * * PS: console.log() the result to see the difference
 */
const fisrtBrand = carBrands.shift();
console.log(carBrands)
/**
 * Exercise 3
 *
 * from {carBrands} remove BMW
 *
 * * PS: console.log() the result to see the difference
 */
const middleBrand = carBrands.splice(2);
console.log(carBrands);
/**
 * Exercise 4
 *
 * in {carBrands} replace Citroen with Rolls-Royce
 *
 * * PS: console.log() the result to see the difference
 */
carBrands = carBrands.concat("Rolls-Royce");
console.log(carBrands);