// EXECUTION CONTEXT

var personelName="Gani Tombalak";

console.log(personelName);

console.log(this);

function myF(){
    console.log("========= MY F ===========");
    var personelName="Yasin Coskun";
    console.log(personelName);
    console.log(this.personelName);
    console.log(this);
    mySecondF(personelName);
    console.log("========= #MY F ===========");
}

function mySecondF(name){
    console.log("========= MY SECOND F ===========");
    console.log(personelName);
    console.log(`Hello ${name}`);
    console.log(this);
    console.log("========= #MY SECOND F ===========");
}

myF();


// FUNCTION STACK



// SCOPE CHAIN