// Opgave 1.5: Program der vedligeholder liste af navne.
// Køres fra terminalen:
// 1. Stå i mappe, hvori js-filen ligger
// 2. skriv "node menu-program.js"
// 3. Husk at gemme (ctrl + s) ofte, ellers er filen ikke opdateret til kørsel
// Tip: Man kan stoppe kørsel af program ved ctrl + c.

import readlineSync, { keyIn } from 'readline-sync';
readlineSync.setDefaultOptions({ encoding: 'utf8' });

let listOfNames = [];







// node menu-program.js

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
        console.log(listOfNames.length);

        const choice = readlineSync.questionInt("Valg: ");

        try {
            switch (choice) {
                case 1: {
                    let name = readlineSync.question("Indtast dit navn: ");
                    listOfNames.push(name);
                    console.log("Navnet er tilføjet!")
                    console.log("Listen er nu:", listOfNames);
            
                    readlineSync.keyInPause();
                    break;
                }
                case 2: {
                    if (listOfNames.length === 0) {
                        console.log("Listen er tom.");
                        readlineSync.keyInPause();
                        break;
                    }
                    console.log("Nuværende liste:", listOfNames);
                    console.log("Vælg et index hvorfra et navn skal fjernes.")
                    let index = readlineSync.questionInt();
                    console.log("Er du sikker på at du vil fjerne navnet \"" + listOfNames[index] + "\"?");
                    let svar = readlineSync.question("j/n?");
                    if (svar === "j") {
                        let removedName = listOfNames.splice(index, 1);
                        console.log("Navn fjernet:", removedName);
                        console.log("Ny liste:", listOfNames);
                        readlineSync.keyInPause();
                        break;
                    } else {
                        console.log("Intet navn fjernet.")
                        readlineSync.keyInPause();
                        break;
                    }

                }

                case 3: {
                    if (listOfNames.length === 0) {
                        console.log("Listen er tom.");
                        readlineSync.keyInPause();
                        break;
                    }
                    console.log("Nuværende liste:", listOfNames);
                
                    let inputName = readlineSync.question("Indtast et navn der skal fjernes: ")

                    let indexOfName = listOfNames.findIndex(n => n.toLowerCase() === inputName.toLowerCase());


                    if (indexOfName !== -1) {
    
                        let removedName = listOfNames.splice(indexOfName, 1);
                        console.log("Navnet: \"" + removedName + "\" er fjernet.")
                        console.log("Ny liste er:", listOfNames);

                    } else {
                        console.log("Navn ikke fundet.")
                    }

                    readlineSync.keyInPause();
                    break;
                    
                }

                case 4:
                    console.log("Nuværende liste:", listOfNames);
                    console.log("Tast et index der skal overskrives:")
                    let valgtIndex = readlineSync.questionInt();

                    if (listOfNames.length > valgtIndex && valgtIndex >= 0) {
                        console.log("Tast navn der skal indsættes:")
                        let nytNavn = readlineSync.question().trim();
                        listOfNames[valgtIndex] = nytNavn;
                        console.log("Ny liste:", listOfNames);

                    } else {
                        console.log("Indekset findes ikke.")
                    }
                    readlineSync.keyInPause();
                    break;
                    
                case 5:
                    console.log("Alle navne:", listOfNames);
                    readlineSync.keyInPause();

                    
                    break;
                case 6:
                    console.log("Alle navne konkateneret:", listOfNames.join(""));
                    readlineSync.keyInPause();
                    break;

                case 0:
                    console.log("Programmet lukker nu.")
                    readlineSync.keyInPause();
                    return;

                default:
                    console.log("Tast et gyldigt input. Tast 0 for at lukke.")
                    readlineSync.keyInPause();
                    
            }
        } catch (err) {
            console.error("Fejl", err.message || err);

        }
    }
}

main();