// length untuk mengetahui jumlah karakter pada string

console.log("nezuko".length); // output: 6

// chartAt() berfungsi untuk mengetahui karakter berdasarkan index

console.log("nezuko".charAt(0)); //output: n

// indexOf untuk membaca index berdasarkan karakter

console.log("nezuko".indexOf("u")); //output: 3

// startsWith untuk membaca karakter awal (menghasilkan return true or false)

console.log("nezuko".startsWith("n")); //output:true

// endsWith untuk membaca karakter akhir (menghasilkan return true or false)

console.log("nezuko".endsWith("o")); //output: true

// split untuk memisahkan string ke dalam bentuk array

console.log("kamado nezuko".split(" ")); //output: Array["kamado", "nezuko"]

console.log("kamado nezuko".split("")); //output: Array["k","a","m","a","d","o"," ","n","e","z","u","k","o"]

// toUpperCase untuk mengubah ke huruf capital

console.log("Kamado Nezuko".toUpperCase()); //output:KAMADO NEZUKO

// toLowerCase untuk mengubah ke huruf kecil

console.log("Kamado Nezuko".toLowerCase()); //output:kamado nezuko

// string interpolation
var x = 2,
    y = 3;
console.log("Jumlah dari x * y adalah : " + (x * y)); //output: jumlah dari x * y adalah : 6