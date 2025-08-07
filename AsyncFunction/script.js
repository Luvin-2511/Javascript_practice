async function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(350)
        }, 1000);
    })
}

async function main(){
    console.log("kya haal h?")
    console.log("Ho rhi h")
    let Data= await getData();
    console.log(Data)
    console.log("Baad me dekhunga")
}

main();