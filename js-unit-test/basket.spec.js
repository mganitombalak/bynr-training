const actualBasket = require('./basket');

beforeEach(() => {
    actualBasket.items = [{
        productId: 1,
        productName: 'Adidas Sort',
        qty: 2
    },
    {
        productId: 2,
        productName: 'Adidas T-shirt',
        qty: 3
    },
    {
        productId: 3,
        productName: 'Adidas Ayakkabi',
        qty: 1
    }];
});

// test('basket size should not change when duplicate adds', () => {
//     const newItem = {
//         productId: 1,
//         productName: 'Adidas Sort',
//         qty: 2
//     };
//     var actualLength = actualBasket.items.length;
//     actualBasket.add(newItem);
//     var expectedLength = actualBasket.items.length;
//     expect(actualLength).toBe(expectedLength);

// });


test('basket size should not change when duplicate adds', () => {
    const newItem = {
        productId: 1,
        productName: 'Adidas Sort',
        qty: 2
    };

    expect(actualBasket.items).not.toContain(newItem);

    var actualLength = actualBasket.items.length;
    actualBasket.add(newItem);
    actualBasket.add(newItem);

    expect(new Set(actualBasket.items).size).toBe(actualLength + 1);

});

describe.only('My Sub Test Suite', () => {
    beforeAll(() => {
        actualBasket.items = [];
    });
    test('should basket remove method throw ex when it is empty', () => {
        expect(actualBasket.remove(1)).ToThrow();
        expect(actualBasket.remove(1)).ToThrow('Basket does not contain any item');

    });
});