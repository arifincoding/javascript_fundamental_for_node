// call
// dengan menggunakan call kita dapat menggunakan property yang ada pada object lain di function

// contoh 1
var person = {
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

var person1 = {
    firstName: 'ahmad', //property
    lastName: 'arifin' //property
}

var x = person.fullName.call(person1); //sekarang property pada object person1 dapat digunakan pada function fullName yang ada pada object person
console.log(x); //output : ahmad arifin

// contoh 2
// menggunakan suatu property dari suatu object di dalam suatu object

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food'; //this berfungsi agar kita memiliki akses terhadap property yang dimiliki sebuah function
}

var x = new Food('cheese', 5); //membuat object Food{name:'cheese',price:5}

console.log(x.name); //output: cheese
console.log(x.category); //output : food

// contoh 3

var orang = {
    fullName: function (city, country) {
        return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
    }
}

var orang1 = {
    firstName: 'ahmad',
    lastName: 'arifin'
};

var x = orang.fullName.call(orang1, 'trenggalek', 'indonesia');
console.log(x); //output : ahmad arifin,trenggalek,indonesia

// apply

var uwong = {
    fullName: function (city, country) {
        return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
    }
};

var uwong1 = {
    firstName: 'kamado',
    lastName: 'tanjiro'
};

var x = uwong.fullName.apply(uwong1, ['tokyo', 'japan']);

console.log(x); //output : kamado tanjiro,tokyo,japan