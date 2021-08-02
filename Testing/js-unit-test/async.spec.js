const actualClient = require('./async');

const parameterFunction = jest.fn(p => console.log(p));

test('parameter function of fake should get called once', () => {
    actualClient.fake(parameterFunction);
    expect(parameterFunction).toHaveBeenCalled();//toBeCalled
    expect(parameterFunction).toBeCalled();
    expect(parameterFunction).toHaveBeenCalledTimes(10);
});

// test('parameter function of fake should get called with parameter \'fake\'', () => {
//     actualClient.fake(parameterFunction);
//     expect(parameterFunction).toHaveBeenCalledWith('fake');//toBeCalledWith
// });

test('parameters', () => {
    actualClient.fake(parameterFunction);
    expect(parameterFunction).toHaveBeenNthCalledWith(5, 'fake-4')
    expect(parameterFunction).toHaveBeenLastCalledWith('fake-9');//toBeCalledWith
});

test.only('done with callback', done => {
    let fakeFMethod = jest.fn((p,i) => {
        expect(p).toBe('fake');
        done();
    });
    actualClient.fake(fakeFMethod);
});