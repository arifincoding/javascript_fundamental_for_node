// selain property kita juga bisa menambah method pada object

var person = {
    firstname: 'ahmad',
    lastname: 'arifin',
    fullName() {
        return this.firstname + " " + this.lastname;
    }
}

// access method
console.log(person.fullName()); //output ahmad arifin

// add object method
// kita juga dapat menambahkan method baru pada object

person.name = function () {
    return this.firstname + " " + this.lastname;
}

console.log(person.name()); //output ahmad arifin