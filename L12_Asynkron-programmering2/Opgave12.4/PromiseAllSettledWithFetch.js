let url = "https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new"


async function hentTal() {
    let response = await fetch (url)

    if (response.status !== 200) {
        throw new Error(response.status)
    }

    let data = await response.text()
    let tal = Number(data.trim())

    if (tal < 7) {
        return tal
    } else if (tal === 10) {
        throw new Error("Fejl ved 10")
    } else {
        throw tal
    }
}



let promises = [
    hentTal(),
    hentTal(),
    hentTal(),
    hentTal()
]



Promise.allSettled(promises)
.then(resultater => {
    //console.log("Alle lykkedes:", resultater)

    resultater.forEach(resultat => {
        console.log(resultat)
    })
})
.catch(fejl => {
    console.log("Fejl:", fejl)
})