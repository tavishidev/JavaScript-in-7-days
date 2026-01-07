/*function add(a,b){
    return a+b ;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    if( b===0) return  "division by 0 is invalid";
    else return a/b;
}
console.log(add(4,5));
console.log(sub(4,5));
console.log(mul(4,5));
console.log(div(4,0));
console.log(div(4,5));*/

   //Create add, subtract, multiply, divide functions
const add=(a,b)=>a+b;
const sub=(a,b)=>a-b;
const div=(a,b)=>b===0? "division by 0 not possible": a/b;
const mul=(a,b)=>a*b;

console.log(add(4,5));
console.log(sub(4,5));
console.log(div(4,0));
console.log(mul(4,5));

   //Create a power function (base, exponent) 
const powerFunction=(base ,exponent)=>Math.pow(base,exponent);
console.log(powerFunction(2,3));
   
    //Create a percentage function (value, percentage) 
const percentage=(value)=> value/100;
console.log(percentage(5));

    // Create a modulo function 
const moduloFunction=(a,b)=>b===0?"b can't be 0":a%b;
console.log(moduloFunction(5,7));

    // Create a function that takes an operator and two numbers, returns result
function calculate(a,b,operator){
    if(operator==="+") return a+b;
    if(operator==="-") return a-b;
    if(operator==="*") return a*b;
    if(operator==="/" && b!==0) return a/b; 
}
console.log(calculate(5,4,"*"));












