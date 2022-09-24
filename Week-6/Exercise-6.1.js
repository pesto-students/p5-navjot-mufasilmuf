const maxSubArraySum = (arr) => {
    var result = 0;
    var max = 0

    for (var i = 0; i < arr.length; i++) {
        max = max + arr[i]
        if (result < max) {
            result = max;
        }

        if (max < 0) {
            max = 0;
        }
    }
    return result;
}

console.log(maxSubArraySum([1, 2, 3, 4, -10]));
console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//time complexity - 0(n)
//space complexity - 0(1)