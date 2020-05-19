// add object property

var person = {
    firstname: 'ahmad',
    lastname: 'arifin'
}
// jika kita ingin menambakan property baru yaitu nationality
person.nationality = 'indonesia';
console.log(person);

// delete property

delete person.lastname;
console.log(person);

// check property
// kita juga dapat mengecek sebuah property ada apa tidak didalam object

console.log('firstname' in person); //output true
console.log('firname' in person); //output false