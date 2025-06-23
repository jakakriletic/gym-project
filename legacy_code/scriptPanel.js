const chooseDaysTable = document.querySelector("#chooseDaysTable");
const insertExerciseTable = document.querySelector("#insertExercise");
var dayID;
var liftName;
var day_id_;
var liftID;
import {chooseDayToAddSPlit, editLiftPage, daysToEdit} from './scriptPanelDOM.js';

export async function getChooseDayButton() {
    const response = await fetch("http://127.0.0.1:8000/lift/gymDay");
    const podatki = await response.json();
    
    for (let i = 0; i <podatki.length; i++) {
        var nameDay = podatki[i];
        dayID = podatki[i][0];
        createChooseDayButton(nameDay[1]);
    }
    createLastButton();
}

function createChooseDayButton (nameDay) {
    const cell1 = appendRowCell(chooseDaysTable);
    var btn = document.createElement("button");
    btn.innerHTML = nameDay;
    btn.style.width = "100px";
    btn.value=dayID;
    cell1.appendChild(btn);
    btn.onclick = () => {
        setDayID(btn.value);
        day_id_ = btn.value;
        daysToEdit(day_id_);
    }
}
let IDDay=0;
export function setDayID(id) {
    IDDay = id;
}
export function getDayID() {
    return IDDay;
}


function createLastButton() {
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

export async function addDay(name) {
    console.log("POSLANO IME:" +name)
    try {
        const response = await fetch("http://127.0.0.1:8000/lift/addDay", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({day_name:name})
        })
    } catch (err) {
         console.error("Fetch napaka:", err.message);
    }
}


export async function showExercise(day_id) {
    const response = await fetch("http://127.0.0.1:8000/lift/getExercise/"+ day_id);
    const podatki = await response.json();
    if (podatki) {
        for (var i = 0; i<podatki.length; i++) {
            showLiftButton(podatki[i]);
            console.log(podatki[i]);
        }
    } else {
        console.log("ni exercisov");
    }
    
    
}
function showLiftButton(podatki) {
    const cell1 = appendRowCell(insertExerciseTable);
    var btn = document.createElement("button");
    btn.innerHTML = podatki[1];
    btn.value = podatki[0];
    btn.id = "liftBtn";
    cell1.appendChild(btn);
    btn.onclick = () => {
        liftID = btn.value;    
        liftName = podatki[1];
        editLiftPage(liftName);
    }
}
//samo vrača return -- uporabljeno za scriptPanel
export function getLiftName() {
    return liftName;
}

//dodaja liftev bazo
export async function insertExercise(name, izbira) {
    var idD = day_id_;
    console.log(name);
    console.log(idD);
    
    try {
        if (izbira == "insert") {
            const response = await fetch("http://127.0.0.1:8000/lift/addLift", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({liftName:name, day_id:idD})
            })
        }else if (izbira == "edit") {
            const response = await fetch("http://127.0.0.1:8000/lift/editLift", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({liftName:name, day_id:idD,id:liftID})
            })
        }
        
    } catch (err) {
         console.error("Fetch napaka:", err.message);
    }
}

//briše lifte iz baze gymDayLifts
export async function deleteLift(name) {
    console.log(name);
    try {
        const response = await fetch("http://127.0.0.1:8000/lift/deleteLift/" + name, {
            method: 'DELETE'
        })
    } catch (err) {
         console.error("Fetch napaka:", err.message);
    }
}
//briše dan lifta --chest day,back day, leg day...--- iz tabele gymDay
export async function deleteDay(id) {
    try {
        const response = await fetch("http://127.0.0.1:8000/lift/deleteDay/" + id, {
            method: 'DELETE'
        })
    } catch (err) {
         console.error("Fetch napaka:", err.message);
    }
    
}
export function cleanTable(table){
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}
function appendRowCell(table) {
    const rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    return cell1;
}
export function getDay_id_() {
    return day_id_;
}


