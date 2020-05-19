// Variabel result akan mendapatkan nilai berdasarkan kondisi yang diberikan, jika hasil kondisi bernilai true maka kode yang akan di eksekusi adalah value1 dan jika kondisi bernilai false maka kode yang akan dieksekusi adalah value2.

// let result = condition ? value1 : value2

var age = 19;

let accessAllowed = (age > 18) ? true : false;

console.log(accessAllowed); //output : true

// untuk lebih dari 1 kondisi

let message = (age < 3) ? 'hi baby' : (age < 18) ? 'Hello! Swiity' : (age < 100) ? 'Hello Pretty!' : 'Who are you';

alert(message); //output : hello Pretty!