/**
 * create an array "animals" with "cat"
 */
let animals = ["dog", "cat", "cow", "humster"];
/**
 * Exercise 1
 *
 * add a "dog" to the end of your 'animals'
 *
 * NOTE: console.log() the result to see the difference
 */

animals.push("dog");
console.log(animals);
/**
 * Exercise 2
 *
 * add a "rabbit" to the very beginning of your 'animals'
 *
 * PS: console.log() the result to see the difference
 */
animals.unshift("rabbit");
console.log(animals);
/**
 * Exercise 3
 *
 * add a "puma" to position 2 in "animals"
 *
 * PS: console.log() the result to see the difference
 */
animals.splice(1, 0, "puma");
console.log(animals);
/**
 * create an array "wildAnimals" with "lion"
 */
let wildAnimals = ["lion"];
/**
 * create an array "moreWildAnimals" with "giraffe" and "elephant"
 */
let moreWildAnimals = ["giraffe", "elephant"];
/**
 * Exercise 4
 *
 * combine wildAnimals and moreWildAnimals into one array
 * and save it into variable combinedWildAnimals
 *
 * PS: console.log() the result to see the difference
 */
let combinedWildAnimals = wildAnimals.concat(moreWildAnimals);
