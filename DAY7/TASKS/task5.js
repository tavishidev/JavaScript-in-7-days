/* Create a Promise that resolves after 2 seconds 
   Create a Promise that rejects with an error 
   Create a Promise that randomly resolves or rejects 
   Use .then() and .catch() to handle both cases 
   Use .finally() for cleanup operations*/

// Create a Promise that resolves after 2 seconds 
const successPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Task completed after 2 seconds");
  }, 2000);
});

//Create a Promise that rejects with an error 
const errorPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("Something went wrong!");
  }, 1000);
});

//Create a Promise that randomly resolves or rejects 
const randomPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const success = Math.random() > 0.5;

    if (success) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  }, 1500);
});

//Use .then() and .catch() to handle both cases 
randomPromise
  .then(function (result) {
    console.log("SUCCESS:", result);
  })
  .catch(function (error) {
    console.log("ERROR:", error);
  });

//Use .finally() for cleanup operations
  randomPromise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("Cleanup done");
  });
