// cara umum untuk menggunakan fungsi mock adalah dengan meneruskannya secara langsung sebagai argument ke function yang anda uji(function mock di buat callback)

const doAdd = (a, b, callback) =>{
    callback(a+b);
}

test("calls callback with argument added",()=>{
    const mockCallback = jest.fn();
    doAdd(1,2,mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(3);
})

// strategi ini membutuhkan kode kamu mendukung dependency injection,