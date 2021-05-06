// LEXICAL Environment (Scope)

var myVariable="Morhipo";
console.log(myVariable);
console.log(this);
{
    var text="Boyner";
    let text2="Altinyildiz";
    console.log(myVariable);
    {
        var myVariable='Hopi';
        console.log(text2);
        console.log(myVariable);
    }
}