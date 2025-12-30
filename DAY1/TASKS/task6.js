const p1=100, p2=200, p3=300, p4=400, p5=500;
const subtotal=p1+p2+p3+p4+p5;
//appylin 10% discount
const discount_price=subtotal-(subtotal*10/100);
//adding 8% tax to the discounted price
const tax_added=discount_price+(discount_price *8/100);
console.log("price of 5 product \n p1=",p1,"\n p2=",p2,"\n p3=",p3,"\n p4=",p4,"\n p5=",p5);
console.log("discounted price=", discount_price,"rs");
console.log("total final price=",tax_added,"rs");

