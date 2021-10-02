// Test Data
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

// O(n^2)
function checkCommon(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false;
}

// console.log(checkCommon(array1, array2));

// O(n)
function checkCommon2(arr1, arr2) {
    // loop through first array and create object where properties === items in the array
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }

    // loop through second array and check if item in second array exists on created object
    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false;
}

// console.log(checkCommon2(array1, array2));


function checkCommon3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item));
}

console.log(checkCommon3(array1, array2));
