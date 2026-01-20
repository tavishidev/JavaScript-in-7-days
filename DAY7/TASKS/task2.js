/*Task 2: Higher-Order Functions 
 
   Create a function that takes a function and calls it n times 
   Create a function that takes a number and returns a multiplier function 
   Create a filter function that takes array and predicate function 
   Create a map function from scratch 
   Create a compose function that combines multiple functions.*/
 
 
// Create a function that takes a function and calls it n times 
function callNTimes(fn,n){
    for(let i=1;i<=n;i++)
        fn();
}
function greet(){
    console.log("hello world");    
}

callNTimes(greet,5);

//Create a function that takes a number and returns a multiplier function 
function numToMultiplier(num){
        return function(factor){
           const result= num*factor;
           return result;
    }
 }
   
const multiplier=numToMultiplier(5);
console.log(multiplier(7));

//Create a filter function that takes array and predicate function 

//Predicate = a function that checks a condition and answers YES (true) or NO (false).
function createFilter(arr,predicate){
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(predicate(arr[i],i,arr))
            result.push(arr[i]);
    }
    return result;
}

let num=[1,3,24,67,58,34,23,45,67,8,28];
const myFilter=createFilter(num,function(num){return num%2===0});
console.log(myFilter);



//Create a map function from scratch 
/*map function kya krta hai ?
vo array ke each element ko tranform krta hai or ek new array bnaata hai */
function createMap(arr,fn){
    let array=[];
    for(let i=0;i<arr.length;i++){
        array.push(fn(arr[i]));
    }
    return array;
}

//eg-
let numbers=[1,2,3,4,5];
function addFive(num){
    let sumOfNum=num+5;
    return sumOfNum;
}

//testing-
const myMap=createMap(numbers,addFive);
console.log(myMap); 















