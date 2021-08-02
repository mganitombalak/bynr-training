const { expect } = require('@jest/globals');
const testObject = require('./function');

test.only('sum of 0.2 plus 0.1 should not be 0.3',()=>{
    expect(testObject.add(0.2,0.1)).not.toBe(0.3); // MATCHER 
});
test('sum of 0.2 plus 0.1 should be 0.30000000000000004',()=>{
    expect(testObject.add(0.2,0.1)).toBe(0.30000000000000004);
});

test('sum of 0.2 plus 0.1 should close to 0.3',()=>{
    expect(testObject.add(0.2,0.1)).toBeCloseTo(0.3);
});

