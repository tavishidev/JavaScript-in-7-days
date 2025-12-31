let age = 1;
let access_level = "according to their age access will be given";
console.log(access_level);
console.log("user's age=", age);
if (age < 13)
    console.log(">kids content only");
else if (age <= 17)
    console.log(">teen content");
else if (age <= 64)
    console.log(">full content access");

else 
    console.log(">senior access with special features");


//verification for driving eligibility 
if (age >= 16)
    console.log(">eligible for driving");
else
    console.log(">not eligible for driving");

//verification for voting
if (age >= 18)
    console.log(">eligible for vote");
else
    console.log(">not eligible to cast a vote");

//retirement status:
if (age >= 65)
    console.log(">retirement");
else
    console.log(">not retired");
    








