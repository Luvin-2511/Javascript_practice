let num=prompt("Enter your number:");
let fact=1;
for(let i=1;i<=num;i++){
    fact*=i;
}
alert("Factorial:"+fact);



// Using reduce method
let product=(a,b)=>{
    return a*b;
}

let n =prompt("Enter a number:");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i]=i;
}
let fact1=arr.reduce(product);
alert(fact1);
