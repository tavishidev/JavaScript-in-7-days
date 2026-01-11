//  Use find() to get first even number
let arr=[3,45,-67,89,12,4,-2,5,7];
console.log(arr.find(v=>v%2===0));

// Use find() to get first word starting with 'a' 
let fruits=["banana","lichi","mango","apple"];
let firstword= fruits.find(words=> words.startsWith("a"));
console.log(firstword);

 //Use findIndex() to get index of first negative number 
console.log(arr.findIndex(v=> v<0));

// Use some() to check if any number is greater than 100 
console.log(arr.some(v=>v>100));

//Use every() to check if all numbers are positive 
console.log(arr.every(v=>v>0));





