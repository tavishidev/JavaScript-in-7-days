let person={name:"prachi",city:"pune",age:18,hobbies:"reading booking"};
console.log(person.name);
console.log(person.city);
console.log(person.age);
console.log(person.hobbies);
console.log(person["name"]);
console.log(person["city"]);
console.log(person["age"]);
console.log(person["hobbies"]);
person.email="prachi12@gmail.com"; //adding new property
person.city="himachal";//modifying a property
person.age=undefined; //deleting a property
console.log(person); 




