var arr = [0, 2, 1, 2, 0];

function sortArray(arr) {
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            j = -1;
        }
    }

    return arr;
}

console.log(sortArray(arr));

//time complexity - 0(n)
//space complexity - 0(1)

