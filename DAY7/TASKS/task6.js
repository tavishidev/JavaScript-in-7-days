/* Create three functions that return Promises 
   Chain them together with .then() 
   Pass data from one Promise to the next 
   Handle errors at the end of the chain 
   Add error handling at each step*/

function stepOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

function stepTwo(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number * 2);
    }, 1000);
  });
}

function stepThree(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number > 15) {
        resolve(number + 5);
      } else {
        reject("Number is too small in stepThree");
      }
    }, 1000);
  });
}

stepOne()
  .then(result1 => {
    console.log("Step 1 result:", result1);
    return stepTwo(result1);
  })
  .then(result2 => {
    console.log("Step 2 result:", result2);
    return stepThree(result2);
  })
  .then(result3 => {
    console.log("Step 3 result:", result3);
  })
  .catch(error => {
    console.error("Error caught:", error);
  });
