// // 1.bind..
function sum(a, b) {
    return this.a + this.b;
}

const bindSum = sum.bind({ a: 10, b: 10 })
console.log(bindSum());


// // 2.call...
function GenerateFullName(name) {
    var reply = [this.firstName, name, 'Mufeeth'].join(' ');
    return reply;
}

var name1 = {
    firstName: 'Mohamed'
}

var name2 = {
    firstName: "Mufasil"
}

console.log(GenerateFullName.call(name1, 'Mufasil'));
console.log(GenerateFullName.call(name2));


//3.apply...
function greet(greeting, message) {
    return `${greeting} ${this.userName} ${message}`
}

var user1 = {
    userName: "Mohamed Mufasil Mufeeth"
}

var result = greet.apply(user1, ['Hello', 'How are you?']);

console.log(result)