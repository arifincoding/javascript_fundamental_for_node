// javascript function memiliki object bawaan didalamnya yang dikenal dengan sebutan Argument object. pada argument object  terdapat array dari arguments yang digunakan saat fungsi dipanggil

function sumAll() {
    var i;
    var sum = 0;

    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sumAll(1, 123, 500, 115, 44, 88)); //output:871