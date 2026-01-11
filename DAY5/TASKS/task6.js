let arr=[-23,-45,-88,67];
let arrS=arr.reduce((Sum ,v)=> Sum+v,0);
let arrP=arr.reduce((prod,v)=>prod*v,1);
let arrM=arr.reduce((max,v)=>{
 if(v>max){
    return v;}
else
    return max})
console.log(arrM);
let arrm= arr.reduce((min,v)=>min<v?min:v);
console.log(arrm);







    