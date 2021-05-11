// jika ingin memeriksa sebuah fungsi itu mengembalikan (return) error seperti yang kita kehendaki dapat menggunakan toThrow

function compileAndroidCode(){
    throw new Error('you are using wrong JDK');
}

describe('compile android berjalan seperti yang dikehendaki',()=>{
    it('memeriksa error tanpa memastikan error massage',()=>{
        expect(()=> compileAndroidCode()).toThrow();//memeriksa error tanpa memperhatikan messagenya
    });
    it('memeriksa error dengan memastikan error message',()=>{
        expect(()=> compileAndroidCode()).toThrow(Error);//memeriksa error messagenya sama dengan error message yang di kehendaki
    });
    it('memeriksa error dengan custom error message',()=>{
        expect(()=> compileAndroidCode()).toThrow('you are using wrong JDK');//memeriksa error messagenya sama dengan error message yang di kehendaki
    });
    it('memeriksa error dengan regexp message',()=>{
        expect(()=> compileAndroidCode()).toThrow(/JDK/);//meriksa apakah ada kata jdk di dalam error messagenya
    });
});