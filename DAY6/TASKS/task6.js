//Merge two objects using spread

 /*New object created
Shallow copy
Very fast,Nested objects still shared ⚠️*/
const person={name:"nitika", age:23, gender:"female"};
const school={name:"nikita",schoolName:"St.paul",ID:2510002096,rollno:23};
const merge={...person,...school};
console.log(merge);

//Copy an object using spread 
const grades={maths:67,science:78,physics:89,english:53};
const library={...grades};
console.log(library.maths);

//Add new properties while spreading and Override properties while spreading
const user={name:"A",age:20};
const updatedUser={...user,city:"DELHI",age :22};
console.log(updatedUser);

//Merge multiple arrays using spread 
const a=[1,2];
const b=[3,4];
const c=[4,5];
const merge1=[...a,...b,...c];
console.log(merge1);


