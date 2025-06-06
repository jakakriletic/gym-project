//import {splitAddFunction} from './scriptLift.js';
const btn = document.querySelector("#divToggle");
const box1Leva = document.querySelector(".box1Leva");
const box1Desna = document.querySelector(".box1Desna");

const box2Leva = document.querySelector(".box2Leva");
const box2Desna = document.querySelector(".box2Desna");

btn.onclick = () => {
    box1Leva.style.display = "none";
    box1Desna.style.display = "none";

    box2Leva.style.display = "block";
    box2Desna.style.display = "block";
}



