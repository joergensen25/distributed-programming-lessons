
let personer = [
    {
        navn: 'Rasmus',
        alder: 26,
        tlf: 28432048
    },
    {
        navn: 'Mads',
        alder: 25,
        tlf: 12345678
    },
    {
        navn: 'Mikkel',
        alder: 23,
        tlf: 87654321
    },
    {
        navn: 'Laura',
        alder: 19,
        tlf: 98765432
    },
    {
        navn: 'Julie',
        alder: 32,
        tlf: 23456789
    }

];



// Opgave 9.1
// Find person med bestemt telefonnummer:
let findTlf = personer.find(element => element.tlf === 12345678)

console.log(findTlf);

// Find yngste person:
const findYngste = personer.reduce((mindste, person) => {
    if (person.alder < mindste.alder) {
        return person;
    }
    return mindste;
});

console.log(findYngste);


// Giv alle personer et id, der starter fra 1 og går opad:
personer.forEach((person, i) => {
    person.id = i + 1;
});

for (let i = 0; i < personer.length; i++) {
    console.log(personer[i]);
}



// Tekststreng der indeholder alle personers navne, adskilt af komma:
// Sammenlign navne alfabetisk og lav en tekststreng med alle navne adskilt af komma:
let navneStreng = personer.sort((a, b) => a.navn.localeCompare(b.navn)).map(person => person.navn).join(', ');

console.log(navneStreng);




// Array med navn og tlf på personer yngre end 30 år:

let ungePersoner = personer.filter(person => person.alder < 30).map(person => ({ navn: person.navn, tlf: person.tlf }));


console.log(ungePersoner);
console.log(JSON.stringify(ungePersoner));



// OPGAVE 9.2
function compareLen(s1, s2) {
    if (s1.length<s2.length) {
        return -1;
    } else if (s1.length>s2.length) {
        return 1;
    } else {return 0;}    
}


function compareIgnoreCase(s1, s2) {
    return compare(s1.toLowerCase(), s2.toLowerCase());
}

function compareSort(sammenLign) {
    return (list) => {
        return list.sort(sammenLign);

    }
}


const lenSort = compareSort(compareLen);

const ignoreCaseSort = (compareSort(compareIgnoreCase));


console.log(lenSort(["hej", "hejjjjj", "hejjj"]))





let theNumber = Number(prompt("Pick a number"));

console.log("Your number is the square root of " + theNumber * theNumber);

let test = prompt("Skriv navn")