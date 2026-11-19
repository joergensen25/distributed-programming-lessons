// Opgave 1.5: Program der vedligeholder liste af navne.
// Køres fra terminalen:
// 1. Stå i mappe, hvori js-filen ligger
// 2. skriv "node menu-program.js"
// 3. Husk at gemme (ctrl + s) ofte, ellers er filen ikke opdateret til kørsel
// Tip: Man kan stoppe kørsel af program ved ctrl + c.

import readlineSync from 'readline-sync';

let listOfNames = [];










function main() {

    

    while (true) {
        console.log("=== NAVNE-LISTE-MENU ===");

        console.log("\nVælg en handling:")
        console.log("(1) Tilføj et navn.")
        console.log("(2) Fjern et navn ud fra et index.")
        console.log("(3) Fjern et navn fra listen, hvis det findes.")
        console.log("(4) Overskriv et navn på et index.")
        console.log("(5) Udskriv alle navne.")
        console.log("(6) Konkatanér alle navne og udskriv dem.")

        const choice = readlineSync.questionInt("Valg: ");

        try {
            switch (choice) {
                case 1: {
                    let name = readlineSync.question("Indtast dit navn: ");
                    listOfNames.push(name);
                    console.log(listOfNames);
                    break;
                }
            }
        } catch (err) {
            console.error("Fejl", err.message || err);

        }
    }
}

main();