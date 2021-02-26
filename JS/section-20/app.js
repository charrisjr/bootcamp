// // DEFINE YOUR FUNCTION:
// function rant(message) {
//     let i = 0;
//     while (i < 3) {
//     console.log(`I hate ${message.toUpperCase()}`);
//     i++;
//     }
// }
// rant('haters')



// function greeting(firstName, lastName) {
//     console.log(`Hi, ${firstName} ${lastName[0]}.!`);
// }
// greeting('Chuck', "Harris")



// function repeatPhrase(phrase, howManyTimes) {
//     let result = '';
//     for (let i=0; i < howManyTimes; i++) {
//         result += phrase; 
//     }
//     console.log(result);
// }


// // define isSnakeEyes below:
// function isSnakeEyes(dieOne, dieTwo) {
//     if (dieOne===1 && dieTwo===1) {
//         console.log('Snake Eyes!');
//     } else {
//         console.log('Not Snake Eyes!');
//     }
// }


function add(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    let sum = x + y;
    return sum;
}