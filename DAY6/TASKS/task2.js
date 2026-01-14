//Create a calculator object with add, subtract, multiply, divide methods
/*let calculator={add:(a,b)=>a+b,
    sub:(a,b)=>a-b,
    mul=(a,b)=>a*b,
    div=(a,b)=>a/b }}*/
let calculator={add:function(a,b){return a+b},
sub:function(a,b){return a-b},
mul:function (a,b){return a*b},
div:function(a,b){return a/b}
};
console.log(calculator.add(2,4));



// Create a person object with a greet method using this..
let person={name:"Tavishi",
    greet:function(){
        return `Hello,my name is ${this.name}`;
    }
};
console.log(person.greet());



//Create a bankAccount object with deposit, withdraw, getBalance methods..
 let bankAccount={balance:0,
    deposit:function(amount){
        this.balance +=amount;
        return `amount deposited=${amount}`;
    },
    withdraw:function(amount){
        this.balance-=amount;
        return `amount deposited=${amount}`;
    },
getBalance:function(){
    return `total available balance=${this.balance}`;
}}
console.log(bankAccount.deposit(88000));
console.log(bankAccount.withdraw(24500));
console.log(bankAccount.getBalance());


//Create a counter object with increment , decrement , reset methods..
let counter={number:0,

    setCount:function(num){
    this.number=num;
    return this.number;
},

increment:function(){
    this.number++;
    return this.number;
},

decrement:function(){
    this.number--;
    return this.number;
}};

console.log(counter.setCount(7));
console.log(counter.increment());
console.log(counter.decrement());













 