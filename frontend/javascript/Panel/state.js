let ID_day=0;
let ID_lift = 0;
let name_lift = "";

export function setDayID(id) {
    ID_day = id;
}
export function getDayID() {
    return ID_day;
}

export function setLiftID(id) {
    ID_lift = id;
}
export function getLiftID() {
    return ID_lift;
}

export function setLiftName(name) {
    name_lift = name;
}
export function getLiftName() {
    return name_lift;
}

