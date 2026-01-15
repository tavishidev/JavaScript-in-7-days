// Destructure person object to get name and age 
let person={name:"prachi",
            age:19,
            address:{pincode:829107,
                      city:"pune"}}; 
let {name}=person;
console.log(name);

//  Destructure with default values 
let { age, course="AI/ML"}=person;
console.log(course);

// Destructure nested objects (person with address object)
let {address:{pincode,city}}=person;
console.log(name,pincode,city);

//Rename variables during destructuring
let {age:personsAge}=person;
//console.log(person);same object dega without any change
console.log(personsAge);

// Use destructuring in function parameters
function greet({name}){
    console.log("hello",name);
}
console.log(greet(person));



  




