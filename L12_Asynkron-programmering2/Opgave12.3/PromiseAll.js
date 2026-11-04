
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


Promise.all(promises)
.then(resultater => {
    console.log("Alle lykkedes:", resultater)
})
.catch(fejl => {
    console.log("Mindst én fejler:", fejl)
})