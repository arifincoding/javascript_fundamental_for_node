// dalam javascript reference types direpresentasikan dalam object, object bisa memiliki wujud dan nilai berbeda - beda sebuah object mampu menyimpan bebagai berbagai nilai secara heterogenous, sebuah Object mampu menyimpan menyimpan berbagai nilai secara (heterogen)

// contoh reference datatypes

// array
var name = ["arifin", "budi"];
var profil = ["ahmad  arifin", 20, true]

// date
var date = new Date();

// regExp

// map dan weakMap

// set dan WeakSet

// object

let bio = {
    name: "arifin", //property name string
    ucapSalam: function () { //property ucapSalam function
        alert("hello world!");
    }
}

console.log(bio.name); //arifin
bio.ucapSalam(); //hello world