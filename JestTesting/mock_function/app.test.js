// mock sebuah function dengan jest.fn
// strategi paling dasar untuk mocking adalah menetapkan kembali function ke function mock kemudian, dimanapun function yang ditetapkan ulang digunakan. yang dipanggil adalah function tiruan bukan function asli

const app = require("./app");
const math = require("./math");

// membuat mock function dari module math.js
math.add = jest.fn();
math.subtract = jest.fn();

test("call math.add",()=>{
    app.doAdd(1,2);
    expect(math.add).toHaveBeenCalledWith(1,2);
});

test("call math.substract",()=>{
    app.doSubtract(1,2);
    expect(math.subtract).toHaveBeenCalledWith(1,2);
})