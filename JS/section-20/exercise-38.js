// DEFINE YOUR FUNCTION BELOW:
function multiply(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    let product = x * y;
    return product;
}