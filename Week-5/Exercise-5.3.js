//Using the set..
// const hasDuplicate = (array) => {
//     if (array.length !== new Set(array).size) {
//         return true;
//     }
//     return false;
// }

// console.log(hasDuplicate([1, 2, 3]));


//Using the filter method..
const hasDuplicate = (array) => {
    let filterArray = array.filter((val, index) => {
        return array.indexOf(val) !== index;
    });
    return filterArray;
}

console.log(hasDuplicate([1, 2, 3]).length != 0)