// membandingkan angka

describe('tho plus two',()=>{
    const n = 2+2;
    it('n lebih besar dari 3',()=>{
        expect(n).toBeGreaterThan(3);//bernilai benar jika n lebih dari 3
    })
    it('n lebih besar atau sama dengan 3.5',()=>{
        expect(n).toBeGreaterThanOrEqual(3.5);//bernilai benar jika n lebih besar atau sama dengan 3.5
    })
    it('n lebih kecil dari 5',()=>{
        expect(n).toBeLessThan(5);//bernilai benar jika n kurang dari 5
    })
    it('n lebih kecil atau sama dengan 4.5',()=>{
        expect(n).toBeLessThanOrEqual(4.5);//bernilai benar jika n kurang dari atau sama dengan 4.5
    })
    it('n sama dengan 4',()=>{
        expect(n).toBe(4);//bernilai benar jika n sama dengan 4
    })
    it('n sama dengan 4',()=>{
        expect(n).toEqual(4);//bernilai benar jika n sama dengan 4
    })
})

// untuk persamaan tipe data float gunakan toBeCloseTo dari pada toEqual karena untuk menghindari pembulatan

describe('adding floating point numbers',()=>{
    const n = 0.1 + 0.2;
    it('tobe',()=>{
        expect(n).toBe(0.3);//ini tidak akan bekerja karena kesalahan pembulatan
    })
    it('tobecloseto',()=>{
        expect(n).toBeCloseTo(0.3);//ini bekerja karena tidak adanya pembulatan
    })
})