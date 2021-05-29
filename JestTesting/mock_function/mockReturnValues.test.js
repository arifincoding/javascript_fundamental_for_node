
// mock function dapat digunakan untuk menginjeksi test value di dalam kode kamu selama test

const myMock = jest.fn();
console.log(myMock());
// output undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValueOnce(true);

console.log(myMock(), myMock(), myMock(), myMock());

// output = 10, 'x', true, true

const filterTestFn = jest.fn();

// membuat mock mengembalikan true untuk pemanggilan pertama
// dan false untuk pemanggilan kedua

filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

// console.log(filterTestFn(), filterTestFn())

const result = [11,12].filter(num => filterTestFn(num));

console.log(result);
// output [11]

console.log(filterTestFn.mock.calls);
// output [[11],[12]]

test('coba',()=>{
    expect(1).toBe(1);
});