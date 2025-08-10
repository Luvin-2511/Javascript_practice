let arr=[13,43,32,321,21,-23,332,21];
let sum=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        sum+=arr[i];
    }else{
        break;
    }
}
console.log(sum);