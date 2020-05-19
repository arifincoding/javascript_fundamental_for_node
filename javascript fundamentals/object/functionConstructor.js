// untuk membuat object dengan ringkas kita bisa melakukannya dengan function style

function Person(firsname, lastname, age, eyecolor) {
    this.firsname = firsname;
    this.lastname = lastname;
    this.age = age;
    this.eyecolor = eyecolor;
}

var nezuko = new Person("kamado", "nezuko", 19, "black");
// kita juga dapat value dengan
nezuko.age = 17;

console.log(nezuko.age); //output:17