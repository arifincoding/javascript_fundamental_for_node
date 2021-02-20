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

const run = async (a,b) => {
    await isNumber(a,b)//await 1
    const divideResult = await divide(a,b)//await 2 akan dijalankan setelah await 1 selesai di eksekusi
    const multiplyResult = await multiply(divideResult,7)//await 3 akan dijalankan setelah await 2 selesai di eksekusi
    const addResult = await add(multiplyResult,5)//await 4 akan dijalankan setelah await 3 selesai di eksekusi
    return addResult//return akan dijalankan setelah await 4 selesai di eksekusi
}

run(6,4).then((result)=>{
    console.log(`hasil akhir ${result}`)
}).catch((err)=>{
    console.log(err)
})

// await berfungsi untuk menjeda eksekusi code dibawahnya sampai kode pada await selesai di eksekusi