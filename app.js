"use strict";

const numbers = document.querySelectorAll(".num");
const submitBtn = document.querySelector(".submit");
let rating = 0;

for (let i = 0; i < 5; i++) {
    numbers[i].addEventListener("click", removeLastChoose);
    numbers[i].addEventListener("click", showNewChoose);
 
    function removeLastChoose() {
        for (let j = 0; j < 5; j++) {
            numbers[j].classList.remove("selected");
        }
    }

    function showNewChoose() {
        numbers[i].classList.add("selected");
        rating = +numbers[i].innerHTML;
    }
}
    
window.addEventListener("unload", removeAllEventListeners);

function removeAllEventListeners() {
    numbers[i].removeEventListener("click", removeLastChoose);
    numbers[i].removeEventListener("click", showNewChoose);
}