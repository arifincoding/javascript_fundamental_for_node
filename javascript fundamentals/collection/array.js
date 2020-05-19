// * create array

// cara 1 index & element

var mod = new Array();

mod[0] = "maudy";
mod[1] = "ayunda";
mod[2] = "faza";

console.log(mod)

// cara 2 array constructor

var mod = new Array("maudy", "ayunda", "faza");

console.log(mod)

// cara 3 array literal

var mod = ["maudy", "ayunda", "faza"];

console.log(mod)

// * akses array element dengan namaVariable[index]
var mod = ["maudy", "ayunda", "faza"];
console.log(mod[0]);

// * Modify Array Element
mod[2] = "cantik";

console.log(mod);

// * array destructuring(ES6)

var mod = new Array("Maudy", "ayunda", "faza");
var [satu, dua] = mod;

console.log(satu);
console.log(dua);

// * array looping

var mod = ["maudy", "ayunda", "faza"];

for (var i = 0; i < mod.length; i++) {
    console.log(i + " " + mod[i]);
}

// * array looping ES6

mod.forEach(function (item, index, array) {
    console.log(item, index);
});

// * array iteration Object 

var soul = ["maudy", "ayunda faza", "ahmad", "arifin"];

var x = soul.entries();

for (n of x) {
    console.log(n)
}

// * array map
// method map digunakan jika kita ingin mendapat kan array baru setelah mengeksekusi sebuah callback untuk setiap element yang di dalamnya
// nb:callback adalah statement yang dibuat dan dieksekusi di statement lain

var mod = new Array("maudy", "ayunda", "faza");

var jink = mod.map(function (item) {
    return item.toUpperCase();
})

console.log(jink);

// * array filter
// untuk keperluan pengecekan

var array1 = ["maudy", 100, "ayunda", 200, "faza", 300]

var array2 = array1.filter(function (item) {
    return typeof item === 'string';
});

console.log(array2);

// * length
// untuk menghuting banyak data dalam array

var mod = new Array("maudy", "ayunda", "faza");

console.log(mod.length);

// * push array
// menambahkan element baru diakhir element

mod.push("cantik");
console.log(mod);

// * pop array
// untuk menghapus element akhir di dalam array

mod.pop();
console.log(mod);

// * shift array
// berfungsi untuk menghapus element di awal array

mod.shift();
console.log(mod);

// * unshift array
// untuk menambahkan sebuah element di awal array

mod.unshift("maudy");
console.log(mod);

// * indexof find index array
// untuk mengetahui index sebuah element
console.log(mod.indexOf("ayunda"));

// * splice remove by index
// untuk menghapus element berdasarkan index

mod.splice(2);
console.log(mod);

// * slice copy an array
// untuk mendapatkan salinan sebuah array

var firstName = mod.slice(1);
console.log(firstName);

// * concat Merge Array
// menggabungkan 2 buah array atau lebuh menjadi 1

var mod = ["maudy", "ayunda"];
var pin = ['ahmad', 'arifin'];
var shawn = ["shawn", "mendes"];

var together = mod.concat(pin, shawn);

console.log(together);