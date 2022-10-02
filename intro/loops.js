// loops ~ iteration ~ consume alot of memory
// for loop
// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement

// for(let item = 0; item <= 20; item++) {
//     if(item % 2 != 0) {
//         console.log(item)
//     }
// }

// let num = 0
// for(; num <= 10; ++num) {
//     console.log(num)
// }

// forEach loops
// a collection of values you want to process or 
// complete can be accessed from a memory space (array) by a forEach loop
// arrays.forEach(function(currentValue, index, arr), thisValue)

const items = ['item1', 'item2', 'item3'];

items.forEach((item) => {
    console.log(item)
})

// while loops - while (condition) {statement}
// condition evaluates to true, statement is executed
// statement that is executed as long as the condition evaluates to true
// when condition evaluates to false, execution continues with the statement after the while loop


let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
}

// switch statement
// 
