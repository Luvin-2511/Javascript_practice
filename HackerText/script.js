async function text(tex){
    let rand=Math.ceil(Math.random()*7);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(tex);
        },rand*1000);
    })
}

async function main(){
    let test1=await text("Initializing Hacking");
    document.getElementById("text1").innerHTML=test1;
    let test2=await text("Reading Files");
    document.getElementById("text2").innerHTML=test2;
    let test3=await text("Almost Done");
    document.getElementById("text3").innerHTML=test3;
    let test4=await text("AHcked!!");
    document.getElementById("text4").innerHTML=test4;
}


main();