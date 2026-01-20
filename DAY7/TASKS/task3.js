/* setTimeout Practice :
   Log a message after 3 seconds 
   Create a countdown timer (5, 4, 3, 2, 1, Go!) 
   Log multiple messages at different intervals 
   Create a function that delays any operation by n seconds 
   Clear a timeout before it executes */

//Log a message after 3 second
const message = setTimeout(() => {
  console.log("everything will be fine ");
}, 3000);

//  Create a countdown timer (5, 4, 3, 2, 1, Go!)

for (let i = 5; i >= 1; i--) {
  setTimeout(
    function () {
      console.log(i);
    },(6 - i) * 1000,
)}
  setTimeout(() => console.log("GO!"),6000);

// Log multiple messages at different intervals 
setTimeout(()=>console.log("message after 7sec"),7000);
setTimeout(()=>console.log("message after 8sec"),8000);
setTimeout(()=>console.log("message after 9sec"),9000);

// Create a function that delays any operation by n seconds
function delay(callback,seconds){
    setTimeout(function(){
        callback();
    },seconds*1000);
}
delay(()=>console.log(" message logged after 10 second"),10);


// Clear a timeout before it executes
const timeId=setTimeout(()=>console.log("this will not run"),1000);
clearTimeout(timeId);





