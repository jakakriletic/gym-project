import {getChooseDayButton} from './scriptPanel.js';
const buttonSplit = document.querySelector("#insertSplitDay")
const divSplit = document.querySelector(".SplitDay");
const buttonsplitAdd = document.querySelector("#splitAdd");
const buttonsplitCancle= document.querySelector("#splitCancle");


buttonSplit.onclick = () => {
    //divSplit.style.display = "block";
    //buttonSplit.style.display = "none";
    getChooseDayButton();
}
/*
buttonSplit.onclick = () => {
    divSplit.style.display = "block";
    buttonSplit.style.display = "none";
    getChooseDayButton();
}
buttonsplitAdd.onclick = () => {
    divSplit.style.display = "none";
    buttonSplit.style.display = "block";
    splitAddFunction();
}
buttonsplitCancle.onclick = () => {
    divSplit.style.display = "none";
    buttonSplit.style.display = "block";
}*/