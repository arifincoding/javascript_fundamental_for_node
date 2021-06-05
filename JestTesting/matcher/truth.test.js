// pada test ini kita dapat membedakan value dari suatu variable atau result antara null, undefined dan false

describe('value variable n is null',()=>{
    const n = null;
    it('value n adalah null',()=>{
        expect(n).toBeNull();//bernilai benar jika value n adalah null
    })
    it('value n didefinisikan',()=>{
        expect(n).toBeDefined();//bernilai benar jika value n di definisikan (value n bukan undefined)
    })
    it('value n adalah undefined',()=>{
        expect(n).toBeUndefined();//bernilai benar jika value n adalah undefinedr
    })
    it('statement benar',()=>{
        expect(n).toBeTruthy();//bernilai benar jika pernyataan di perlakukan dengan benars
    })
    it('statement salah',()=>{
        expect(n).toBeFalsy();//bernilai benar jika pernyataan di perlakukan dengan salah
    })
});