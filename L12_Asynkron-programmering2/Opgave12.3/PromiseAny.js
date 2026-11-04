
function randomPromise() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            let tal = Math.floor(Math.random() * 11)

            if (tal < 3) {
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


Promise.any(promises).then(resultater => {
    console.log("Første ikke-fejl:", resultater)
})
.catch(fejl => {
    console.log("Alle fejler", fejl)
})