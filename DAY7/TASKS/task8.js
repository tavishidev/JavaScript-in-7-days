/*Task 8: Async/Await Basics 
 
   Convert a Promise .then() chain to async/await 
   Create an async function that awaits multiple operations 
   Handle errors with try/catch in async functions 
   Create an async function that returns a value 
   Use async/await with setTimeout (promisified) */


async function runSteps() {
  try {
    const result1 = await stepOne();
    const result2 = await stepTwo(result1);
    const result3 = await stepThree(result2);

    console.log(result3);
  } catch (error) {
    console.error(error);
  }
}

runSteps();
