const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success=false;
    if(success)
         resolve("Promise 2 resolved");
    else
        reject("promise 2 failed");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 3000);
});


//
Promise.all([p1,p2,p3])
.then((results)=>console.log(results))
.catch((error)=>console.log(error))

Promise.race([p1, p2, p3])
  .then(result => console.log(result))
  .catch(error => console.error(error));


