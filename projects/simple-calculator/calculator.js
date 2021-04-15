// My simple calculator
// created by C. Harris 
// created on 15 April 2021
// modified on 
// version 1.0:  takes two numbers and operation (+ - * /) as input and returns result
// version 2.0:  continues until user enters quit

// prompt user for numbers
const num1 = parseInt(prompt('Enter first number: '));
const num2 = parseInt(prompt('Enter second number: '));

// prompt user for operation
const operation = prompt('Enter operation: add (+) | subtract (-) | multiply (*) | divide (/): ');

let result = null;

// using if...else if... else
if (operation == '+' || operation === 'add') {
    result = num1 + num2;
}
else if (operation == '-' || operation === 'subtract') {
    result = num1 - num2;
}
else if (operation == '*' || operation === 'multiply') {
    result = num1 * num2;
}
else if (operation == '/' || operation === 'divide') {
    result = num1 / num2;
}

// display the result
console.log(`${num1} ${operation} ${num2} = ${result}`);