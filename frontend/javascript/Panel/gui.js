import {} from './api.js';
import {setDayID, getDayID, setLiftID, setLiftName, getLiftName} from './state.js';
import {insertExerciseTable, dayTable, addProgramTable} from './variable.js';
import {daysToEdit, chooseDayToAddSPlit, editLiftPage, program} from './controller.js';

function appendRowCell(table) {
    const rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    return cell1;
}
export function createChooseDayButton(nameDay) {
    const cell1 = appendRowCell(dayTable);
    var btn = document.createElement("button");
    btn.innerHTML = nameDay;
    btn.style.width = "100px";
    btn.value=getDayID();
    btn.id = "dayButton";
    cell1.appendChild(btn);
    btn.onclick = () => {
        setDayID(btn.value);
        daysToEdit(getDayID());
    }
}
export function createLastButton() {
    const cell1 = appendRowCell(dayTable);
    var btn = document.createElement("button");
    btn.innerHTML = "ADD";
    btn.style.width = "100px";
    btn.id = "addButton";
    cell1.appendChild(btn);
    btn.onclick = () => {
        chooseDayToAddSPlit();
    }
}
export function cleanTable(table){
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}
export function showLiftButton(podatki) {
    const cell1 = appendRowCell(insertExerciseTable);
    var btn = document.createElement("button");
    btn.innerHTML = podatki[1];
    btn.value = podatki[0];
    btn.id = "liftButton";
    cell1.appendChild(btn);
    btn.onclick = () => {
        setLiftID(btn.value);    
        setLiftName(podatki[1]);
        editLiftPage(getLiftName());
    }
}

export function createProgramButton(ID_btn, name_btn) {
    const cell1 = appendRowCell(addProgramTable);
    var btn = document.createElement('button');
    btn.innerHTML = name_btn;
    btn.value = ID_btn;
    btn.id= "program_button";
    cell1.appendChild(btn);
    btn.onclick = () => {
        program();
    }
}



