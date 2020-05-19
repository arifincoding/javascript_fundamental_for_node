// json(javascript object notation)

// berfungsi untuk menyimpan dan kegiatan bertukar data antara browser dengan server atau sebaliknya

/* 
* aturan
- penggunaan function sebagai object tidak diperbolehkan
- penggunaan date object sebagai value untuk properties tidak diizinkan
- penggunaan undefined sebagai value untuk properties tidak diizinkan
*/

//* stringify
// proses untuk mengubah object literal ke dalam json

var objectLiteral = {
    name: "ahmad arifin",
    age: 20,
    city: "trenggalek"
};

var JSONData = JSON.stringify(objectLiteral);
console.log(typeof JSONData) // output string
console.log(JSONData); // output {"name":"ahmad arifin","age":28,"city":"trenggalek"}

//* parse JSON
// proses untuk mengubah json menjadi object literal
var iniJSON = '{"name":"ahmad arifin","age":20,"city":"Trenggalek"}'

var objLiteral = JSON.parse(iniJSON);
console.log(typeof objLiteral); // output object
console.log(objLiteral); // output { nama : 'ahmad arifin', age:20,city:'trenggalek' }

//* parse date in json
// strategi untuk mengatasi data tahun, bulan dan tanggal yang ada dalam json

var data = '{"name":"kanao","born":"1992-12-14","city":"tokyo"}';

var obj = JSON.parse(data);
obj.born = new Date(obj.born);
console.log(obj.born.getFullYear()); //output 1992