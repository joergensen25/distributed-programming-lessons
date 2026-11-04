let personer = []

let knap = document.querySelector("#addButton")
knap.onclick = () => {
    let navn = document.querySelector("#navn").value
    let alder = parseInt(document.querySelector("#alder").value)
    if (!isNaN(alder)) {
        personer.push({ id: Math.floor(Math.random() * 1000), navn: navn, alder: alder })
        document.querySelector("#Vispersoner").innerHTML = generateTable();
        AddEventhandlers();
    } else {
        alert("not a number")
    }

}
function FindPerson(id) {
    for (let i = 0; i < personer.length; i++) {
        if (personer[i].id === id) {
            return personer[i];
        }
    }
    return null;
}
function ShowPerson(id) {
    let p = personer[id];
    if (p !== null) {
        alert(p.navn + " " + p.alder);
    }
}
function generateTable() {
    let retur = "<table>";
    for(let i=0;i<personer.length;i++) {
        retur += `<tr id=${i}><td>${personer[i].navn}</td><td>${personer[i].alder}</td></tr>`
    }
    retur += "</table>"
    return retur
}

function AddEventhandlers() {
    let trs = document.querySelectorAll("tr");
    for (let tr of trs) {
        tr.addEventListener("click", () => ShowPerson(parseInt(tr.id)))
    }
}