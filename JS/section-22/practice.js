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
