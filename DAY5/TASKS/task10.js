// Create a shopping cart (array of items with name and price)
let cart=[{product:"jeans",price:599}, {product:"cap",price:50},{product:"cornflakes",price:240},{product:"lipgloss",price:257}];

// Calculate total price 
let totalPrice=cart.reduce((sum1,item)=>sum1+item.price,0);

// Apply 10% discount to items over $50
let discount=0;
cart.forEach(item=>{
    if(item.price>50)
      discount+=item.price *0.1;
});


// Sort cart by price 
let sortCart=[...cart].sort((a,b)=>a.price-b.price);

//Filter items within a budget
function pocketMoney(budget){
      return cart.filter(item=>item.price<=budget)};
      

//Generate a summary: item count, subtotal, discounts, final total 
let summary=[{itemCount:cart.length },{ subtotal:totalPrice} , {discounts:discount} , {finaalTotal:totalPrice-discount}];

console.log(cart);
console.log("sortedCart:",sortCart);
console.log("items under budget:",pocketMoney(500));
console.log("summary:",summary);








