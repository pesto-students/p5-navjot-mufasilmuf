const S = [-1, 2, 1, -4];
let target = 1;

const closest = (arr, target) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (Math.abs(target - result) >= Math.abs(target - (arr[i] + arr[j] + arr[k]))) {
                    result = (arr[i] + arr[j] + arr[k]);
                }
            }
        }
    }
    return result;
}

console.log(closest(S, target));
