// adalah keyword untuk menangani error

/*di dalam try kita dapat memasukan block of code yang kita khawatirkan
atau kita ketahui akan terjadi error dan pada catch kita dapat memasukan block of code
yang dapat kita gunakan untuk mengatasi error tersebut.
*/

try {
    test();
} catch (ex) {
    console.log(ex.name); //output : reference error
    console.log(ex.message); //output : test is not
}

/* jadi jika didalam statement try tidak terdapat error maka block of code 
pada catch akan diabaikan, namun jika terdapat error di dalam try  statement 
maka statement selanjutnya akan diabaikan dan seluruh block of code dalam catch statement akan di eksekusi
 */

// stack trace
// untuk mengetahui baris mana yang eror

try {
    test();
} catch (ex) {
    console.log(ex.name); //output : reference error
    console.log(ex.message); //output : test is not
    console.log(ex.stack); // output : @debugger eval code : 2 : 3
}

// pada kode diatas baris kode kedua kolom ke 3 yang error