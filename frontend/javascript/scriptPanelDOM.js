import {getChooseDayButton, addDay, showExercise, insertExercise, cleanTable, returnDay_id_, deleteLift, returnLiftName} from './scriptPanel.js';

const buttonSplit = document.querySelector("#insertSplitDay")
const divSplit = document.querySelector(".SplitDay");
const buttonsplitAdd = document.querySelector("#splitAdd");
const buttonsplitCancle= document.querySelector("#splitCancle");
const divChooseDaySplit = document.querySelector(".chooseDaySplit");
const addExerciseButton = document.querySelector("#addExercise");
const addExerciseField = document.querySelector("#addExerciseField");
const diveditDay = document.querySelector(".editDay");
const goToAddExerciseButton = document.querySelector("#goToAddExercise");
const addExerciseDiv = document.querySelector("#addExerciseDiv");
const buttons = document.querySelector("#buttons");
const cancleExerciseButton = document.querySelector("#cancleExercise");
const cancleLiftsButton = document.querySelector("#cancleLifts");
const box3PDiv = document.querySelector(".box3P");
const editNameTextfield =  document.querySelector("#nameLiftHolder");
const insertExerciseTable = document.querySelector("#insertExercise");

//koda za editanje lifta
//odstrani izbran lift iz strani in iz baze
document.querySelector("#removeLift").onclick = async () => {
    await deleteLift(returnLiftName());
    await updateTable(returnDay_id_());
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
    await updateTable(returnDay_id_());
}
//funkcija za spreminajnje strani in updejtiranje tabele
async function updateTable(day_id) {
    cleanTable(insertExerciseTable);
    await showExercise(day_id);
    box3PDiv.style.display = "none";
    diveditDay.style.display = "flex";
}
export function chooseDayToAddSPlit() {
    divSplit.style.display = "block";
    divChooseDaySplit.style.display = "none";
}
export function daysToEdit(day_id) {
    divChooseDaySplit.style.display = "none";
    diveditDay.style.display = "flex";
    cleanTable(insertExerciseTable);
    showExercise(day_id);
}
export function editLiftPage(name) {
    box3PDiv.style.display = "block";
    diveditDay.style.display = "none";
    editNameTextfield.value = name;
}
cancleLiftsButton.onclick = () => {
    divChooseDaySplit.style.display = "block";
    diveditDay.style.display = "none";
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
buttonSplit.onclick = () => {
    divChooseDaySplit.style.display = "block";
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
    divChooseDaySplit.style.display = "block";
}
//dodaja lifte v dan
addExerciseButton.onclick = async () => {
    if (!addExerciseField.value) {
        addExerciseField.placeholder = "Vnesi lift!";
        return;
    } else {
        await insertExercise(addExerciseField.value, "insert");
        cleanTable(insertExerciseTable);
        await showExercise(returnDay_id_());
        addExerciseField.value = "";
        addExerciseDiv.style.display = "none";
        buttons.style.display = "block";
    }
    
    
}
function goToEditLift() {

}


