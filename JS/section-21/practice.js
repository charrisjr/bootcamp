/* #########################################
HIGHER ORDER FUNCTIONS:
Passing functions as arguments to other functions
########################################### */

//simulates die roll
function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll);
}

//calls function provided as argument twice
function callTwice(func){
    func();
    func();
  }

//calls function provided as argument 10x
function callTenTimes(func) {
    for (let i=0; i <10; i=i+1) {
        func();
    }
}


/* #########################################
HIGHER ORDER FUNCTIONS:
Returning a function as value from within a function
########################################### */

// returns 'happy' function or 'sad' function
// simply calling makeMysteryFunction() never returns value; 
//to get the two console.log() functions to execute, we need to assign it to a variable...
// e.g. let mystery = makeMysteryFunction()
//...and call it like so
// mystery()
function makeMysteryFunction() {
    //generate random number and assign to variable
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log('I am GOOD function');
        }
    } else {
        return function () {
            console.log('I am BAD function');
        }
    }
}

/* #########################################
CREATING FACTORY FUNCTIONS:
########################################### */
// returns a functions which tests whether a number is between min/max
//we could hard code it like the function below
//which tests whether a number is between 50/100
function isBetween (num) {
    return num >= 50 && num <= 100;
}

//...and create another function
//which tests whether a number is between 1/10
function isBetween (num) {
    return num >= 1 && num <= 10;
}

//...and create yet another function
//which tests whether a number is between 5/25
function isBetween (num) {
    return num >= 5 && num <= 25;
}

//you get the idea!  It's not scalable.
//we want create a 'factory function'
//which create a function for us
function makeBetween(min, max) {
    return function (num) {
         return num >= min && num <= max;
    }
}
// here's practical example of how to use it
// const isAdult = makeBetween(18,64);
// const isMinor = makeBetween(0,17);
// const isSenior = makeBetween(65,120);

/* #########################################
METHODS:  i.e. property on an object
########################################### */

// define function
const simpleMath = {
    square:     function(num) {
        return num * num;
    },
    cube:       function(num) {
        return num * num * num;
    }
}
//use following syntax for sample call to cube method on simpleMath object:
//simpleMath.cube(3)

/* #########################################
THIS & METHODS:  use when referring to properties
within same object
########################################### */
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
       this.eggCount = this.eggCount + 1;
       return 'EGG';
    }
}