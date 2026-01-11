// Merge two arrays and sort them 
let arr1=["sunflower",'rose',"lotus"];
let arr2=['apple','banana','orange','lichi'];
let merge=arr1.concat(arr2);
console.log(merge.sort());

// Remove all duplicates from an array
let num =[23,45,67,23,45,89,2,3,2];
let unique=[];
for(let i=0;i<num.length;i++){
     if(!unique.includes(num[i]))
        unique.push(num[i]);
}
console.log(unique);





// Find the second largest number in an array 
let number=[23,45,6,7,67,34];
let desc=number.sort((a ,b)=>b-a);
console.log(`2nd largest number will be ${desc[1]}`);

//Rotate array elements to the right by 2 positions 



