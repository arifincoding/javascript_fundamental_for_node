// bigInt ada;ah sebuah primitive data type untuk menangani data integer melebihi nilai integer

// bigInt dengan simbol n yang menegaskan bahwa nilai yang disimpan adalah big integer
const bigInt1 = 12345678901234567890n;

// bigInt dengan bentuk string

const bigInt2 = BigInt("12345678901234567890");

// bigInt dalam bentuk integer

const bigInt3 = BigInt(12345678901234567890);

// pengecekan
console.log(typeof 123); //output : number
console.log(typeof 123n); // output : bigint

// aritmetic Operation

console.log(50n * 2n); //output : 100n
console.log(50n / 2n); //output : 25n
console.log(5n - 2n); //output : 3n
console.log(100n + 25n); //output : 25n
console.log(50n + 21); //output : error karena type data bigint tidak bisa dioperasikan dengan int biasa

// comparison / perbandingan

console.log(1n < 2); //output: true
console.log(2n > 1); //output: true
console.log(2n > 2); //output: false
console.log(0n === 0); //output: false
console.log(0n == 0); //output: true