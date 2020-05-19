// didesain untuk menyimpan nilai unik dan menjegah duplikat data

// create set
const s = new Set();

// add item
// kita bisa menambah primitive value ataupun object

s.add('maudy');
s.add('ayunda');

console.log(s);

// check item
console.log(s.has('maudy'));

// delete item
s.delete('ayunda');
console.log(s);

// count set item
s.add('ayunda');

console.log(s.size);

// delete all set items

s.clear();
console.log(s);

// iterate set items
s.add('maudy');
s.add('ayunda');

for (const k of s.values()) {
    console.log(k);
}