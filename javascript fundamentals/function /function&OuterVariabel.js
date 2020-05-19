// sebuah function dapat mengakses variabel yang berada di luar function

let userName = 'ahmad arifin';

function tampilkanPesan() {
    let message = 'hello, ' + userName;
    console.log(message);
}

tampilkanPesan(); //output : hello, ahmad arifin