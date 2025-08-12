function namegenerator(a, b, c) {
    console.log(a.concat(b, c));
}
function selector(a, b,c,d,e,f) {
    let prob = Math.floor(Math.random() * 3);
    b = a[prob];
    let prob1 = Math.floor(Math.random() * 3);
    d= c[prob1];
    let prob2 = Math.floor(Math.random() * 3);
    f= e[prob2];
    namegenerator(b,d,f);
}

let adj = {
    0: "Crazy",
    1: "Amazing",
    2: "Fire"
}
let shop = {
    0: "Engine",
    1: "Food",
    2: "Garments"
}
let Word = {
    0: "Bros",
    1: "Limited",
    2: "Hub"
}
let adj1='';
let shop1='';
let Word1='';
selector( adj ,adj1,shop,shop1,Word,Word1);