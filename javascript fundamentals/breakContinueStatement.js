// break statement
// berfungsi untuk keluar dari loop

for (i = 0; i < 10; i++) {
    if (i === 3) {
        break;
    }
    console.log("perulangan ke " + i);
}

/* output :
perulangan ke 0
perulangan ke 1
perulangan ke 2
*/

// continue statement
// penggunakan continue dilakukan jika ingin menghentikan eksekusi statement dalan iteration dan melanjutkan kembali perulangan dengan iteration selanjutkan

for (i == 0; i < 6; i++) {
    if (i === 3) {
        continue;
    }
    console.log("Perulangan ke " + i);
}

/* output :
perulangan ke 0
perulangan ke 1
perulangan ke 2
perulangan ke 4
perulangan ke 5
*/