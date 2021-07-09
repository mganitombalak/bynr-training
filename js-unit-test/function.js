// REQUIREMENT
// A function which spreads given object
// if object cannot be iterable it should return an empty array.

const myObject = {
    splitter: obj => [...obj],
    add: (a, b) => a + b
}
// 1. Trigger oluyomu
// 2. Parametresi dogrumu
// 3. Return dogrumu

module.exports = myObject;
// console.log(splitter("gani"));
// console.log(splitter(null))
// console.log(splitter(undefined));
// console.log(splitter([2,3,4,5]));
// 1. Should return empty array if parameter is not iterable
// 2. Should return an array if parameter is iterable
// 3. if parameter is an object,result should contain parameter fields
// 4. if parameter is a string, result should contain parameter characters
// 5. if parameter is an array, result should contain parameter elements


// FALSE POSITIVE
// CORONA TESTI POZIF CIKMASI AMA COVID OLMAMAN

// FALSE NEGATIVE
// CORONA TESTIN NEGATIF AMA SEN COVIDSIN

// TRUE POSITIVE
// CORONA TESTIN POSITIVE VE SEN COVIDSIN

// TRUE NEGATIVE
// CORONA TESTIN POSTIVE AMA SEN COVID DEGILSIN

// SETUP - TEST SUITE
// REPEATING - TUM TESTLERDE HER SEFERINDE
// TEARUP
// beforeEach
// TEARDOWN
// afterEach

// ONE TIME SETUP 
// TEARUP 
// beforeAll,
// TEARDOWN
// afterAll

// TEST / CASE

// TEST DOUBLES

// FAKES
// AYNI DAVRANISI GOSTEREN BELKI DAHA SADE YAPILAR
// ClassA -> a,b,c, f(),g()
// fakeClassA -> b,c,g()

// STUB
// THIS OBJECTS HOLDS CONSTANT and PREDEFINED DATA and THEY GIVES SAME ANSWERS TO ALL CALLS
// class HttpClient{ get(url,headers){real code for get request}}
// class StubHttpClient{ get(url,headers){return {user:'gani',surname:'tombalak'}}}
// MOCK
// MOCKS ARE OBJECT TO CHECK WHETHER RELATED OBJECTS ACTIONS PERFORMED OR NOT

// DUMMY
// HELPER OBJECT WHICH ARE NOT AFFECTING TEST
// const field={name:'That field'};
// const obj = {
//     myAnotherField={}
// }

// SPIES
// SPIES ARE OBJECT TO CHECK WHETHER RELATED OBJECTS ACTIONS PERFORMED OR NOT WITH DATA FLOW