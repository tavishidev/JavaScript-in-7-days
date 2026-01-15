const product=[{id1:2510096,name:"jeans",price:324,category:"clothes"},
    {id2:2510029,name:"phone",price:543,category:"electronics"},
    {id3:2510025,name:"hat",price:45,category:"accessories"},
   {id4:2510029,name:"watch",price:768,category:"electronics"},
    {id5:2510089,name:"book",price:457,category:"education"}];
 
  /* Create an array of 5 product objects (id, name, price, category) 
   Filter products by category 
   Find the most expensive product 
   Calculate total value of all products 
   Sort products by price 
   Group products by category */

//Filter products by category 
const filtercCategory=product.filter((a)=>a.category==="electronics");
console.log(filtercCategory);

//Find the most expensive product 
const mostExpensive=product.reduce((max,product)=>product.price > max.price ? product : max);
console.log(mostExpensive);

//Calculate total value of all products 
const totalValue=product.reduce((sum,value)=> sum + value.price ,0);
console.log(totalValue);

//Sort products by price 
const sortPrice=product.sort((a,b)=>a.price-b.price);
console.log(sortPrice);

//Group products by category 
const groupCategory=product.sort((a)=>a.category);
console.log(groupCategory);




