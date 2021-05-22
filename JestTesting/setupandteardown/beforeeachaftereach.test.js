// pada sebuah test kadang kita perlu menyiapkan sesuatu sebelum test dijalankan seperti mensetting database atau method yang harus dijalankan pada setiap test yang dilakukan
// beforeEach akan dijalan sebelum setiap test dijalankan (jadi jika test sebanyak 7 test maka beforeEach juga dijalankan sebanyak 7 kali (repeating))
// afterEach akan dijalan setelah setiap test dijalankan (jadi jika test sebanyak 7 test maka beforeEach juga dijalankan sebanyak 7 kali)
// beforeEach biasanya digunakan untuk menghubungkan dengan database dan table
// afterEach biasanya  digunakan untuk memutus dan database dan menghapus table
// jika beforeEach dan afterEach berada di dalam describe maka setup hanya berlaku oleh test yang berada di dalam describe tersebut
beforeEach(()=>{
    console.log('beforeeach');
});

afterEach(()=>{
    console.log('aftereach');
});

test('test pertama',()=>{
    expect(1).toBe(1);
});

test('test kedua',()=>{
    expect(2).toBe(2);
});