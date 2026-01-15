//Convert an object to JSON string
let user={name:"A",ID:1,rollno:23};
let objectToJson=JSON.stringify(user);
console.log(objectToJson);

//  Parse a JSON string to object 
   /* let updatedUser={"name":"krishika","ID2":2,"rollno":67};
let jsonToObject=JSON.parse(updatedUser);
console.log(jsonToObject);*/

//parse a jsom string to object
let jsonToObject=JSON.parse(objectToJson);
console.log(jsonToObject);


// Store an array of objects as JSON 
const store=[{"a":12,"b":78},{"c":56,"d":45},{"f":79,"e":18}];

// Create a deep copy of a nested object using JSON
const info={name:"yug",email:"yug17@gmail.com",address:{
    pincode:829107,
    state :"pune"}
} ;
const deepCopy=JSON.parse(JSON.stringify(info));
console.log(deepCopy);
deepCopy.address.state="delhi";
console.log(deepCopy);
console.log(info);





