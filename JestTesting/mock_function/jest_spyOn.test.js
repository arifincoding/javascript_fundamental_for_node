
// jika kita menginginkan untuk melihat method dipanggil tapi tetap menjalankan original functionnya maka pilihan terbaiknya adalah menggunalan spyOn

const app = require("./app");
const math = require("./math");

test('calls math.add',()=>{

    // membuat mock untuk function add
    // jest.spyOne(module yang di import, nama function)
    const addMock = jest.spyOn(math,"add")

    // memanggil implementasi original(bukan mock function)
    expect(app.doAdd(1,2)).toEqual(3);

    // spy panggilan untuk add yang di simpan(menggunakan mock function)
    expect(addMock).toHaveBeenCalledWith(1,2);
})

// ini berguna untuk skenario dimana anda ingin memastikan bahwa tidak ada berbedaan antara implementasi original dan implementasi mocking