// Create a student grades object (subjects as keys, grades as values)...
let studentsGrades={Maths:98 ,Science:78, English:96 ,Hindi:99};
let keys=Object.keys(studentsGrades);
let values=(Object.values(studentsGrades));
//console.log("subject grades: ",Object.entries(studentsGrades));
console.log( keys);
console.log(values);
let sumGrades=values.reduce((Sum ,grades)=>Sum+grades);
let average=sumGrades/values.length;
console.log(average);






    













































