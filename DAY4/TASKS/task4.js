const evenNumber = (num) => num % 2 === 0 ? "number is even" : "number is odd";
console.log(evenNumber(0));


// Create a function to check if a number is prime 
function primeNumber(num) {
    if (num === 0 || num === 1) return "number is neither prime nor composite";
    for (let i = 2; i < num; i++) {
        if (num % i !== 0) return "number is prime";
        else return "number is not prime";
    }
} console.log(primeNumber(0));



// Create a function to find factorial 5x4x3x2x1
function factorial(num) {
    let product = 1;
    for (let i = 1; i <= num; i++) {
        product *= i;
    }
    return product;
}
console.log(factorial(4));


// Create a function to find GCD of two numbers
function gcdOfNumbers(a, b) {         /*you don't need to handle a>b,bcoz % automatically handles it ,
                                     % naturally pushes the larger number down and keeps the algorithm moving toward 0*/
    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;

} console.log(gcdOfNumbers(0,6));

// Create a function to find LCM of two numbers
function lcdOfNumbers(a,b){
    let mul=a*b;
    let lcd=mul/gcdOfNumbers(a,b);
    return lcd;
}
console.log(lcdOfNumbers(5,8));





