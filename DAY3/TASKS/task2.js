// Calculate sum of numbers from 1 to 100 
let sum=0;
for(let i=1;i<=100;i++){
    sum=sum+i;
}
console.log("sum of numbers from 1 to 100 is:");
console.log(sum);

//Calculate sum of even numbers from 1 to 100
let sum1=0;
for(let i=0;i<=100;i+=2){
    sum1=sum1+i;
}
console.log("sum of even numbers from 1 to 100");
console.log(sum1);

// Calculate sum of odd numbers from 1 to 100 
let sum2=0;
for(let i=1;i<=100;i+=2){
    sum2+=i;
}
console.log("sum of odd no from 1 to 100");
console.log(sum2);



//  Calculate the average of numbers 1 to 100 ...average=sum of values/number os values
let sum3=0;
for(let i=1;i<=100;i++){
    sum3=sum3+i;
}
console.log("the average of numbers 1 to 100 ");
let avg=sum3/100;
console.log(avg);


//Find the sum of digits of a given number (e.g., 12345 = 15) 
//piche se add krna shuru karenge-

let num1=1234567;
let sum4=0;
while(num1>0){
   let digit=num1%10 //gives last digit
   sum4=sum4+digit; 
   num1=Math.floor(num1/10); //removes last digit
}
console.log(" sum of digit of a given number is");
console.log(sum4);








