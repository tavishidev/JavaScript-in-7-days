//  Check if a single number is prime 
/*let num1 = 9;
let count = 0;
for (let i = 2; i < num1; i++) {
    if (num1 % i === 0)
        count = count + 1;
}
if (num1 === 0 || num1 === 1)
    console.log("number is neither prime nor composite");
else if (count > 0)
    console.log("number is not prime")
else
    console.log("number is prime");*/


//Find all prime numbers between 1 and 100 AND  count the number of times prime exist between 1 and 100
console.log("all prime numbers between 1 and 100 is:");
let count1 = 0;
for (let num = 2; num <= 100; num++) {
    let IsPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            IsPrime = false
            break;
        }
    }
    if (IsPrime) {
        
        console.log(num);
        count1 = count1 + 1;
    }

}
 console.log(`the number of times prime exist between 1 and 100 is ${count1}`)


