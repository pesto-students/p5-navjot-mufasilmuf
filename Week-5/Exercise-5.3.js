const hasDuplicate = (array) => {
    if (array.length !== new Set(array).size) {
        return true;
    }
    return false;
}

console.log(hasDuplicate([1, 2, 3]));