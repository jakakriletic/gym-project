const beseda1 = document.querySelector("#vnos1");
const beseda2 = document.querySelector("#vnos2");
const output = document.querySelector("#output");
const button1 = document.querySelector("#submit");



button1.onclick = izpis;

async function izpis() {
    const t1 = beseda1.value;
    const t2 = beseda2.value;

    const response = await fetch("http://127.0.0.1:8000/process", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({text1: t1, text2: t2})
    });

    const data = await response.json();
    output.innerHTML = data.Rezultat;
}


