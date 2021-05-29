// berbeda dengan jest.fn yang membuat mock function dengan manual, jest.mock akan membuat mock function secara otomatis

// misal kita membuat module math.js, dengan menggunakan jest.mock('math.js') maka semua functian yang ada di dalam module math.js akan secara otomatis dibuatkan mock functionnya

const app = require("./app");
const math = require("./math");

// membuat semua fuction pada module math.js menjadi mock function(jest.fn)
jest.mock("./math.js");

test("calls math.add",()=>{
    app.doAdd(1,2);
    expect(math.add).toHaveBeenCalledWith(1,2);
});

test("calls math.substract",()=>{
    app.doSubtract(1,2);
    expect(math.subtract).toHaveBeenCalledWith(1,2);
});

// ini adalah mocking paling mudah dan umum digunakan untuk mock module

// kelemahan strategi ini adalah sulit untuk mengakses implementasi asli dari module

// untuk kasus ini gunakan spyOn

