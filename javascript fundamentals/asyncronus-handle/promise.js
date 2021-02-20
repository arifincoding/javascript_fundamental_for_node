const isNumber = (a,b) => new Promise((resolve,reject)=>{
    setInterval(()=>{
        if(isNaN(a) || isNaN(b)){
            reject('input must be number')
        }else{
            resolve(true)
        }
    },1000)
})

const divide = (a,b) => new Promise((resolve,reject)=>{
    setInterval(()=>{
        if(b===0){
            reject('cant divide by zero')
        }else{
            let result = a/b
            resolve(result)
        }
    },1000)
})

const multiply = (a, b) => new Promise((resolve, reject)=>{
    setInterval(()=>{
        let result = a * b
        resolve(result)
    },1000)
})

const add = (a,b) => new Promise((resolve,reject)=>{
    setInterval(()=>{
        let result = a + b
        resolve(result)
    })
})

// promise start

isNumber(6,4).then(()=>{
    return divide(6,4)
}).then((result)=>{
    return multiply(result,7)
}).then((result)=>{
    return add(result,5)
}).then((result)=>{
    console.log(`hasil akhir ${result}`)
}).catch((err)=>{
    console.log(true)
})

// konsep dari promise adalah then akan dijalankan setelah fungtion selesai dijalankan
// dan then dibawahnya akan dijalankan setelah then diatasnya selesai dijalankan
// catch akan dijalankan ketika salahsatu fungsi mengembalikan promise reject
// jika reject dikembalikan maka then dibawah reject fungsi tersebut tidak di eksekusi

// kelemahan promise
// 1.Scope variable yang ada di dalam sebuah block .then() tidak dapat diakses diluar block tersebut (lihat kode yang dicomment pada contoh di atas).
// 2.Promise hanya dapat mengembalikan 1 return value. Kita tidak dapat mengembalikan multiple return value seperti ini resolve(a, b) ;
// 3.Promise bersifat fail fast yang artinya jika ada satu promise yang di-reject, maka akan langsung dilempar ke block .catch() tanpa mengeksekui rantai .then dibawahnya.