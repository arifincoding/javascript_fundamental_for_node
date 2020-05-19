// unnamed class

let mywallet1 = class {
    constructor(id, balance) {
        this.id = id;
        this.balance = balance;
    }
};

console.log(mywallet1.name); //output : mywallet1
console.log(typeof mywallet1); //output : function

// named class
let mywallet2 = class wallet {
    constructor(id, balance) {
        this.id = id;
        this.balance = balance;
    }
}

console.log(mywallet2.name); //output : wallet
console.log(typeof mywallet2); //output : function