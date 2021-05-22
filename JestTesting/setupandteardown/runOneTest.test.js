// jika anda ingin menjalankan hanya satu test saja maka tambahkan only setelah test

test.only('hanya test ini yang akan dijalankan',()=>{
    expect(1).toBe(1);
});

test('test ini tidak akan dijalankan',()=>{
    expect(2).toBe(3);
});