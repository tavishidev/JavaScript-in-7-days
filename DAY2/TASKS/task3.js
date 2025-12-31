let score=45;
if(score<0 || score>100){
    console.log("invalid score");
}
else{
    if(score>=90)
        console.log("grade A");
    else if(score>=80) 
        console.log("grade B");
    else if(score>=70)
        console.log("grade C");
    else if(score>=60)
        console.log("grade D");
    else
        console.log("grade F");              
}
