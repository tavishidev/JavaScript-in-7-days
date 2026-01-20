/*setInterval Practice 
 
   Create a clock that logs time every second 
   Create a countdown that stops at zero 
   Create a polling mechanism that checks a condition repeatedly 
   Implement a simple stopwatch (start, stop, reset) 
   Create an auto-save feature that runs every 30 seconds*/

// Create a clock that logs time every second
/*
setInterval(() => {
  let time = new Date();
  console.log(time.toLocaleTimeString());
}, 1000);
*/
//Create a countdown that stops at zero 
let count = 5;

const timerId = setInterval(function () {
  console.log(count);
  count--;

  if (count === 0) {
    clearInterval(timerId);
    console.log("Stopped");
  }
}, 1000);


//Create a polling mechanism that checks a condition repeatedly 
let attempts = 0;

const pollId = setInterval(function () {
  attempts++;
  console.log("Checking condition...");

  const conditionMet = attempts === 3;

  if (conditionMet) {
    console.log("Condition met!");
    clearInterval(pollId);
  }
}, 2000);

//Implement a simple stopwatch (start, stop, reset) 
let seconds = 0;
let stopwatchId = null;

function start() {
  if (stopwatchId !== null) return;

  stopwatchId = setInterval(function () {
    seconds++;
    console.log("Time:", seconds);
  }, 1000);
}

function stop() {
  clearInterval(stopwatchId);
  stopwatchId = null;
}

function reset() {
  stop();
  seconds = 0;
  console.log("Reset");
}

start();  // start counting
stop();   // stop
reset();  // reset to zero


//Create an auto-save feature that runs every 30 seconds*/
function autoSave() {
  console.log("Data saved at", new Date().toLocaleTimeString());
}

const autoSaveId = setInterval(autoSave, 30000);
