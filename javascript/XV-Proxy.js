//PROXY

const person = {
    name: "Mehmet",
    surname: "Tombalak"
}

// var f = (p) => console.log(`Hello, ${p.name} ${p.surname}`);
// f(person);

var personChangeHadler = {
    set(target, key, value,oldValue) {
        console.dir(target);
        console.log(`${key} is changed from ${oldValue} to ${value}`);
    }

}
var proxy = new Proxy(person, personChangeHadler);

proxy.name = "Mehmet Gani";
proxy.surname = "Tombalak";

<div>{{name}}</div>
<div>{{surname}}</div>