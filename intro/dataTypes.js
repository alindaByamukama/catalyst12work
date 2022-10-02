// Data Types
let fName = "Alinda" // remember to put aplhabetical charaters in quotation marks / strings
let myAge = 30
console.log(typeof(fName)) // string
console.log(typeof(myAge)) // number

console.log((fName / myAge)) // returns NaN - a data type AKA not a number
// (BigInt) // numbers of more than 53 chars in length, cannot be added w numbers

const dataChecked = true
console.log(typeof(dataChecked)) // boolean

let name
console.log(typeof(name)) // name variable has not been initialised with a value so JS cannot determine its data type
// JS considers the value to determine the data type of a variable

let notEmpty = null
console.log(typeof(notEmpty)) // object