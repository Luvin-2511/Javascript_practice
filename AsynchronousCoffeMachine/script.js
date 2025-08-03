function coffeebrew(coffee){
    const Prob=Math.ceil(Math.random()*4000);
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(`${coffee} is ready !!!`)
        }, Prob);
    })
}

coffeebrew("cappacinno").then((e)=>{
    console.log(e)
})