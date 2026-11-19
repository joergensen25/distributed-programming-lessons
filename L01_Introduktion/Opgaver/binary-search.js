// Opgave 1.3: Binær søgning på sorteret array af tal


let list = [0, 1, 2, 4, 7, 8, 9, 13, 16];
let wanted = 16;

let low = 0;
let high = list.length -1; // 8
let mid;



while (high >= low) {
    mid = low + Math.floor((high - low) / 2); // mid = 4

    // Hvis elementet findes i midten
    if (list[mid] == wanted) {
        break;
    }

    if (list[mid] > wanted) {
        high = mid - 1;
    }

    else {
        low = mid + 1;
    }
    mid = -1;
}

console.log("Det søgte element findes på plads nr. (index) " + mid + " i listen.")