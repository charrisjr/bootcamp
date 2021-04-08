function sumArray(amount) {
    var total = 0;
    for (let i = 0; i < amount.length; ++i) {
         total = total + amount[i]; // add each element in an array to total
    }
    return total;// return sum of elements in array
}