//Print numbers 1 to 20 
let x=0;
console.log("the number from 1 to 20 is:");
for(let i=0;i<20;i++){
    x=x+1;
    console.log(x);
}

// Print numbers 20 to 1 (countdown) 
let y=21;
console.log("numbers from 20 to 1:");
for(let i=20;i>0;i--){
    y=y-1;
    console.log(y);
}

//Print even numbers from 2 to 50 
let z=0;
console.log("even numbers from 2 to 50:");
for(let i=0;i<25;i++){
    z=z+2;
    console.log(z);
}


// Print odd numbers from 1 to 49 
let t=0;
console.log("odd numbers from 1 to 49:");
for(let i=1;i<50;i++){
    t=t+1;
    if(t%2===0){
        continue;
    }
    console.log(t);
    }

// Print multiples of 5 from 5 to 100
let w=1;
console.log("multiples of 5 from 5 to 100:");
for(let i=1;i<=20;i++){
    w=5*i;
    console.log(w);
}


