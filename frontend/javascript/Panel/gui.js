import {} from './api.js';
import {setDayID, getDayID, setLiftID, setLiftName, getLiftName} from './state.js';
import {insertExerciseTable, chooseDaysTable} from './variable.js';
import {daysToEdit, chooseDayToAddSPlit, editLiftPage} from './controller.js';

function appendRowCell(table) {
    const rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    return cell1;
}
export function createChooseDayButton (nameDay) {
    const cell1 = appendRowCell(chooseDaysTable);
    var btn = document.createElement("button");
    btn.innerHTML = nameDay;
    btn.style.width = "100px";
    btn.value=getDayID();
    cell1.appendChild(btn);
    btn.onclick = () => {
        setDayID(btn.value);
        daysToEdit(getDayID());
    }
}
export function createLastButton() {
    const cell1 = appendRowCell(chooseDaysTable);
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
    btn.id = "liftBtn";
    cell1.appendChild(btn);
    btn.onclick = () => {
        setLiftID(btn.value);    
        setLiftName(podatki[1]);
        editLiftPage(getLiftName());
    }
}

