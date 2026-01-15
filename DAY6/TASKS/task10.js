//Create a tasks array with task objects (id, title, completed, priority, dueDate)
const tasks=[{id:1,title:"task of JS",completed:false,priority:"high",dueDate:new Date("2026-01-15")},
            {id:2,title:"project of national sci day",completed:true,priority:"low",dueDate:new Date("2026=01-30")},
            {id:3,title:"wash clothes",completed: true,priority:"Medium",dueDate:new Date("2026-01-24")},
            {id: 4, title: "Workout", completed: false, priority: "medium", dueDate: new Date("2026-01-18")}];

//  Add a new task 
const newTask=[{id:5,title:"sleeping",completed:true,priority:"high",dueDate:new Date("24-01-2026")}];
const updateTask=[...tasks,newTask];
console.log(updateTask);

// Mark a task as complete
const markTask=updateTask.map((work)=>work.completed===true? true:false);
console.log(markTask);

//  Filter incomplete tasks
const filter1=updateTask.filter((work)=>work.completed===false);
console.log(filter1);

//  Filter high priority tasks
const filter2=updateTask.filter((work)=>work.priority==="high");
console.log(filter2);

