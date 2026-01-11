arr=[34,2,23,1,78,69,10,100]; //spread operator ka use kr rhi taaki original array pe effect na aaye
//console.log(arr.sort()); string order sorting
let asc=[...arr].sort((a,b)=> {
    return a-b;
});
console.log(asc);
 
//Sort an array of numbers in descending order 
let desc=[...arr].sort((a,b)=>b-a);
console.log(desc);

// Sort an array of strings alphabetically 
let arr2=[...arr].sort();
console.log(arr2);

//Sort an array of strings by length
let arr3=["intelligent","focus", "disciplined", "intellectual","smart"];
let arr4=[...arr3].sort((a,b)=>{
    return a.length-b.length;
})
console.log(arr4);
console.log(arr3);

// Reverse an array using reverse() method
let revaArr=[...arr].reverse();
console.log(revaArr);

// Reverse an array without using reverse() method
let collection=[34,"apple",true,23];
let reverse=[];
for(let i=collection.length-1;i>=0;i--){
    reverse.push(collection[i]);
}
console.log(reverse);














