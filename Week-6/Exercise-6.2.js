var matrixArr =
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];

const spiralMatrix = (array) => {
    var result = [];
    result = result.concat(array.shift());

    array.forEach(function (rightEnd) {
        result.push(rightEnd.pop());
    });

    result = result.concat(array.pop().reverse());

    array.forEach(function (leftEnd) {
        result.push(leftEnd.shift());
    });

    array.forEach(function (remaingVal) {
        result.push(remaingVal.pop())
    })

    return result;
}

console.log(spiralMatrix(matrixArr))
console.log(matrixArr)

//time complexity - 0(n^3)
//space complexity - 0(n)