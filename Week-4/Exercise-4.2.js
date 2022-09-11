var Person = function () { };

Person.prototype.initialize = (name, age) => {
    this.name = name;
    this.age = age;
}

class Teacher extends Person {
    teach(subject) {
        return subject;
    }
}

var him = new Teacher();

console.log(him.initialize('Mohamed', 24))
console.log(him.teach('inhertance'))
