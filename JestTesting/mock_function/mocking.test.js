// tujuan dari mocking adalah mengganti sesuatu yang tida bisa kita kontrol dengan sesuatu yang dapat kita kontrol. jadi penting bahwa apa yang kita ganti memiliki fitur apa yang kita butuhkan

// mocking adalah teknik untuk mengisolas subject test dengan mengganti dependencies(ketergantungan) dengan object yang dapan kita kontrol

// contoh sederhananya adalah membuat modul yang di import menjadi sesuatu yang bisa kita kontrol.

// mock function menyediakan 3 fitur yaitu :

// 1. menangkap panggilan
// 2. menentukan hasil pengembalian (return velue)
// 3. merubah implementasi

// cara simple untuk membuat sebuah mock function adalah dengan jest.fn()

// dengan jest.fn dan expect untuk menguji panggilan yang di tangkap

test("return undefined by default",()=>{
    const mock = jest.fn();

    let result = mock("foo");

    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("foo");
})

// dan kita dapat merubah nilai pengembalia, implementasi, atau promise resolusi

test("mock implementation",()=>{
    const mock = jest.fn(() => "bar");

    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
});

test("also mock implementation",()=>{
    const mock = jest.fn().mockImplementation(()=>"bar");

    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");

})

test("mock implementation one time",()=>{
    const mock = jest.fn().mockImplementationOnce(()=>"bar");

    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");

    expect(mock("baz")).toBe(undefined);
    expect(mock).toHaveBeenCalledWith("baz");
})

test("mock return value",()=>{
    const mock = jest.fn();
    mock.mockReturnValue("bar");

    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
});

test("mock promise resolution",()=>{
    const mock = jest.fn();
    mock.mockResolvedValue("bar");

    expect(mock("foo")).resolves.toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
});

