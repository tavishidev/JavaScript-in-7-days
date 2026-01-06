// Generate multiplication table for a given number (1 to 10) 
/*let product=1;
let number=9;
console.log("multipication table of 9 is:");
for(let i=1;i<=10;i++) 
{
product= number*i;
//console.log("9 x", i ,"=", product);
console.log(`${number} x ${i}=${product}`) ; //using template literals
}*/




//Create tables for numbers 1 through 5 
/*for(let num=1 ;num<=5;num++){
    console.log(`multiplication table of ${num}`);
    for(let i=1;i<=10;i++)
        console.log(`${num} x ${i} = ${num*i}`); 
}*/


// Generate a full multiplication grid (1-10 x 1-10) using nested loops
for(let i=1;i<=10;i++){
    let row="";
    for(let j=1;j<=10;j++){  
         row= row +`${i} x ${j} =${i*j}  `;
    }
    console.log(row);
    
}







