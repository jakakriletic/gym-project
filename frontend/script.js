const beseda1 = document.querySelector("#vnos1");
const beseda2 = document.querySelector("#vnos2");
const izpisText = document.querySelector("#combinedString");
const button1 = document.querySelector("#gumpTest");



button1.onclick = izpis;

function izpis() {
    izpisText.innerText = beseda1.value + " " + beseda2.value;
}


