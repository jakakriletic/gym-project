import {getChooseDayButton, deleteDay, showExercise, addDay, insertExercise, deleteLift} from './api.js';
import {cleanTable} from './gui.js';
import {getDayID, getLiftName} from './state.js';
import {insertExerciseTable, dayTable, chooseDaysTable} from './variable.js';

const divChooseDay = document.querySelector(".chooseDaySplit");
const divEditDay = document.querySelector(".editDay");
const divSplit = document.querySelector(".SplitDay");
const box3PDiv = document.querySelector(".box3P");
const editNameTextfield =  document.querySelector("#nameLiftHolder");
const addExerciseField = document.querySelector("#addExerciseField");
const divChooseDaySplit = document.querySelector(".chooseDaySplit");
const buttonSplit = document.querySelector("#insertSplitDay");
const diveditDay = document.querySelector(".editDay");
const goToAddExerciseButton = document.querySelector("#goToAddExercise");
const addExerciseDiv = document.querySelector("#addExerciseDiv");
const buttons = document.querySelector("#buttons");
const cancleExerciseButton = document.querySelector("#cancleExercise");
const cancleLiftsButton = document.querySelector("#cancleLifts");

document.querySelector("#deleteDay").onclick = async () => {
    await deleteDay(getDayID());
    cleanTable(dayTable);
    await getChooseDayButton();
    divChooseDay.style.display = "block";
    divEditDay.style.display = "none";
}

export function daysToEdit(day_id) {
    divChooseDay.style.display = "none";
    divEditDay.style.display = "flex";
    cleanTable(insertExerciseTable);
    showExercise(day_id);
}

export function chooseDayToAddSPlit() {
    divSplit.style.display = "block";
    divChooseDay.style.display = "none";
}
export function editLiftPage(name) {
    box3PDiv.style.display = "block";
    divEditDay.style.display = "none";
    editNameTextfield.value = name;
}

document.querySelector("#splitAdd").onclick = () => {
    var newSplitDayInput = document.querySelector("#split");
    if (newSplitDayInput) {
        addDay(newSplitDayInput.value);
        location.reload();
    }
    else {
        newSplitDayInput.placeholder = "Napiši ime!"
    }
    
}
document.querySelector("#addExercise").onclick = async () => {
    if (!addExerciseField.value) {
        addExerciseField.placeholder = "Vnesi lift!";
        return;
    } else {
        await insertExercise(addExerciseField.value, "insert");
        cleanTable(insertExerciseTable);
        await showExercise(getDayID());
        addExerciseField.value = "";
        addExerciseDiv.style.display = "none";
        buttons.style.display = "block";
    }
}
//koda za editanje lifta
//odstrani izbran lift iz strani in iz baze
document.querySelector("#removeLift").onclick = async () => {
    await deleteLift(getLiftName());
    await updateTable(getDayID());
}
//cancla editanje lifta
document.querySelector("#cancleLiftEdit").onclick = () => {
    box3PDiv.style.display = "none";
    diveditDay.style.display = "flex";
}
//edita liftovo ime in ga shrani v bazo
document.querySelector("#editName").onclick = async () => {
    var liftName = editNameTextfield.value;
    await insertExercise(liftName, "edit");
    await updateTable(getDayID());
}
//funkcija za spreminajnje strani in updejtiranje tabele
async function updateTable(day_id) {
    cleanTable(insertExerciseTable);
    await showExercise(day_id);
    box3PDiv.style.display = "none";
    diveditDay.style.display = "flex";
}
//brisanje dnevov iz baze -- klici in DOM
document.querySelector("#deleteDay").onclick = async () => {
    await deleteDay(getDayID());
    cleanTable(chooseDaysTable);
    await getChooseDayButton();
    divChooseDaySplit.style.display = "block";
    diveditDay.style.display = "none";
}
//za canclanje izbire tvojeta brosplita
document.querySelector("#splitCancle").onclick = () => {
    cancle();
}
//funkcija ki gre nazaj 
function cancle() {
    divSplit.style.display = "none";
    divChooseDaySplit.style.display = "block";
}
buttonSplit.onclick = () => {
    divChooseDaySplit.style.display = "block";
    buttonSplit.style.display = "none";
    getChooseDayButton();
}
goToAddExerciseButton.onclick = () => {
    addExerciseDiv.style.display = "block";
    buttons.style.display = "none";
}
cancleExerciseButton.onclick = () => {
    addExerciseDiv.style.display = "none";
    buttons.style.display = "block";
    addExerciseField.value = "";
    addExerciseField.placeholder = "Add lift";
}
cancleLiftsButton.onclick = () => {
    divChooseDaySplit.style.display = "block";
    diveditDay.style.display = "none";
}