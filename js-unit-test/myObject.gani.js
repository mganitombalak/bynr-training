const actualObject = require('./myObject');

test('actual and test objects should be identical', () => {
    const testObject = {
        name: 'Gani',
        surname: 'Tombalak',
        // getFullName: () => this.name + ' ' + this.surname
    };
    expect(actualObject).toEqual(testObject); // Value Check
});

test('actual and test objects should not be same', () => {
    const testObject = {
        name: 'Gani',
        surname: 'Tombalak',
        // getFullName: () => this.name + ' ' + this.surname
    };
    expect(actualObject).not.toBe(testObject); // Object.is Reference Check

    // ToBeNull => sadece null check
    // ToBeUndefined => sadece undefined check
    // ToBeTruthy=>  if'den true donenler
    // ToBeFalsy=> if'den false donenler
    // toBe(true) VS ToBeTruthy(true)
});

test('actual object fields should have only string values', () => {
    expect(typeof (actualObject.name)).toBe('string');
    expect(typeof (actualObject.surname)).toBe('string');
});

test('object\'s native fields count should be 2',()=>{
    expect(Reflect.ownKeys(actualObject).length).toBe(2);
});

test.only('Object name field should end with Gani',()=>{
    expect(actualObject.name).toMatch(/Gani$/);
});

// toBeGreaterThan
// toBeEqualorGreaterThan
// toBeLessThan
//toBeLessThanorEqual





