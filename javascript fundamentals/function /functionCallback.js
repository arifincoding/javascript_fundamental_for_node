// callback adalah sebuah fungsi yang dibuat dan dieksekusi didalam fungsi lain

function greeting(name) {
    console.log('Hello ' + name);
}

function processUserInput(callback) {
    var name = 'ahmad arifin';
    callback(name);
}

processUserInput(greeting); //output : Hello ahmad arifin