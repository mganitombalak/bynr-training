
var person = {
    name: "Gani",
    surname: "Tombalak",
    getFullName:function(){
        return `${this.name} ${this.surname}`;
    }
}

var person2 = {
    name: "Hasan",
    surname: "Satici"
}

var Person = {
    getFullName: function (something) {
        console.log(this);
        console.log(`${something},${this.name} ${this.surname}`);
    }
}
// console.log(person.getFullName());
// console.log(person2.getFullName());

// BIND
// getFullName("Hallo"); // GETS ERROR
// var getFullName1 = saySomething.bind(person);
// var getFullName2 = saySomething.bind(person2);
// console.log(typeof saySomethingForPerson);
// getFullName1("Ich bin");
// getFullName2("My name is ");

//CALL
// Person.getFullName.call(person, "Hallo");
// Person.getFullName.call(person2, "Hello");


// APPLY
// Person.getFullName.apply(person, ["Hallo"]);
// Person.getFullName.apply(person2, ["Hello"]);


// SUBSTUTING METHOD OF ANOTHER OBJECT
console.log(person.getFullName());
console.log(person.getFullName.apply(person2));

