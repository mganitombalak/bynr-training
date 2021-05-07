// LITERAL OBJECT 

var a = {
    name: "Gani",
    surname: "Tombalak",
    getFullName: function () { // ES5
        console.log(this);
        return `${this.name} ${this.surname}`
    }
}
// var a = {
//     name: "Gani",
//     surname: "Tombalak",
//     getFullName: () => { // ES6
//         console.log(this);
//         return `${this.name} ${this.surname}`
//     }
// }
// array-like
var b = {
    0: "Text1",
    1: "Text2"
}

// KEY:VALUE
// console.log(a.name);
// console.log(a.surname);
// --------------------------
// console.log(a['name']);
// console.log(a['surname']);
// console.log(a['getFullName']());
// --------------------------
// console.log(b[0]);
// console.log(b[1]);
// --------------------------
// console.log(b['0']);
// console.log(b['1']);

// var c = Object.create(a);

// ES 5 FIRST CLASS OBJECT
function person(firstName, lastName) {
    this.name = firstName;
    this.surname = lastName;
    this.getFullName = () => { //!!!!! 
        return `${this.name} ${this.surname}`;
    }
    // this.getFullName = function() { 
    //     return `${this.name} ${this.surname}`;
    // }
}

var p1 = new person("Murat", "Dervent");
var p2 = new person("Mehmet Sait", "Isik");
// p1.name = "Murat";
// p1.surname = "Dervent";
// console.log(p1.getFullName());
// console.log(`${p2.name} ${p2.surname}`);

// ES6 CLASS
class Person {
    constructor(firstName, lastName) {
        this.name = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.name} ${this.lastName}`;
    }
}

var prsn = new Person("Hasan", "Satici");

// console.log(prsn.getFullName());



var myObject = {
    name: "My Object",
    print: function () {
        console.log(this); // MyObject
        this.name = "Updated My Object";
        console.log(this);// MyObject
        var update = function (newValue) {
            console.log(this); // WINDOW
            this.name = newValue;
        }
        update("My Object Updated Again!");
        console.log(this); // MyObject
    }
}

myObject.print();