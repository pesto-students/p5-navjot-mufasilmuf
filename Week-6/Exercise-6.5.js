A = [5, 10, 3, 2, 50, 80]; B = 78;
// A = [-10, 20]; B = 30;

const findDifference = (arr, val) => {
    for (const ele of arr) {
        if (arr.includes(ele + val)) {
            return 1;
        }
    }
    return 0;
}

console.log(findDifference(A, B));

//time complexity - 0(n)
//space complexity - 0(1)