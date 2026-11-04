
export let personer = []

export function addPerson(navn, alder) {
    personer.push({navn: navn.trim(), alder})
}

export function findPersonByName(navn) {
    const soegeOrd = navn.trim().toLowerCase()
    return personer.find(person => person.navn.toLowerCase() === soegeOrd)
}

export function filterPersonsByAge(alder) {
    const alderTal = Number.parseInt(alder, 10)
    if (Number.isNaN(alderTal)) {
        return []
    }

    return personer.filter(person => person.alder === alderTal)
}

export const find = findPersonByName
export const filter = filterPersonsByAge

export function generateTable(personerListe = personer) {
    let retur = "<table>";
    for(let person of personerListe) {
        retur += `<tr><td>${person.navn}</td><td>${person.alder}</td></tr>`
    }
    retur += "</table>"
    return retur
}
