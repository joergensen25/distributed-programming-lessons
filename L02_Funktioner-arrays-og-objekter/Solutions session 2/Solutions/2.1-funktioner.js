
let array1 = [3, 5, 7, 11, 32, 4, 5, 9, 12, 45, 52, 6];

/**
 * 
 * @param {number[]} array 
 */


function max(array) {
    
    let largest = array[0];
    
    for (const num of array) {
        if (num > largest) {
            largest = num;
        }
    }

    return largest;
}



console.log(max(array1));



/**
 * 
 * @param {number[]} array 
 */

function contains(array, element) {

    for (const num of array) {
        if (num === element) {
            return true;
        }
        
    }
    return false;
}


function contains2(array, element) {
    if (array.includes(element)) {
        return true;
    }
    return false;
}

console.log(contains(array1, 45));



function sum(array) {

    let sum = 0;

    for (const num of array) {
        sum += num;
    }
    return sum;
    
}

console.log(sum(array1));