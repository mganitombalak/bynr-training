// FUNCTIONS
var g = "Gani";
var n = 4;
var o = { name: "Morhipo" }
var f = function () { // function() constructor
    console.log("f called");
}

// console.log(typeof g);
// console.log(typeof n);
// console.log(typeof o);
//console.log(typeof f);// function object

// FUNCTION STATEMENTS (FUNCTION DECLARATION)
function sayHello(name) {
    console.log(`Hello ${name}`);
}

//sayHello('Boyner');

var digerF = sayHello;

// digerF('Morhipo');


// FUNCTION EXPRESSION
// s();
var s = function (name) { // Anounymous
    console.log(`Hello ${name}`);
}

// s('Boyner');

// ARGUMENTS

function saySometing(firstWord, lastWord, ...other) {
    console.log(arguments.length);
    // console.log(`${firstWord} ${lastWord}`);
    console.log(typeof arguments);
    other.forEach(console.log);
    // for-of
    // for (let a of arguments) {
    //     console.log(a);
    // }
}
// var gani = {
//     0: "Gani",
//     1: "Tombalak"
// }
saySometing('Mehmet', 'Gani', 'Tombalak', 'Istanbul', 'C#');