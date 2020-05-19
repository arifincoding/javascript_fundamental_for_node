// Number.isFinite merupakan fungsi untuk mengecek apakah suatu varuabel bernilai infinity atau tidak

var inf = 10 / 0; //infinity

Number.isFinite(inf); //false(artinya inf bernilai infinity)

// nan (not a number) 
// nilai spesial yang dihasilkan ketika operasi fungsi matematika yang tidak wajar dilakukan sehingga menimbulkan computation error

var x = 100 / "arifin"; //menghasilkan nan karena kita mencoba membagi number dengan string

console.log(x); //NaN

// positive e Notation
// untuk mengatasi kesalahan penulisan number yang panjang kita dapat menggunakan e notation

let billion = 1e9; //1 dan 9 nol(1000000000)
let a = 1e3; // 1*1000
let b = 1.23e6; //1.23 * 1000000

// negative e Notation
let ms = 1e-3; // 1/1000
let c = 1.23e-6; // 1.23/1000000

// rounding / pembulatan = terdiri dari 4 method

var d = 3.1;
var e = 3.6;

// 1. math.floor = pembulatan kebawah

console.log(Math.floor(d)); //3

// 2. Math.ceil = pembulatan keatas

console.log(Math.ceil(d)); //4

// 3. Math.round = pembulatan ke angka terdekat

console.log(Math.round(d)); //3
console.log(Math.round(e)); //4

// 4. Math.trunc pembulatan dengan cara menghapus angka dibelakang koma

console.log(Math.trunc(d)); //3
console.log(Math.trunc(e)); //3