/* #########################################
forEach
########################################### */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//step1: define function to square each element of numbers[] array
function square(element) {
    console.log(element * element);
}
//step 2: call it using numbers.forEach(square)

//more typically, combine steps 1 & 2 like so:
numbers.forEach(function(element){console.log(element * element);})

//the new way to do it is like so:
for (let num of numbers) {
    console.log(num * num);
}

/* #########################################
MAP:  creates a new array with callback results
########################################### */
const texts = ['asdf', 'tksl', 'youphd', 'abhzz'];
const caps = texts.map(function(t) {
    return t.toUpperCase();
})
// texts;
// returns the following:  ["asdf", "tksl", "youphd", "abhzz"]
// caps;
// returns the following: ["ASDF", "TKSL", "YOUPHD", "ABHZZ"]

//another example
//double each number

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const doubles = numbers.map(function (num) {
    return num *2;
})

/* #########################################
ARROW FUNCTIONS: define a function using
more compact syntax (i.e. without using 'function' keyword)
########################################### */

// longhand way:
// const square = function(x) {
//     return x * x;
// }
// shorthand way:
const square = (x) => {
    return x * x;
}

// longhand way:
// const sum = function(x) {
//     return x + x;
// }
// shorthand way:
const sum = (x) => {
    return x + x;
}

// if NO parameters, parens still required
const rollDie = () => {
    return Math.floor(Math.random() * 6) +1
}

// if only ONE parameter, then parens are optional
const sum = x => {
    return x + x;
}