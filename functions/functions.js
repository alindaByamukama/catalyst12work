// convert loops to fucntion
// function loopOne() {
//     for(let item = 0; item <= 20; item++) {
//         if(item % 2 != 0) {
//             console.log(item)
//         }
//     }
// }

// loopOne()

// function loopTwo() {
//         let num = 0
//     for(; num <= 10; ++num) {
//         console.log(num)
//     }
// }

// loopTwo()

//  function add
// function add() {
//     let num1 = 20
//     let num2 = 30
//     let ans = (num1 + num2)
//     // console.log(ans) // will display value of ans without an exernal console.log
//     return ans
// }

// add() // will not display its content on the terminal
// .log(add()) // 'return' exposes value of ans within the add function

// function even() {
//     for(let item = 0; item <= 100; item+=10) {
//         if (item % 2 === 0) {
//             console.log(item)
//         }
//     }
// }

// even() // this is function invocation aka a function call

function netPay() {
    let gross = 1000
    let tax = 0.3
    let net = (gross - (gross * tax))
    console.log("This is your net pay " + net)
    // return net
}

// console.log("This is your net pay " + netPay())
// netPay()

// welfare is invoking netPay
function welfare() {
    let contribution = 50
    let takeHome = netPay() - contribution
    console.log("This is your take home " + takeHome)
}

welfare()

// A function is named block of code that performs a specific task
// Creating a function is called 'defining'
// Values within a function cannot be accessed outside of itself
