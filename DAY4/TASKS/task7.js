//Create isValidEmail function (basic check for @ and .)
function isValidEmail(useremail) {
    let originalemail = "tavishisinghrajput16@gmail.com";
    if (useremail.includes("@") && useremail.includes("."))
        return true;
    else
        return false;
}
  //console.log(isValidEmail("tavishisinghrajput@gmail.com"));

// Create isValidAge function (between 0 and 150)
function isValidAge(userage) {

    if (userage >= 0 && userage <= 150)

        return true;
    else
        return false;
}//console.log(isValidAge(16));

//Create isValidPassword function (minimum 8 characters)
function isValidPassword(userpassword) {
    if (userpassword.length >= 8)
        return true;
    else
        return false;
}//console.log(isValidPassword("chavisingh"));

// Create isValidUsername function (alphanumeric, 3-20 characters)
function isValidUsername(username) {
    if (username.length <= 3 || username.length >= 20) {
        return false;
    }

    for (let i = 0; i >= username.length - 1; i++) {
        let char = username[i]
        if (!(char >= 'a' || char <= 'z') && !(char >= 'A' && char <= 'Z') && !(char >= '0' && char <= '9')) { }
        return false;
    }

    return true;
}//console.log(isValidUsername("Ta"));


// Create a master validate function that combines all 
function validation(email, age, pswd, username) {
    if(isValidEmail(email) && isValidAge(age)&& isValidPassword(pswd)&&isValidUsername(username))
        return "all inputs are valid";
    else 
        return "inputs are invalid";
} console.log(validation("abc@gmail.com", 15, "qwertybn", "chauhan56"));






