const actualBasket = require('./basket');


let mockedAdd = jest.fn(p =>actualBasket.items.unshift(p));
let mockedRemove = jest.fn(id => {
    if (actualBasket.items.length > 0) {
        actualBasket.items = actualBasket.items.filter(x => x.id != id);
        return;
    }
    throw 'Basket does not contain any item';
});

const f = jest.fn(()=>YOUR FUNCTION CALL);

test('should remove given item from basket items', () => {
    actualBasket.items.unshift({
        productId: 5,
        productName: 'Adidas Sneakers',
        qty: 1
    });
    mockedRemove(1)
    let actualLength = actualBasket.items.length;
    expect(mockedRemove).not.toThrow();
    let expectedLength = actualLength-1;
    expect(actualBasket.items.length).toBe(expectedLength);

});