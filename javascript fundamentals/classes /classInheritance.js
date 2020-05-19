// parent class

class Wallet {
    constructor(id, balance) {
        this.id = id;
        this.balance = balance;
    }
    getID() {
        return this.id;
    }
    static getInfo() {
        return 'this class contains property, method, static method getter & setter';
    }
    get PropBalance() {
        return this.balance;
    }
    set PropBalance(balance) {
        this.balance += balance;
    }
}

// child class

class Ewalet extends Wallet {
    constructor(id, balance, type) {
        super(id, balance); //menerima parameter untuk parent class
        this.type = type;
    }
}

const myWallet = new Ewalet(1, 2000, "gopay");
console.log(myWallet.id); //output : 1
console.log(myWallet.balance); //output : 2000
console.log(myWallet.getID()); //output : 1
console.log(Ewalet.getInfo()); //output: this class contains property, method, static method getter & setter

myWallet.PropBalance = 1000;
console.log(myWallet.PropBalance); //output : 3000