let arr1=[4,6,2,7,6,9,0];
console.log(arr1.filter(v=>v%2===0));


let arr2=["rude","chaos","perfect","intelligent","rediculous"];
console.log(arr2.filter(word=>word.length>5));

let arr3=[-1,18,3,14,6,-33,-3,-2,9,-77,45];
console.log(arr3.filter(num=> num>0));

let arr4=[4,5,6,7,8,2,3,9];
let filterarr=arr4.filter(num=>num%2===0);
let newarr=filterarr.map(num=>Math.pow(num,2));
console.log(newarr);

let ages=[18,23,4,7,17,14,16,34,56];
let filterage= ages.filter(age=>age>18);
console.log(filterage);






