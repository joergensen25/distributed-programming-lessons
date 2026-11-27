// Opgave 1.4: Flettealgoritme, hvor to sorterede arrays med tal flettes
let list1 = [0, 1, 2, 4, 7, 8, 9, 13, 16];
let list2 = [5, 6, 8, 9, 10, 12, 17, 19];

let i1 = 0;
let i2 = 0;

let merged = [];


while (i1 < list1.length && i2 < list2.length) {
    if (list1[i1] < list2[i2]) {
        merged.push(list1[i1]);
        i1++;
    }
    else {
        merged.push(list2[i2]);
        i2++;
    }
}

while (i1 < list1.length) {
    merged.push(list1[i1])
    i1++;
}

while (i2 < list2.length) {
    merged.push(list2[i2]);
    i2++;
}


console.log(merged);

// som gebrugelig metode:

function mergeSorted(arr1, arr2) {
    let i1 = 0;
    let i2 = 0;

    let merged = [];

    while (i1 < arr1.length && i2 < arr2.length) {
        if (arr1[i1] < arr2[i2]) {
            merged.push(arr1[i1]);
            i1++;
        }
        else {
            merged.push(arr2[i2]);
            i2++;
        }
    }

    while (i1 < arr1.length) {
        merged.push(arr1[i1]);
        i1++;
    }

    while (i2 < arr2.length) {
        merged.push(arr2[i2]);
        i2++;
    }

    return merged;

}



console.log(mergeSorted(list1, list2));