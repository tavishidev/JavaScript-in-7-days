/*Task 8: Async/Await Basics 
 
   Convert a Promise .then() chain to async/await 
   Create an async function that awaits multiple operations 
   Handle errors with try/catch in async functions 
   Create an async function that returns a value 
   Use async/await with setTimeout (promisified) */

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getData();


//Create an async function that awaits multiple operations
function task1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task 1 done"), 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task 2 done"), 2000);
  });
}
 
async function runTasks() {      //since tasks are independent of each other ,so i'm using parallel execution
        const p1=task1();          
        const p2=task2();
        const message1=await p1;
        const message2 =await p2;
        console.log(message1);
        console.log(message2);
      }
  runTasks();

  

//  Handle errors with try/catch in async functions 
function riskyTask() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Something went wrong ❌");
    }, 1000);
  });
}
async function handleRisk() {
  try {
    const result = await riskyTask();
    console.log(result);
  } catch (error) {
    console.log("Error caught:", error);
  }
}

handleRisk();


// Create an async function that returns a value 
async function add(a, b) {
  return a + b;
}
async function showResult() {
  const sum = await add(5, 3);
  console.log(sum); // 8
}

showResult();
