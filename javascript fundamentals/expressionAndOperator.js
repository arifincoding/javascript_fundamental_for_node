let x; //declaration statement
x = 2 * 10; //expression statement

// exponentiation/pangkat pada javascript

console.log(2 ** 3); //2 pangkat 3 = 8 

// perbedaan var, let , const

var i = 5;

if (true) {
    i = 10; //perubahan value/literal bisa diakses di luar function
}

console.log(i) //10 

var x = 12;

if (true) {
    let x = 1; // variable let hanya dapat diakses di scoope locak / hanya didalam fungsi pendeklarasiannya
    console.log(x) //1
}

console.log(x); //12

const y = 9; //const bersifat readonly jadi value yang sudah di deklarasikan tidak dapat diubah

y = 10;

console.log(y) //error