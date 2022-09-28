"use strict";

const numbers = document.querySelectorAll(".num");
let rating = 0;
const displayRating = document.querySelector(".rating");

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
        displayRating.innerHTML = rating;
    }
}
