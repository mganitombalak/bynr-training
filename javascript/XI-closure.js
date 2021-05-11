//CLOSURE

// CURRYING
// function saySomething(something) {
//     return function (name) {
//         console.log(`${something} ${name}`);
//     }
// }

// var f = saySomething("Hello");

// console.log(saySomething("Hello")("Yasin Coskun"));
// console.log(typeof f);
// console.log(f("Yasin Coskun"));

function buildArrayOfFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(((j) => ()=>console.log(j))(i));
    }
    return arr;
}

var myArr= buildArrayOfFunctions();
myArr[0]();
console.log(myArr);
myArr[1]();
myArr[2]();

// var g={fullName:"Gani",surname:"Tombalak"};

// {fullName} = g;

// console.log(fullName);
