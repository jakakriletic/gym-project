import {getChooseDayButton} from './scriptPanel.js';
import {addDay} from './scriptPanel.js';
const buttonSplit = document.querySelector("#insertSplitDay")
const divSplit = document.querySelector(".SplitDay");
const buttonsplitAdd = document.querySelector("#splitAdd");
const buttonsplitCancle= document.querySelector("#splitCancle");
const chooseDaySplit = document.querySelector(".chooseDaySplit");

export function chooseDayToAddSPlit() {
    divSplit.style.display = "block";
    chooseDaySplit.style.display = "none";
}
export function daysToEdit() {

}
buttonSplit.onclick = () => {
    chooseDaySplit.style.display = "block";
    buttonSplit.style.display = "none";
    getChooseDayButton();
}

buttonsplitAdd.onclick = () => {
    var newSplitDayInput = document.querySelector("#split");
    if (newSplitDayInput) {
        addDay(newSplitDayInput.value);
        location.reload();
    }
    else {
        console.log("ne dela");
        newSplitDayInput.placeholder = "Napiši ime!"
    }
    
}
buttonsplitCancle.onclick = () => {
    cancle();
}
function cancle() {
    divSplit.style.display = "none";
    chooseDaySplit.style.display = "block";
}
/*
buttonSplit.onclick = () => {
    divSplit.style.display = "block";
    buttonSplit.style.display = "none";
    getChooseDayButton();
}*/
