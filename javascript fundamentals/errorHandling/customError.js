function Wallet(id) {
    if (walletValidation(id)) {
        this.id = id;
    }
}

function walletValidation(id) {
    if (id === undefined) {
        try {
            throw new Error("Wallet validation Error: Cant Create Object without ID !");
        } catch (err) {
            console.log(err.message);
            return false;
        }
    } else if (typeof id === 'string') {
        try {
            throw new Error("wallet validation error: input id must be number !");
        } catch (err) {
            console.log(err.message);
            return false;
        }
    }
    return true;
}

var mywallet = new Wallet();
console.log(mywallet.id); //output undefined

var mywallet = new Wallet(99);
console.log(mywallet.id); //output : 99

var mywallet = new Wallet('2000');
console.group(mywallet.id); //output : undefined