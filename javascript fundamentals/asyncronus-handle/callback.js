function isNumber(a, b, cb){
    if(isNaN(a) || isNaN(b)){
        console.log('please input number')
    }else{
    cb(a,b)
    }
}

isNumber(4,5,(a,b)=>{
    console.log(a+b)
})

// callback menggunakan anonym function pada argumen
// digunakan untuk menghandle return value dari operasi asynchoronous. Konsep callback dapat dianalogikan seperti kita memanggil penjual untuk membeli sesuatu dan sembari menunggu penjual mempersiapkan barangnya, kita pergi melakukan hal lain. Lalu, ketika barangnya sudah siap, penjual akan memanggil balik (callback) untuk memberitahu kita bahwa barang sudah siap dan kita dapat menentukan tindakan selanjutnya dari pembelian barang tadi