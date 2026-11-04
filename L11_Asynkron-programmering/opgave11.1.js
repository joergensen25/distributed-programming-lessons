// opgave11.1.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/11';
// const userUrl = 'httpz://jsonplaceholder.typicode.com/users';

const postUrl = 'https://jsonplaceholder.typicode.com/posts';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}


function then(userUrl) {
    let promise = get(userUrl).then(r => {
        console.log('Users (then): ');
        r.forEach(element => {
            console.log(element.name);
        });

    }, () => console.log("Fejl"));
    console.log("Fetch er kaldt" + promise)

}

async function await(userUrl) {
    try {
        let promise = get(userUrl);
        let r = await promise;
        console.log("Users (await): ");
        r.forEach(element => {
            console.log(element.name);
        });
        
        console.log("Fetch er kaldt nu. " + promise);
    } catch (error) {
        console.log("Fejl: " + error);
        
    }
}


console.log("Denne linje er kaldt før then.")
then(userUrl)
console.log("Denne linje er kaldt efter then.")

console.log("Denne linje er kaldt før await.")
await(userUrl);
console.log("Denne linje er kaldt efter await.")





