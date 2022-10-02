// control flow - conditional statements
let weight = 78

if (weight < 50) {
    console.log("You are under-weight!")
} else if (weight > 90) {
    console.log("You are over-weight!")
} else {
    console.log("All clear!")
}

let salary = 700
let payAsYouEarn = 30

if (salary < 300) {
    console.log("Not tax deducted")
} else if (salary > 300) {
    let salaryBalance = salary - (salary * (payAsYouEarn / 100))
    console.log("Your tax deduction is " + (salary * (payAsYouEarn / 100)))
    console.log("Your salary after tax deduction is " + salaryBalance)
}

let price = 2000
if (price <= 2000) {
    console.log("This product is not entitled to VAT")
} else {
    console.log("This product is entitled to VAT")
}

// a nested conditional statement that are related to each other
const number = 0
if(number >= 0) {
    if(number == 0) {
        console.log("Your number is zero")
    } else {
        console.log("Your number is positive")
    }
} else {
    console.log("Your number is negative")
}

// if ... else 
let mySal = 700
let yourSal = 500

if(mySal > yourSal) {
    console.log("I shall pay for lunch")
} else if(mySal < yourSal) {
    console.log("You shall pay for lunch")
} else if(mySal == yourSal) {
    console.log("We pay our own lunch bill")
}

