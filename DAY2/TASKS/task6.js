let num1=3,num2= 7;
console.log("performing different operation on given two number");
console.log("two numbers are:",num1,",",num2);

let operator="-";
switch(operator){
    case "+":
        console.log("addition:",num1+num2);
        break;
    case "-":
        console.log("subtraction:",Math.abs(num1-num2));
        break;
    case "/":
        if(num2===0)
            console.log("division by zero not possible");
        else
            console.log("division:",num1/num2);
        break;
    case "%":   
        if(num2===0)
            console.log("can't operate remainder operation");
        else
            console.log("remainder:",num1%num2);
        break;
    default:
        console.log("invalid operators");
            
}
