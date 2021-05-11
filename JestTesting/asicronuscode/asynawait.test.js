// alternatif paling mudah adalah menggunakan async await

// mengharapkan berhasil
test('isi data adalah beanut butter',async ()=>{
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
    const data = await fetchData();//menunggu hingga proses fetchdata selesai
    expect(data).toBe('peanut butter');
})

// mengharapkan error

test('fetch gagal dengan error',async ()=>{
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
    try{
        await fetchData();
    }catch(e){
        expect(e).toMatch('error');
    }
});

// kita juga dapat menggabungkan async await dengan .resloves atau .rejects

test('data berisi peanut butter',async ()=>{
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
    await expect(fetchData()).resolves.toBe('peanut butter');
})

test('data gagal di ambil',async ()=>{
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
    await expect(fetchData()).rejects.toMatch('error');
})