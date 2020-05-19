// jika kita mendeklarasikan sebuah variabel didalam function  maka variabel tersebut hanya bisa digunakan di dalam function tersebut

function tampilkanPesan() {
    let message = "Hello, I'm Message Variable Inside Function";
    console.log(message); //output:Hello, I'm Message Variable Inside Function
}

console.log(message);
// output : <-- Error! ReferenceError: message is not defined