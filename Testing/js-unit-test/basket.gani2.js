const actualBasket = require('./basket');


let mockedAdd = jest.fn(p => {
    if (p) {
        return actualBasket.items.unshift(p);
    } 
    throw new Error('Object is not as expected.');
});
let mockedRemove = jest.fn(id => {
    if (actualBasket.items.length > 0) {
        actualBasket.items = actualBasket.items.filter(x => x.id != id);
        return;
    }
    throw new Error('Basket does not contain any item');
});

// const f = jest.fn(()=>YOUR FUNCTION CALL);

test('should remove given item from basket items', () => {
    actualBasket.items.unshift({
        productId: 5,
        productName: 'Adidas Sneakers',
        qty: 1
    });
    mockedRemove(1)
    let actualLength = actualBasket.items.length;
    expect(mockedRemove).not.toThrow();
    let expectedLength = actualLength - 1;
    expect(actualBasket.items.length).toBe(expectedLength);
});

// BASKET ITEM DEGILSE THROW EXCEPTION
test('should basket add method accept only basket item', () => {
    let basketItem = {
        productId: 5,
        productName: 'Adidas Sneakers',
        qty: 1
    };
    mockedAdd(basketItem);
    expect(mockedAdd).toThrow();
    //.toStrictEqual(basketItem)
});
test('should basket add method throws error when parameter is not basket item', () => {
    let basketItem = {
        productName: 'Adidas Sneakers',
        qty: 1
    };
    mockedAdd(basketItem);
    expect(mockedAdd).toThrow();
});