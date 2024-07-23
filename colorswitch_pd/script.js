// let first = document.querySelector(".boxone");
// let colormode ="white"; 
// first.addEventListener("click", () =>{
// if (colormode === "white"){
//     colormode = "black"
//    first.style.backgroundColor= "black";
// }else{
//     colormode = "white"
//     first.style.backgroundColor= "white";
// }
// console.log(colormode);
// });

// let second = document.querySelector(".boxtwo");
// let colormode2 = prompt("enter color");
// second.addEventListener("click",()=>{
// second.style.backgroundColor = colormode2;
// console.log(colormode2);
// });

let button = document.querySelector("button");
let body = document.querySelector("body")
button.addEventListener("click", changebg );
function changebg() {
    let numbs = Math.floor(Math.random() * 0xffffff).toString(16);
    body.style.backgroundColor = `#${numbs}`;
    console.log(numbs);
};
