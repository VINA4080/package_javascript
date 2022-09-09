let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let bg1 = document.getElementById("bg1");
let bg2 = document.getElementById("bg2");
let bg3 = document.getElementById("bg3");

btn1.addEventListener("click", () => {
    bg1.classList.toggle("bg-warning");
})

btn2.addEventListener("click", () => {
    bg2.classList.toggle("bg-dark");
})

btn3.addEventListener("click", () => {
    bg3.classList.toggle("bg-danger");
})

// const buttons = document.querySelectorAll(".btn");
// const bg = document.querySelectorAll(".box");

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", () => {
//         bg[i].classList.toggle('red');
//     })
// }
