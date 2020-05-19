// berfungsi untuk menambahkan property pada object

function Person(firsname, lastname, age, eyecolor) {
    this.firsname = firsname;
    this.lastname = lastname;
    this.age = age;
    this.eyecolor;
}

Person.prototype.skill = "regen"; //prototype

var nezuko = new Person("kamado", "nezuko", 19, "black");

console.log(nezuko.skill); //output : regen