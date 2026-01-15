//  Destructure first three elements of an array 
 let num=[3,4,5,6,7,8,9,45,67,23,12,87,94,92,100,101];
let [a,b,c]=num;
console.log(a,b,c);

// Skip elements during destructuring 
let [first,,,fourth,...rest]=num;
console.log(first,fourth,rest); //using rest pattern to get remaining element 

 // Swap two variables using destructuring
 let x=4,y=8;
 [x,y]=[y,x];
 console.log(x);
 console.log(y);
 
// Destructure return values from a function
let information={name:"nikita",ID:2510002096,Nationality:"Indian"}

function info({ID,Nationality}){
    return {Nationality,ID};
}
const {Nationality}=info(information);
console.log(Nationality);







