const getNumber = () => {
    return Math.random();
}

const time = (randomNumber, ms) => new Promise((reslove, reject) => {
    if (randomNumber % 5 === 0) {
        setTimeout(() => {
            reject(randomNumber)
        }, ms);
    }
    setTimeout(() => {
        reslove(randomNumber)
    }, ms);
})

time(getNumber(), 4000)
    .then(num => console.log(`Promise is resolved ${num}`))
    .catch(num => console.log(`Promise is rejected ${num}`))
    .finally(() => console.log('Prosime is Fullfilled'))