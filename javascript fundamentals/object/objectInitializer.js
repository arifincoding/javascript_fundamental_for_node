// cara membuat object tanpa menggunakan contruktor. object di buat dengan gaya literal di dalam kurung kurawal {}

var cantik = {
    firstName: 'kamado',
    lastName: 'nezuko',
    age: 19,
    hairColor: 'black'
}

// key/property = firsName, lastName, hairColor, age
// value= kamado, nezuko, 19 , black

// object method
// selain membuat property dalam object kita juga dapat membuat function didalam object

var mod = {
    firstName: 'kamado',
    lastName: 'nezuko',
    age: 19,
    hairColor: 'black',
    fullName: function () {
        console.log("kamado nezuko");
    }
}

mod.fullName();