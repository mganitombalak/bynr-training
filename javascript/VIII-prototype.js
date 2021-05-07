function person(firstName, lastName) {
    this.name = firstName;
    this.surname = lastName;
}

var p1 = new person("Gani", "Tombalak");
var p2 = new person("Yasin", "Coskun");
// p2.getFullName = function () {
//     return `${this.name} ${this.surname}`;
// }
person.prototype.getFullName = function () {
    return `${this.name} ${this.surname}`;
}
// var f = Array.prototype.remove;
// if(Array.prototype.remove && (typeof Array.prototype.remove)!=='function')
// {
//     //you implementation
//     f();
// }

console.log(p1.getFullName());
// delete p2.getFullName;
console.log(p2.getFullName());