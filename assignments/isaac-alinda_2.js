//Assigment- create or define three parameterized functions that are calling one another e.g. a,b,c

// function multiply takes parameters num1, num2, num3, 
// multiplies them and assigns the answer to the variable total
function multiply(num1, num2, num3){
    let total = num1 * num2 * num3
    return total;
}
// console.log(multiply(2, 3, 4))

// function add takes parameters num4, num5, num6 
// adds them to the arguments in the invoked function multiply
// and assigns the answer to the variable total_add
function add (num4, num5, num6){
    let total_add = multiply(3, 5, 4) + (num4 + num5 + num6)
    return total_add;
}
// console.log(add(20, 30, 40))

// function subtract takes parameters num7, num8, num9 
// subtracts them from the arguments in the invoked function add 
// and assigns the answer to the variable new_total
function subtract(num7, num8, num9){
    let new_total = add(10, 20, 30) - (num7 + num8 + num9)
    console.log(new_total)
} 
subtract(5, 6, 7);

//  subtract(10, 11, 12);
//  subtract(13, 14, 15);


