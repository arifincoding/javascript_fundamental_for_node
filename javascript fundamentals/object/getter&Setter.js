// dibuat untuk memudahkan kita untuk melakukan komputasi

var mod = {
    firstname: 'kamado',
    lastname: 'nezuko',
    age: 19,
    haircolor: 'black',
    get getFirstName() {
        return this.firstname
    },
    set setFirstName(name) {
        this.firstname = name;
    }
}

console.log(mod.getFirstName); //output : kamado

mod.setFirstName = 'kamidi';
console.log(mod.getFirstName); //output : kamidi

// object destructure

const {
    firstname,
    age
} = mod;

console.log(lastname, age); //output :nezuko 19 