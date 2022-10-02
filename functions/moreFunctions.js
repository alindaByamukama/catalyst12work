// all functions are self contained
// a static function has values that do not change or update
function addNum() {
    let a = 2, b = 3
    let c = a + b
    console.log(c)
}
// addNum()

// a dynamic function allows for any value to be passed as params
// the params are then computed by the function and logged to the terminal
function addNum2(a, b) {
    let c = a + b
    console.log(c)
}

// addNum2(12, 23)
// addNum2(1234, 2345)

// a dynamic tax calculator
// a dynamic function passes parameters to a function
function payee(gross, tax) {
    let net = (gross - (gross * tax))
    console.log("This is your net pay " + net)
}
// pass arguments as we invoke the function payee
// payee(1000, 0.3)