/*Create 3 Promises that resolve at different times 
   Use Promise.all() to wait for all 
   Use Promise.race() to get the fastest 
   Handle the case when one Promise fails in Promise.all() 
   Create a timeout wrapper using Promise.race()*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = false;
    if (success) resolve("Promise 2 resolved");
    else reject("promise 2 failed");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 3000);
});

Promise.all([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((error) => console.log("error:", error));

Promise.race([p1, p2, p3])
  .then((result) => console.log(result))
  .catch((error) => console.error("error:", error));

//Create a timeout wrapper using Promise.race()
/*Timeout wrapper means a function that wraps another function and adds a time limit to it .
If the original function doesn’t finish within the given time, the wrapper stops waiting and triggers a timeout action*/

function originalTask() {
  let timerID;
  const promise = new Promise((resolve) => {
    timerID = setTimeout(() => {
      console.log("hello miss");
      resolve("original function finished");
    }, 6000);
  });
  return { promise, timerID };
}

function timeoutTask(ms, timerID) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      console.log("stop waiting for original function to run");
      clearTimeout(timerID);
      reject("original function doesn't finish on time");
    }, ms);
  });
}

const { promise, timerID } = originalTask();
Promise.race([promise, timeoutTask(4000, timerID)])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));
