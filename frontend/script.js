const lift = document.querySelector("#izbiraVaje")
const teza = document.querySelector("#teza");
const rep = document.querySelector("#rep");
const rpe = document.querySelector("#rpe");
const output = document.querySelector("#output");
const button1 = document.querySelector("#submit");
const outputBaza = document.querySelector("#outputBaza");
const button2 = document.querySelector("#show");
const table = document.querySelector("#liftBody");
const liftTable = document.querySelector("#liftTable");
const izbiraVaje2 = document.querySelector("#ppizbiraVaje");
const clean = document.querySelector("#clean");
let stevecRow = 0;
var arrayID = [];

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0');
var yyyy = String(date.getFullYear());
var today = dd +'/' + mm +'/' + yyyy;
document.querySelector("#date").innerHTML = today;
var sqlDate = yyyy + "-" + mm + "-" + dd;

button1.onclick = vpis;
button2.onclick = getLift;
clean.onclick = cleanTable;

async function getLift(params) {
    const response = await fetch("http://127.0.0.1:8000/lift/izpis/" + izbiraVaje2.value);
    const podatki = await response.json();

    for (let i = 0; i < podatki.length; i++) {
        const vrstica = podatki[i];

        console.log(vrstica);
        arrayID[stevecRow] = vrstica.id;
        //-------------------------------
        console.log("ID v arrayu: " + arrayID[stevecRow]);
        //-------------------------------
        tableInsert(vrstica);
        stevecRow ++;
        
    }
    
}
function cleanTable(){
    while (table.rows.length > 0) {
        table.deleteRow(0);
        stevecRow = 0;
        arrayID = [];
    }
}
function tableInsert(vrstica){
    const rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    
    cell1.innerHTML = vrstica.id;
    cell2.innerHTML = vrstica.lift;
    cell3.innerHTML = vrstica.teza;
    cell4.innerHTML = vrstica.rep;
    cell5.innerHTML = vrstica.rpe;
    cell6.innerHTML = vrstica.datum;
    createButton(cell7);
}

function createButton(cell7){
    const btn = document.createElement("button");
    btn.type="button";
    btn.innerHTML = "X";
    btn.value = stevecRow;
    cell7.appendChild(btn);
    //--------------------
    console.log("ArrayID trenuten");
    arrayID.forEach(e => console.log(e));
    console.log("Value buttona: "+ btn.value);
    console.log("value stevec row: " + stevecRow);
    //--------------------
    btn.onclick = function() {
    deleteRowFunction(btn);
} 
}

function deleteRowFunction(btn) {
    var vrstica = btn.closest("tr");
    var currentRow = btn.value;
    //-------------------------------------
    console.log("Value current row: "+ currentRow);
    //-------------------------------------
    var lift_id = getLiftIDBase(currentRow);
    deleteBazaRowFunction(lift_id);
    vrstica.remove();
}
function getLiftIDBase(currentRow) {
    for (let i = 0; i < arrayID.length; i++) {
        if (i == parseInt(currentRow)) {
            var lift_id_ = arrayID[i];
            //---------------------------
            console.log("ovo radi")
            //---------------------------
            return lift_id_;
        }
        else {
            //---------------------------
            console.log(i + " vs "+ currentRow);
            console.log("Ni podatka for some reason")
            //---------------------------
        }
    }
    
}

async function deleteBazaRowFunction(lift_id) {
    //var lift_id = getIDBase(stevecRow);
    try {
        const response = await fetch("http://127.0.0.1:8000/lift/delete/" + lift_id, {
            method: "DELETE", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(lift_id)
        });
    } catch (err) {
        output.innerText = "Napaka: " + err.message;
    }
}
async function vpis() {
    const lift1 = lift.value;
    const teza1 = teza.value;
    const rep1 = rep.value;
    const rpe1 = rpe.value;
    const sqlDate1 = sqlDate;

    try{
        const response = await fetch("http://127.0.0.1:8000/lift/vpis", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({liftQ: lift1, tezaQ: teza1, repQ: rep1, rpeQ: rpe1, sqlDateQ: sqlDate1})
    });
    const data = await response.json();
    output.innerHTML = data.Rezultat;
    pocisti();

    } catch (err) {
        output.innerText = "Napaka: " + err.message;
    }

}
function pocisti() {
    teza.value = "";
    rep.value = "";
    rpe.value = "";
}