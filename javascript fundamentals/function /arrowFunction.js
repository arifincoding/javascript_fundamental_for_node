// arrow function dapat membuat sebuah function dengan syntax yang lebih singkat

let sum = (a, b) => a + b;

/* setara dengan:

let sum = function(a, b) {
    return a + b;
};
*/

console.log(sum(1, 2)); //output : 3

// karakteristik lain dari arrow function adalah secara otomatis memberikan return tanpa harus menambah keyword return

// multiline arrow function

let sum = (a, b) => { //curly brace untuk membuat multiline function
    let result = a + b;
    return result; //gunakan return untuk memproduksi hasil
}

console.log(sum(1, 2)); //output:3