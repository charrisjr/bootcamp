console.log("Hello from sampler.js file")
let total = 1+3
console.log("total = " + total)
let rating = 3;
if (rating === 3) {
    console.log("you are superstar");
}

const userInput = prompt("enter something: ");
if (userInput) {
    console.log("TRUE")
} else {
    console.log("FALSE")
}

const password = prompt("enter password: ");
if (password.length >=6 && password.indexOf(' ') === -1) {
    console.log ("VALID PSWD")
} else {
    console.log ("INVALID PSWD")
}