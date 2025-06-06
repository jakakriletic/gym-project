import {getChooseDayButton} from './scriptPanel.js';
import {addDay} from './scriptPanel.js';
const buttonSplit = document.querySelector("#insertSplitDay")
const divSplit = document.querySelector(".SplitDay");
const buttonsplitAdd = document.querySelector("#splitAdd");
const buttonsplitCancle= document.querySelector("#splitCancle");
const chooseDaySplit = document.querySelector(".chooseDaySplit");


buttonSplit.onclick = () => {
    chooseDaySplit.style.display = "block";
    buttonSplit.style.display = "none";
    getChooseDayButton();
}
export function chooseDayToAddSPlit() {
    divSplit.style.display = "block";
    chooseDaySplit.style.display = "none";
}
buttonsplitAdd.onclick = () => {
    var newSplitDayInput = document.querySelector("#split");
    if (newSplitDayInput) {
        addDay(newSplitDayInput.value);
        //location.reload();
    }
    else {
        console.log("ne dela");
        newSplitDayInput.placeholder = "Napiši ime!"
    }
    
}
buttonsplitCancle.onclick = () => {
    divSplit.style.display = "none";
    buttonSplit.style.display = "block";
}
/*
buttonSplit.onclick = () => {
    divSplit.style.display = "block";
    buttonSplit.style.display = "none";
    getChooseDayButton();
}*/
