// [0, 3, 4, 31], [3, 4, 6, 30]
// [0, 3, 4, 4, 6, 30, 31]

function mergeArraysThenSorted(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return;
    }
    
    let arr3 = arr1.concat(arr2);
    let arrLength = arr3.length;
    let insert = 0;
    let temp = 0;

    for (let i = 1; i < arrLength; i++) {
        for (let j = 0; j < i; j++) {
            if (temp == 0) {
                insert = arr3[arrLength - 1];
            } else {
                insert = temp;
            }
            
            if (j == 0) {
                arr3.pop();
            }

            if (insert > arr3[j]) {
                arr3.splice(j + 1, 0, insert);
                console.log(arr3);

                if (j + 1 < i && insert > arr3[j + 2]) {
                    arr3.splice(j + 1, 1)
                    temp = insert;
                } else {
                    temp = 0;
                    break;
                }
            } else {
                arr3.splice(j, 0, insert);
                console.log(arr3);
                break;
            }
        
        }
    }
    // console.log(arr3)
}


console.log(mergeArraysThenSorted([31, 3, 4, 0], [3, 4, 6, 30]));