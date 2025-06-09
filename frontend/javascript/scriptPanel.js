const chooseDaysTable = document.querySelector("#chooseDaysTable");
var dayID;
import {chooseDayToAddSPlit} from './scriptPanelDOM.js';
import {daysToEdit} from './scriptPanelDOM.js';

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
    const cell1 = updateChooseDayTable();
    var btn = document.createElement("button");
    btn.innerHTML = nameDay;
    btn.style.width = "100px";
    btn.value=dayID;
    cell1.appendChild(btn);
    btn.onclick = () => {
        daysToEdit();
    }
}

function updateChooseDayTable() {
    const rowCount = chooseDaysTable.rows.length;
    var row = chooseDaysTable.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    return cell1;
}
function createLastButton() {
    const cell1 = updateChooseDayTable();
    var btn = document.createElement("button");
    btn.innerHTML = "ADD";
    btn.style.width = "100px";
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



