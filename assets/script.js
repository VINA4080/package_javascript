let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let bg1 = document.getElementById("bg1");
let bg2 = document.getElementById("bg2");
let bg3 = document.getElementById("bg3");

btn1.addEventListener("click", () => {
    bg1.classList.remove("bg-primary");
    bg1.classList.add("bg-warning");
})

btn2.addEventListener("click", () => {
    bg2.classList.remove("bg-danger");
    bg2.classList.add("bg-primary");
})

btn3.addEventListener("click", () => {
    bg3.classList.remove("bg-warning");
    bg3.classList.add("bg-success");
})