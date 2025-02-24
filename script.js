console.log("Hello World")

// var x = 5 Vi bruker ikke var lengre

// const name = "Emil"

// let firstName = "Emil" // String
// let age = 30 // Integer/Number
// let exampleFloat = 30.2 // Float
// let fromBergen = true // Boolean
// let exampleArray = ["Mazda", "Opel", "Saab", "Mitsubishi"] // Array

let myObject = {
   firstName: "Torleif",
   lastName: "Leiknes",
   age: 67,
   eMail: "torleif@leiknes.no"
}

// Datatyper
// String - "tekst"
// integer - tall
// boolean - true/false
// null - nullverdi
// undefined - udefinert
// object - samling av informasjon som omhandler en ting
// array- liste over ting

// console.log(myObject)

// console.log(exampleArray)

//let x = 11
//let y = 4

//x++ //increment
// console.log(x)

//let z = x + y
// console.log(z)

//Operators

let a = 10
let b = 15

console.log(a + b)
console.log(a - b)
console.log(a / b)
console.log(a * b)
console.log(a % b)

// Comparison operators
let x = 10
let y = 11

console.log(x > y) // større enn
console.log(x < y) // mindre enn
console.log(x == y) // sjekker om det er samme type eller verdi
console.log(x === y) // Strictly equal to
console.log(x != y) // is not equal to

console.log(x <= y) // mindre eller lik
console.log(x >= y) // større eller lik

// Logical operators og / eller operators

let erVoksen = true
let barneSkole = false

console.log(erVoksen && !barneSkole)

// Conditionals

const age = 17

if (age >= 18) {
   console.log("Velkommen inn")
} else {
   console.log("Get lost")
}

let firstName = "Kristin"
let numberOfCats = 1

if (numberOfCats >= 20 && firstName === "Magda") {
   console.log("You have too many cats")
} else if (numberOfCats <= 20 && firstName === "Kristin") {
   console.log("Right person, not enough cats")
} else {
   console.log("Hvor er Kristin og kattene?")
}

let user = {
   userName: "DJ Sjur",
   userAge: 49,
   userCity: "Oslo"
}

if (user.userName === "Per") {
   console.log("Welcome Per")
} else if (user.userAge <= 18) {
   console.log("You're not old enough")
} else if (user.userName === "DJ Sjur" && user.userCity === "Sandefjord") {
   console.log("Velkommen DJ fra Sandefjord")
} else {
   console.log("Banned")
}
