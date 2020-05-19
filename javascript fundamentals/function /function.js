// function return

function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
console.log(result); //output : 3

// function for function paramater
// menggunakan function(text()) sebagai salah satu paramater di dalam function yang lain(tampilkanPesan())

function tampilkanPesan(from, text = text()) {
    console.log(from + ': ' + text);
}

function text() {
    return 'Hello';
}

tampilkanPesan('kamado nezuko'); //output : kamado nezuko : Hello