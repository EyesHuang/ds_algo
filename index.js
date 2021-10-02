// [0, 3, 4, 31], [3, 4, 6, 30]
// [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        return [];
    }
    
    if (array1.length == 0) {
        return array2;
    }

    if (array2.length == 0) {
        return array1;
    }

    const mergedArray = [];
    let arr1Item = array1[0];
    let arr2Item = array2[0];
    let i = 1;
    let j = 1;

    while (arr1Item || arr2Item) {
        if (!arr2Item || arr1Item < arr2Item) {
            mergedArray.push(arr1Item);
            arr1Item = array1[i];
            i++;
        } else {
            mergedArray.push(arr2Item);
            arr2Item = array2[j];
            j++;
        }
    }

    return mergedArray;
}


console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));