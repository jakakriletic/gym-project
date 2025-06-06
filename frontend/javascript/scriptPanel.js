const buttonSplit = document.querySelector("#insertSplitDay")
const divSplit = document.querySelector(".SplitDay");
const buttonsplitAdd = document.querySelector("#splitAdd");
const buttonsplitCancle= document.querySelector("#splitCancle");

buttonSplit.onclick = () => {
    divSplit.style.display = "block";
    buttonSplit.style.display = "none";
}
buttonsplitAdd.onclick = () => {
    divSplit.style.display = "none";
    buttonSplit.style.display = "block";
    splitAddFunction();
}
buttonsplitCancle.onclick = () => {
    divSplit.style.display = "none";
    buttonSplit.style.display = "block";
}
/*
//dodajanje dneva v split
const splitTable = document.querySelector(".splitTable");
const splitAdd = document.querySelector("#splitAdd");
const split = document.querySelector("#split");

function splitAddFunction() {
    console.log("PRide čes addSplitDay")
    var rowCount = splitTable.rows.length;
    var row = splitTable.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    createSplitButton(cell1);
}

function createSplitButton(cell1) {
    const btn = document.createElement("button");
    btn.innerHTML = split.value;
    btn.className = "btnSplit";
    cell1.appendChild(btn);
    split.value = "";
}*/