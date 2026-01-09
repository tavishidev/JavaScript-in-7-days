// Create a function that returns the larger of two numbers
function largerOftwoNo(a,b){
     return  a>b? `${b} is largest`  //using ternary operator
    : b>a ? `${a} is largest`
    : "both are equal";
}
console.log(largerOftwoNo(9,9));

//Create a function that returns the largest of three numbers 
function largerOfThreeNumber(a,b,c){
    return a>b && a>c ?`${a} is a largest`
    : b>a && b>c ? `${b} is a largest`
    : `${c} is a largest`;
}
console.log(largerOfThreeNumber(2,3,4));

//  Create a function to calculate average of numbers (using rest parameter) 
function averageOfNum(...num){
      let sum=0;
      for(let n of num){
        sum+=n;
      }
      let average=sum/num.length
      return average;
}
console.log(averageOfNum(2,3,4,5));

//Create a function to find the range (max - min) of numbers 
    