let username = "arushi";
let pswd = "HELLO123";
let i;

//for username
for (i = 3; i>0 ; i--) {//only 3 attempts possible
    if (username === "ARUSHI") {
        console.log("username matches");
        if (pswd === "HELLO0123"){
            console.log("password matches");
            console.log("login successful");
            break;
        }

        else {
            console.log("invalid password");
            console.log("login unsuccessful");
            break;
        }
    }
    else {
        console.log("username not found");
    }
    
}
console.log("user reached maximum attempts");








