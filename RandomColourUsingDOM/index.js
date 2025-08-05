// const color={
//     0:'red',
//     1:'green',
//     2:'black',
//     3:'gray',
//     4:'pink',
//     5:'red',
//     6:'orange',
//     7:'violet',
//     8:'white',
//     9:'aliceblue'
// };
// const box={
//     0:"box1",
//     1:"box2",
//     2:"box3",
//     3:"box4",
//     4:"box5"
// }
// let randcol=Math.floor(Math.random()*10);
// let randbox=Math.floor(Math.random()*5);
// console.log(box[randbox])
// // document.getElementById("box1").style.backgroundColor="red"
// let boxselect=document.getElementById(box[randbox]).style.backgroundColor=color[randcol];



// Another Better Method
function RandomCol(){
    let val1=Math.ceil(Math.random()*255);
    let val2=Math.ceil(Math.random()*255);
    let val3=Math.ceil(Math.random()*255);
    return `rgb(${val1},${val2},${val3})`;
}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor=RandomCol();
    e.style.color=RandomCol();
});
