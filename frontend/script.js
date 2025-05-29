const lift = document.querySelector("#izbiraVaje")
const teza = document.querySelector("#teza");
const rep = document.querySelector("#rep");
const rpe = document.querySelector("#rpe");
const output = document.querySelector("#output");
const submit = document.querySelector("#submit");

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0');
var yyyy = String(date.getFullYear());
var today = dd +'/' + mm +'/' + yyyy;
document.querySelector("#date").innerHTML = today;
var sqlDate = yyyy + "-" + mm + "-" + dd;


submit.onclick = vpis;



async function vpis() {
    const lift1 = lift.value;
    const teza1 = teza.value;
    const rep1 = rep.value;
    const rpe1 = rpe.value;
    const sqlDate1 = sqlDate;

    const response = await fetch("http://127.0.0.1:8000/lift", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({liftQ: lift1, tezaQ: teza1, repQ: rep1, rpeQ: rpe1, sqlDateQ: sqlDate1})
    });

    const data = await response.json();
    output.innerHTML = data.Rezultat;
    pocisti();
}
function pocisti() {
    teza.value = "";
    rep.value = "";
    rpe.value = "";
}