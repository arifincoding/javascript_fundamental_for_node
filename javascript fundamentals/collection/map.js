// create map
// tipe collection baru didesain untuk menyimpan key dan value menggantikan object

var map = new Map();

// add key & value
map.set('1', 'maudy');
map.set(1, 'Ayunda');
map.set(true, 'Faza');

console.log(map);

// get Map item  by key
console.log(map.get('1'));

// delete Map item by key
map.delete(1);
console.log(map);

// delete all Map item
map.clear();
console.log(map)

// check map item by key (has)

var map = new Map();

map.set('depan', 'maudy');
map.set('belakang', 'Ayunda');

console.log(map.has('belakang'));

// count map item
// menghitung jumlah data yang ada di map
console.log(map.size);

// iterate maps key
// mengetahui seluruh keys yang ada pada map
for (const k of map.keys()) {
    console.log(k)
}
// iterate map values
// mengetahui seluruh value yang ada pada map
for (const v of map.values()) {
    console.log(v);
}

// iterate map key
// untuk mendapatkan seluruh key dan value pada map

for (const [k, v] of map.entries()) {
    console.log(k, v);
}