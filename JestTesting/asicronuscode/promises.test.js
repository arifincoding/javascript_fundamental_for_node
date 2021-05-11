// jika mengginakan pola promise untuk asyncronus

// jika anda mengharapkan promise return resolve

test('isi data adalah peanut butter',()=>{
    function fetchData(){
        return new Promise((resolve,reject)=>{
            let x = 0;
            if(x===0){
                resolve('peanut butter');
            }else{
                reject('error');
            }
        })
    } 
    return fetchData().then(data=>{
        expect(data).toBe('peanut butter');
    });
})

// jika mengharapkan promise di reject gunakan method .catch. jangan lupa tambahkan assertion untuk verivikasi jumlah pernyataan yang di panggil

test('pengambilan data gagal dengan sebuah error',()=>{
    function fetchData(){
        return new Promise((resolve,reject)=>{
            let x = 1;
            if(x===0){
                resolve('peanut butter');
            }else{
                reject('error');
            }
        })
    } 
    expect.assertions(1);
    return fetchData().catch(e => expect(e).toMatch('error'));
});

// kita juga dapat untuk menggunakan .resolves matcher pada expectation statement dan jest akan menunggu promise di resolve, jika promise di reject maka test akan otomatis gagal

test('isi data adalah peanut butter.',()=>{
    function fetchData(){
        return new Promise((resolve,reject)=>{
            let x = 0;
            if(x===0){
                resolve('peanut butter');
            }else{
                reject('error');
            }
        })
    }
    return expect(fetchData()).resolves.toBe('peanut butter');
})

// jika mengharapkan promise di reject gunakan .rejects matcher

test('fetch gagal dengan error',()=>{
    function fetchData(){
        return new Promise((resolve,reject)=>{
            let x = 1;
            if(x===0){
                resolve('peanut butter');
            }else{
                reject('error');
            }
        })
    }
    return expect(fetchData()).rejects.toMatch('error');
});