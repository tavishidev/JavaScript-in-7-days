//Create a function to capitalize the first letter of a string
function capitalizeFirstLetter(string){
    let str1=string[0].toUpperCase();
    let str2=string.slice(1,string.length);//slice(1) is also correct.
    return str1+str2;
}
console.log(capitalizeFirstLetter("hello world"));
         


//  Create a function to reverse a string Tavishi=ihsivaT
function reverseString(string){
    let originalstr="string";
    let str=string.split("")
    let reversestr="";


    for(let i= str.length-1 ;i>=0;i--){
        reversestr +=str[i];
    }
    return reversestr;
    
}
console.log(reverseString("tavishi"));


//  Create a function to check if a string is a palindrome
const palindrome=(string)=>{ 
     let str=string.split("");
     let reversestr="";
     for( let i= str.length-1;i>=0;i--){
        reversestr += str[i];
    }
        
    if(string.toLowerCase()===reversestr.toLowerCase()) { //same case me leke aai  hun
        return `${string} is a palindrome`;}
    else {
        return `${string} is not a palindrome`;}
}
console.log(palindrome("Mam"));


//Create a function to count words in a sentence 
function countWords(string){
    let count=0;
    let str=string.split(" ");
    for(let i=0;i<=str.length-1;i++){
        count++;
    }
    return count;
}
console.log(countWords("my name is tavishi singh"));












