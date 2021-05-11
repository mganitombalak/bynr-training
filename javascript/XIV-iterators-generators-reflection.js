// ITERABLE STRUCTURES (ARRAY-LIKE)

// ARRAY
// STRING
// ARGUMENTS
// MAPS
// SETS

var person = {
    name: "Gani",
    surname: "Tombalak",
    age: 38
}

// var arr =[1,2,3,4,5];
// arr.forEach(i=>console.log(i));
// for(let i of arr){
//     console.log(i);
// }

// var obj="Mehmet Gani";
// for(let c of obj){
//     console.log(c);
// }
// SYMBOL.ITERATOR
// person[Symbol.iterator] = function* () {
//     yield this.name;
//     yield this.surname;
//     yield this.age;
    // return {
    //     // this is the iterator object, returning a single element (the string "bye")
    //     next: function () {
    //       return this._first ? {
    //         value: 'bye',
    //         done: (this._first = false)
    //       } : {
    //         done: true
    //       }
    //     },
    //     _first: true
    //   };
// }
// for(let key of person){
//     console.log(key);
// }

// console.log(person[Symbol.iterator]);
// console.log([...person]);

// GENERATORS
function* topla(sayi){
    yield sayi+1;
    yield sayi+2;
    yield sayi+3;
}

//  var iterator = topla(1);
//  console.log(iterator.next().done); // 2 
//  console.log(iterator.next().done); // 3
//  console.log(iterator.next().value); // 4
//  console.log(iterator.next().value); // ?

 // REFLECTION

function* getObjectReclectedKeys(obj){
    const reflectedProperties = Reflect.ownKeys(obj);
    for(let key of reflectedProperties){
        yield [key,obj[key]];
    }
}

// [["name","Gani"],["surname","Tombalak"],["age",38]]

for(let [key,value] of getObjectReclectedKeys(person))
{
    console.log(`${key}=>${value}`); 
}

// name=>Gani
// surname=>Tombalak
// age=>38


