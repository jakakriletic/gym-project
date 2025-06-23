import {createChooseDayButton, createLastButton, showLiftButton} from './gui.js';
import {getDayID, getLiftID, setDayID} from './state.js';
import {} from './variable.js';

//iz baze pobere dneve in jih pokaže na strani kot gumb
export async function getChooseDayButton() {
    const response = await fetch("http://127.0.0.1:8000/lift/gymDay");
    const podatki = await response.json();
    
    for (let i = 0; i <podatki.length; i++) {
        var nameDay = podatki[i];
        setDayID(podatki[i][0]);
        createChooseDayButton(nameDay[1]);
    }
    createLastButton();
}

//pokaže vaje v specifičnem dnevu
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
//doda nov lifting dan glede na ime
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

//dodaja liftev bazo
export async function insertExercise(name, izbira) {
    var idD = getDayID();
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
            body: JSON.stringify({liftName:name, day_id:idD,id:getLiftID()})
            })
        }
        
    } catch (err) {
         console.error("Fetch napaka:", err.message);
    }
}
//briše lifte iz baze execrises
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
//briše dneve iz baze
export async function deleteDay(id) {
    try {
        const response = await fetch("http://127.0.0.1:8000/lift/deleteDay/" + id, {
            method: 'DELETE'
        })
    } catch (err) {
         console.error("Fetch napaka:", err.message);
    }
    
}