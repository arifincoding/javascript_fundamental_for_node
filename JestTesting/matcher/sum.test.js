
test('add 1 + 2 to equal 3', ()=>{
    expect(1+2).toBe(3);
});

test('object assigment',()=>{
    const data = {one:1,two:2};
    expect(data).toEqual({one:1,two:2});
})

test('is not zero',()=>{
    for(let a = 3; a > 0; a--){
        expect(a).not.toBe(0);
    }
})