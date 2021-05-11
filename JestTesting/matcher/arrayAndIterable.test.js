// kita dapat memeriksa sebuah array atau perulangan berisi item tertentu menggunakan toContain

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bag',
    'paper towels',
    'beer',
];

describe('memeriksa item pada array shopping list',()=>{
    it('array shopping list berisi item beer didalamnya',()=>{
        expect(shoppingList).toContain('beer');
    });
    it('array shopping list berisi item beer didalamnya dengan new set',()=>{
        expect(new Set(shoppingList)).toContain('beer');
    });
});

// note: new set() berfungsi value unique dari semua tipe data jadi nilai di dalam array new set() ini tidak boleh ada yang sama.