// /***********************Number*******************/
// const score =1000000
// console.log(score.toExponential(2))/* (method) Number.toExponential(fractionDigits?: number): string
// Returns a string containing a number represented in exponential notation.
// @param fractionDigits — Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.*/

// console.log(score.toFixed(9))           // Need more zero after decimal jsut pass in the function
// console.log(typeof score.toLocaleString()) // Conver into integer and check type of var.

// console.log(score.toPrecision(3)) /*method) Number.toPrecision(precision?: number): string
// Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
// Number of significant digits. Must be in the range 1 - 21, inclusive
// */

// console.log(score.toString(2))   //(method) Number.toString(radix?: number): string  Returns a string representation of an object.

// console.log(score.valueOf(2))//(method) Number.valueOf(): number Returns the primitive value of the specified object

/************************************************Math******************************************/

// const x=1000
// console.log(Math.floor(Math.random()*10) +1)       //(method) Math.random(): number Returns a pseudorandom number between 0 and 1

const x =9

max=20
min=10

console.log(Math.floor(Math.random()*(max-min))+min)  // Custmized created rendsom number between 10 and 20 

