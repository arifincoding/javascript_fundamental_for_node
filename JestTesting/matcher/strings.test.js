// kita juga dapat memeriksa string dengan toMatch(regex)

describe('periksa persamaan value variabel n',()=>{
    it('tidak ada I didalam kata team',()=>{
        expect('team').not.toMatch(/I/);
    })
    it('ada kata stop di dalam christoph',()=>{
        expect('Christoph').toMatch(/stop/);
    })
})