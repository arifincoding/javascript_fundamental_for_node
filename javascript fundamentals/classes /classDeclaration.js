class wallet {
    constructor(id, balance) {
        this.id = id;
        this.balance = balance;
    }
}

// untuk menggunakan class
var a = new wallet(1, 2000);
console.log(a); //output wallet{id:1,:balance:2000}

//* constructor
// method spesial yang digunakan untuk membuat object class
// sebuah class hanya memiliki 1 contructor
// jika kita ingin membuat contruktor dengan sekumpulam argument tanpa batas

class log {
    constructor(...args) {
        console.log(args);
    }
}

new log('data 1', 'data 2', 'data 3'); //output : ['data 1','data 2','data 3']

//* static method
// kita dapat memanggil method yang dimiiki class oleh class tanpa perlu membuat representasi object dari suatu class

class wall {
    constructor(id, balance) {
        this.id = id;
        this.balance = balance;
    }
    static getBalance() {
        return 'your balance is 0';
    }
}

console.log(wall.getBalance());
// output : your balance is 0


// * getter and setter

class wlt {
    constructor(id, balance) {
        this.id = id;
        this.balance = balance;
    }
    get Balance() { //getter
        return this.balance;
    }
    set Balance(balance) { //setter
        this.balance += balance;
    }
}

const duitku = new wlt(1, 2000);

// menggunakan setter
duitku.Balance = 2000;
// menggunakan getter
console.log(duitku.Balance); //output 4000