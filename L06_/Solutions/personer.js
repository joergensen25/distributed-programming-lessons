import {personer, addPerson, generateTable, find, filter} from "./personerlogik.js"

const addKnap = document.querySelector("#addButton")
const searchKnap = document.querySelector("#searchButton")

function visPersoner(personerListe = personer) {
    document.querySelector("#Vispersoner").innerHTML = generateTable(personerListe)
}

addKnap.addEventListener("click", () => {
    const navn = document.querySelector("#navn").value
    const alder = Number.parseInt(document.querySelector("#alder").value, 10)

    if (Number.isNaN(alder)) {
        alert("Alder skal være et tal")
        return
    }

    addPerson(navn, alder)
    visPersoner()
})

searchKnap.addEventListener("click", () => {
    const searchNavn = document.querySelector("#searchNavn").value
    const searchAlder = document.querySelector("#searchAlder").value

    if (searchNavn.trim() !== "") {
        const match = find(searchNavn)
        visPersoner(match ? [match] : [])
        return
    }

    if (searchAlder.trim() !== "") {
        const alder = Number.parseInt(searchAlder, 10)

        if (Number.isNaN(alder)) {
            alert("Alder skal være et tal")
            return
        }

        visPersoner(filter(alder))
        return
    }

    visPersoner()
})
