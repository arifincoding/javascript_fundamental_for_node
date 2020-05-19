var person = {
    fname: 'ahmad',
    lname: 'arifin',
    age: 20
};

var x;
for (x in person) {
    console.log(x);
}
/*output 
fname
lname
age
*/

var x;
for (x in person) {
    console.log(person[x]);
}
/* output
ahmad
arifin
20
*/