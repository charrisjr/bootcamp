// for (i=1; i<=10; i++){
//     console.log(i)
// }
// console.log('DONE !')

// const animals = ['dog', 'cat', 'bird', 'fish']

// for (let i=0; i < animals.length; i+=1) {
//     console.log (i, animals[i])
// }

// for (let i=1; i <=10; i++) {
//     console.log (`i is: ${i}`)
//     for (let j=1; j<=5; j++) {
//         console.log(`...j is: ${j}`)
//     }
// }

// const seatingChart = [
//     ['Kristen', 'Bob', 'Namita'],
//     ['Jeff', 'Juanita', 'DeAndre'],
//     ['Yuma', 'Isaac', 'Nellie', 'Chauncy']
// ]

// for (let i=0; i < seatingChart.length; i++){
//     const row = seatingChart[i];
//     console.log (`students in row ${i+1}: `)
//     for (let j=0; j < row.length; j++){
//         console.log(row[j])
//     }
// }

// let count = 0;
// while (count <10) {
//     console.log(count)
//     count++;``
// }

// const SECRET = "PorkChops";
// let guess = prompt("enter the secret code: ");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code: ");
// }
// console.log('You guessed it!')

// let input = prompt('say something');
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === 'stop it')
//     break;
// }
// console.log('OK')

//GUESSING GAME

// let maxNum = parseInt(prompt('what is maximum number? '));
// while (!maxNum) {
//     maxNum = parseInt(prompt('enter a valid number: '));
// }
// const secretNum = Math.floor((Math.random() * maxNum)) + 1;
// console.log(secretNum)

// let guess = parseInt(prompt('enter guess: '));
// let attempts = 1
// while (guess !== secretNum) {
//     attempts++
//     if (guess > secretNum) {
//         guess = parseInt(prompt('too high.  try again: '));
//     }
//     else if (guess < secretNum) {
//         guess = parseInt(prompt('too low.  try again: '));
//     } 
// }
// console.log(`You guessed it:  ${secretNum}.
// It took you ${attempts} tries.`)


//FOR...OF LOOPS
const animals = ['dog', 'cat', 'bird', 'fish']

// for (let i=0; i < animals.length; i++) {
//     console.log(`hi, little ${animals[i]}`)
// }
for (let animal of animals) {
    console.log(`hi, little ${animal}`) // does not require index when iterate over arrays
}