// IIFE

var fullName="Gani";

function sayHi(name){
    console.log(`Hi ${name}`);
}

sayHi(fullName);

var sayHiFormal =(name)=>console.log(`Hello ${name}`);

sayHiFormal("Gani");

(name=>console.log(`S A ${name}`))(fullName); // IIFE

(function (name){
    console.log(`A S ${name}`);
})(fullName);