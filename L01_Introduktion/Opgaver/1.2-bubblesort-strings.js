// Opgave 1.2: bubble sort for array af strings
let arr = ["Out", "In", "All", "Everyone", "Under", "You"];

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j].localeCompare(arr[j+1]) > 0 ) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log(arr);

/*
i = 0:
    
    j = 0: ["Out", "In", "All", "Everyone", "Under", "You"]; --> ["In", "Out", "All", "Everyone", "Under", "You"]
    j = 1: ["In", "Out", "All", "Everyone", "Under", "You"]; --> ["In", "All", "Out", "Everyone", "Under", "You"];
    j = 2: ["In", "All", "Out", "Everyone", "Under", "You"]; --> ["In", "All", "Everyone", "Out", "Under", "You"];
    j = 3: ["In", "All", "Everyone", "Out", "Under", "You"]; -->
    j = 4: intet flyttes

i = 1: 
    j = 0: ["In", "All", "Everyone", "Out", "Under", "You"]; --> ["All", "In", "Everyone", "Out", "Under", "You"];
    j = 1: ["All", "In", "Everyone", "Out", "Under", "You"]; --> ["All", "Everyone", "In", "Out", "Under", "You"];
    j = 2: ["All", "Everyone", "In", "Out", "Under", "You"]; --> ["All", "Everyone", "In", "Out", "Under", "You"];
    j = 3: ["All", "Everyone", "In", "Out", "Under", "You"]; -->

i = 2:
    alt står korrekt

*/