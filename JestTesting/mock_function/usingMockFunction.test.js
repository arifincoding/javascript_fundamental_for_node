// mock function mengizinkan untuk memeriksa tautan antar kode dengan menghapus implemetasi fungsi yang sebenarnya.

// dengan kata lain kita memeriksa fungsi yang kita buat berjalan seperti yang kita bayangkan tanpa fungsi tersebut di implementasikan

// keuntungan menggunakan mock function
// 1. dapat menangkap panggilan ke fungsi (dan parameter yang diteruskan dalam panggilan tersebut)
// 2. dapat menangkap instansi 
// 3. mengizinkan konfigurasi waktu test mengembalikan nilai

// mari bayangkan kita memiliki function bernama forEach dan ingin memeriksa fungsi tersebut berjalan sesuai yang kita ekpektasikan atau tidak

function forEach(items,callback){
    for(let index=0; index<items.length; index++){
        callback(items[index]);
    }
}

const mockCallback = jest.fn(x => 42+x);
forEach([0,1],mockCallback);

test('mock function dipanggil 2 kali',()=>{
    expect(mockCallback.mock.calls.length).toBe(2);
})

test('argumen pertama dari panggilan pertama ke fungsi tersebut adalah 0',()=>{
    expect(mockCallback.mock.calls[0][0]).toBe(0)
})
// note: test diatas [0] depan menunjukkan pemanggilan fungsi dan [0] di belakang menunjukkan argumen fungsi
// mockCallback.mock.calls[pemanggilan ke][argumen ke]

test('argumen pertama dari penggilan kedua ke fungsi tersebut adalah 1',()=>{
    expect(mockCallback.mock.calls[1][0]).toBe(1);
});

test('mengembalikan nilai panggilan pertama fungsi adalah 42',()=>{
    expect(mockCallback.mock.results[0].value).toBe(42);
});