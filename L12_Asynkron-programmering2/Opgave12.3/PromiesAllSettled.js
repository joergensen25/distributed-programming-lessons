
function randomPromise() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            let tal = Math.floor(Math.random() * 11)

            if (tal < 7) {
                resolve(tal);
            } else if (tal === 10) {
                reject(new Error("Fejl ved 10"))
            } else {
                reject(tal);
            }

        }, 1000)
    })

}


let promises = [
    randomPromise(),
    randomPromise(),
    randomPromise(),
    randomPromise()
]


Promise.allSettled(promises).then(resultater => {
    //console.log(resultater)
    //console.log(JSON.stringify(resultater, null, 2));

    resultater.forEach(resultat => {
        console.log(resultat)
    })
})