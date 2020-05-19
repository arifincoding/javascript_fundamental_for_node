// kita juga bisa membuat fungsi didalam fungsi

function add() {
    var counter = 0;

    function plus() {
        counter += 1;
    }
    plus();
    return counter;
}

console.log(add()); //output : 1