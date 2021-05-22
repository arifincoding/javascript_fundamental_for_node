// fungsinya sama dengan beforeEach dan afterEach akan tetapi beforeAll dan dan afterAll hanya dijalankan sekali
// beforeAll dijalan sekali yaitu sebelum semua test bejalan (setup yang ada di dalam beforeAll dapat digunakan oleh semua test)
// afterAll dijalan sekali yaitu setelah semua test dijalankan
// jika beforeAll dan afterAll berada di dalam describe maka setup hanya berlaku oleh test yang berada di dalam describe tersebut

beforeAll(()=>{
    console.log('before all');
});

afterAll(()=>{
    console.log('after all');
});

test('test satu',()=>{
    expect(3).toBe(3);
});

test('test dua',()=>{
    expect(4).toBe(4);
});