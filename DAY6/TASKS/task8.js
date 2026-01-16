/*company=name
        department=management=employee=name,id
                   engineerning=employee=name,id
                   hr=employee=name,id */
                   
const company={name:"infosys",department:{
    management:{employee:[{name:"annu",Id:251006}]},
    engineering:{employee:[{name:"Tavishi",Id:251008}]},
    hr:{employee:[{name:"gurleen",Id:251007}]},
    sales:{employee:[{name:"ridhi",Id:251005}]},
    marketing:{employee:[{name:"ruchi",Id:251001}]},
    finance:{employee:[{name:"kritika",Id:251207}]}
}
};

// Access a specific employee's name 
const employeeName=company.department.finance.employee[0].name;
console.log(employeeName);

//   Add a new employee to a department
company.department.engineering.employee.push({name:"Sakshi",Id:251331});
console.log(company.department.engineering.employee);

// Calculate total employees across all departments
const totalEmployee=Object.values(company.department).reduce((total,v)=>
     total +=v.employee.length,0)
console.log(totalEmployee);

//Find the department with most employees 
//const info=Object.entries(company.department);
//console.log(info);
/*const mostEmployee=info.reduce((max ,v)=>v[1].length>max[1].length ? v : max);
console.log(mostEmployee[0]);*/






