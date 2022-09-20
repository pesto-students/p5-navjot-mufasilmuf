//using MAP....
const vowelCount = (str) => {
    const vowelMap = new Map();
    let vowels = "aeiou";
    for (let char of str) {
        let lowerCaseChar = char.toLowerCase()
        if (vowels.includes(lowerCaseChar)) {
            if (vowelMap.has(lowerCaseChar.charCodeAt())) {
                vowelMap.set(lowerCaseChar.charCodeAt(), vowelMap.get(lowerCaseChar.charCodeAt()) + 1);
            } else {
                vowelMap.set(lowerCaseChar.charCodeAt(), 1);

            }
        }
    }
    return vowelMap;
}

console.log(vowelCount("aeiouuuu"));


