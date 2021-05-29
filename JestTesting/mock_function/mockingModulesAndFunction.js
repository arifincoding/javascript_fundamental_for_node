// ada tiga tipe utama mocking module dan function  di dalam jest

// 1. jest.fn : mock sebuah function
// 2. jest.mock : mock sebuah module
// 3. jest.spyOn : spy atau mock sebuah function

// untuk uji coba kita akan membuat 3 file yaitu : math.js, app.js, dan app.test.js

// disini kita akan mengatasi bagaimana cara menguji app.js dan tidak ingin memanggil function yang sebenarnya dari module math.js

// disini bayangkan jika file math.js berisi function2 yang complex dan ingin menghindarinya saat melakukan testing