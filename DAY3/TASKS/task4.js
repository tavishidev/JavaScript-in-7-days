//Calculate factorial of a number using a for loop 
//5=5x4x3x2x1
/*let fac = 1;
let num = 4;
for (let i = 1; i <= num; i++) {
    fac = fac * i;
}
console.log(`factorial of ${num}=${fac}`);*/

//Calculate factorial using a while loop 
let number = 5;
let factorial = 1;
let i = 1;
if (number < 0)
    console.log("factorial not defined");
else if (number === 0)
    console.log("factorial of 0 ,i.e 0!=1");
else {
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    console.log(`factorial of ${number} is=${factorial}`);
}





