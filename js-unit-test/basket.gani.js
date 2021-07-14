const actualBasket = require('./basket');

// beforeEach(() => {
//     actualBasket.items = [{
//         productId: 1,
//         productName: 'Adidas Sort',
//         qty: 2
//     },
//     {
//         productId: 2,
//         productName: 'Adidas T-shirt',
//         qty: 3
//     },
//     {
//         productId: 3,
//         productName: 'Adidas Ayakkabi',
//         qty: 1
//     }];
// });

// // test('basket size should not change when duplicate adds', () => {
// //     const newItem = {
// //         productId: 1,
// //         productName: 'Adidas Sort',
// //         qty: 2
// //     };
// //     var actualLength = actualBasket.items.length;
// //     actualBasket.add(newItem);
// //     var expectedLength = actualBasket.items.length;
// //     expect(actualLength).toBe(expectedLength);

// // });


// test('basket size should not change when duplicate adds', () => {
//     const newItem = {
//         productId: 1,
//         productName: 'Adidas Sort',
//         qty: 2
//     };

//     expect(actualBasket.items).not.toContain(newItem);

//     var actualLength = actualBasket.items.length;
//     actualBasket.add(newItem);
//     actualBasket.add(newItem);

//     expect(new Set(actualBasket.items).size).toBe(actualLength + 1);

// });

// describe.only('My Sub Test Suite', () => {
//     beforeAll(() => {
//         actualBasket.items = [];
//     });
//     test('should basket remove method throw ex when it is empty', () => {
//         expect(actualBasket.remove(1)).ToThrow();
//         expect(actualBasket.remove(1)).ToThrow('Basket does not contain any item');

//     });
// });

let basketArray = [];
let f;

describe('return values', () => {
    beforeEach(() => {
        basketArray = [];
        f = jest.fn(p => basketArray.unshift(p));
    });

    test('add function should be called one time', () => {
        f({});
        // Mocked function kac kere cagrildi.
        expect(f.mock.calls.length).toBe(1);
    });
    test('first parameter should be null or basketitem', () => {
        let newItem={};
        f(newItem);
        // Mocked function kac kere cagrildi.
        // console.log(f.mock.calls.length);
        expect(f.mock.calls[0][0]).toBe(newItem);

        newItem = {
            productId: 5,
            productName: 'Adidas Sneakers',
            qty: 1
        };
        f(newItem);
        expect(f.mock.calls[1][0]).toBe(newItem);
    });
    test('return size ', () => {
        let newItem = {
            productId: 5,
            productName: 'Adidas Sneakers',
            qty: 1
        };
        // let result = 
        f(newItem);
        // expect(basketArray.length + 1).toBe(result);
        expect(f.mock.results[0].value).toBe(1);
        //    f.mock.results[0].value 
        f.mock.mockReturnValueOnce(1).mockReturnValueOnce(0).mockReturnValueOnce(0);
    });

    test('')
});

// TEST CASES
// 1. Silinip silinmeme
// 2. Throw test
// 3. Parameter check
