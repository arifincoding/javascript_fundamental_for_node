// pola asyncronus paling umum adalah menggunakan callback
// konsep dari asyncronus adalah menunggu suatu kode selesai di eksekusi sebelum kode dibawahnya di eksekusi
// dengan menambahkan argumen done pada test maka jest akan menunggu callback done di panggil sebelum menyelesaikan testing
// jika callback done tidak terpanggil maka jest akan mereturn hasil error timeout

function fetchData(dt){
    return dt;
}

test('isi data adalah peanut butter', done =>{
    function callback(data){
        try{
            expect(data).toBe('peanut butter');
            done();//ini callback yang berfungsi untuk memberitahu jest untuk menunggu program selesai di eksekusi
        }catch(error){
            done(error);//jika statement gagal maka jest akan langsung melempar error(menghindari error timeout)
        }
    }
    fetchData(callback('peanut butter'));
})