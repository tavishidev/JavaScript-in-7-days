//Create a counter using closure (returns objects with increment/decrement)

function createCounter() {
  let count = 1;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
  };
}
const count = createCounter();
console.log(count.increment());
console.log(count.decrement());

//Create a function that generates unique IDs
function generatesUniqueID(prefix) {
  let count = 18;
  return function () {
    count += 3;
    let id = `${prefix}_${count}`;
    return id;
  };
}
const userId = generatesUniqueID("dev");
console.log(userId());

// Create a function that remembers all values passed to it
function rememberAllValues() {
  let arr = [];
  return function (value) {
    arr.push(value);
    return arr;
  };
}
const remember = rememberAllValues(); // agr yahan value demge to outer function me jaayega
console.log(remember(6)); // remember ke andr denge to inner se andr jayega
console.log(remember("j"));
console.log(remember(78));

// Create a rate limiter function

//A rate limiter controls how many times a function can be called within a certain time.
/*First call → allowed
Next call → check current time
If time difference < limit → block
Else → allow + update time*/
function ratelimitcontroller(limit, interval,fn) { //limit =kitna call ...interval=kitne time pe ....More than 2 calls within 3 sec → block
  let lastcall = 0;
  let noOfTimes = 0;

  return function (...arg) {
    let now = Date.now();

    if (now - lastcall >= interval) 
      lastcall=now;;

    if (noOfTimes < limit) {
         noOfTimes++;
         return fn(...arg);}
    else {
      return "denied call ";
    }
    
  };
}

function greet(name) {
  console.log("hello",name);
}


const limitedcall = ratelimitcontroller(2,3000,greet);
console.log(limitedcall("tavishi"));
console.log(limitedcall("harman"));
console.log(limitedcall("ashima")); 


// Create a function that caches expensive calculations

/*Memoization = caching function results
Input → Output is remembered
Same input again → use memory, not logic*/

function createcachefunction(fn) {
  let cache = {};
  return function (...arg) {
    let key = arg.join(","); //array to string conversion
    if (cache[key] !== undefined) {
      console.log("from cache");
      return cache[key];
    } else {
      console.log("....calculating");
      let result = fn(...arg);
      cache[key] = result; //save
      return result;
    }
  };
}

function mul(n1, n2) {
  let mul = n1 * n2;
  return mul;
}
const cachevalue = createcachefunction(mul);
console.log(cachevalue(6, 7));
console.log(cachevalue(6, 7));
